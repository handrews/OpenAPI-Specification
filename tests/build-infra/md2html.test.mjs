import { execFile } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { expect, test } from "@oai/build-infra/test";

const require = createRequire(import.meta.url);
const packageRoot = dirname(require.resolve("@oai/build-infra/package.json"));
const renderer = join(packageRoot, "src/md2html/md2html.js");

test("the installed build-infra package renders specification Markdown", async () => {
  const fixture = mkdtempSync(join(tmpdir(), "oas-md2html-"));

  try {
    const config = join(fixture, "spec.config.json");
    const maintainers = join(fixture, "MAINTAINERS.md");
    const specification = join(fixture, "1.0.0.md");

    writeFileSync(config, JSON.stringify({
      slug: "fixture",
      shortName: "Fixture",
      titleName: "Fixture Specification",
      abstractQuestion: "What is the fixture?",
      abstractText: "A small installed-package integration fixture."
    }));
    writeFileSync(maintainers, "# Maintainers\n\n- Fixture Maintainer\n");
    writeFileSync(specification, [
      "# Fixture Specification",
      "",
      "## Version 1.0.0",
      "",
      "| Version | Date |",
      "| ------- | ---------- |",
      "| 1.0.0   | 2026-10-02 |",
      "",
      "## Introduction",
      "",
      "Rendered by the installed build-infra package.",
      ""
    ].join("\n"));

    const output = await runRenderer([
      "--spec-config", config,
      "--maintainers", maintainers,
      specification
    ], fixture);

    expect(output.code).toBe(0);
    expect(output.stderr).toBe("");
    expect(output.stdout).toContain("<title>Fixture Specification v1.0.0</title>");
    expect(output.stdout).toContain("<h2>What is the fixture?</h2>");
    expect(output.stdout).toContain("Rendered by the installed build-infra package.");
  } finally {
    rmSync(fixture, { recursive: true, force: true });
  }
});

function runRenderer(args, cwd) {
  return new Promise((resolve) => {
    execFile(process.execPath, [renderer, ...args], { cwd }, (error, stdout, stderr) => {
      resolve({
        code: error?.code ?? 0,
        stdout,
        stderr
      });
    });
  });
}

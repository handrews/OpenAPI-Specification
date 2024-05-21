---
owner: baywet
issue:
description: Binary data encoded as a url-safe string.
specifications:
  - "[RFC4648 §5](https://www.rfc-editor.org/rfc/rfc4648#section-5)"
base_type: string
layout: default
deprecated:
  in: '3.1'
  replacement: "`{contentEncoding: base64url}`"
  specifications:
    - "[JSON Schema Validation draft 2020-12 §8.3](https://json-schema.org/draft/2020-12/json-schema-validation.html#name-contentencoding)"
    - "[RFC4648 §5](https://www.rfc-editor.org/rfc/rfc4648#section-5)"
---

{% capture summary %}
The `{{page.slug}}` format is binary data encoded as a url-safe string as defined in {{page.specifications | join:', ' }}.
{% endcapture %}

{% include format-entry.md summary=summary %}

---
owner: handrews
issue:
description: Multipart
media_type: multipart/*
specifications:
  - name: RFC2046
    url: https://www.rfc-editor.org/rfc/rfc2046.html
references:
  - section: Encoding Usage and Restrictions
    anchor: encoding-usage-and-restrictions
  - section: Encoding multipart Media Types
    anchor: encoding-multipart-media-types
  - section: "Example: Streaming Multipart"
    anchor: example-streaming-multipart
layout: default
---

{% capture summary %}
All `multipart` media types are based on a common syntax defined by `multipart/mixed`, and any `multipart` subtype not explicitly registered is expected to be usable by treating it as `multipart/mixed` in accordance with [RFC2046 §5.1.3](https://www.rfc-editor.org/rfc/rfc2046.html#section-5.1.3).

The `boundary` required parameter is common to all `multipart` subtypes, but does not need to be described explicitly in OpenAPI Descriptions as it is typically generated and used automatically, with a value that is not predictable in advance.

The only `multipart` subtype requiring substantially different handling is `multipart/form-data`, which uses part names to correlated parts with named form fields.  All other known `multipart` subtypes do not use names.

{% endcapture %}

{% include media-type-entry.md summary=summary remarks=remarks %}  

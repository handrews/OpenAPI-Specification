---
owner: handrews
issue:
description: Multipart Byte Ranges
media_type: multipart/byteranges
specifications:
  - name: RFC9110 §14.6
    url: https://www.rfc-editor.org/rfc/rfc9110.html#name-media-type-multipart-bytera
references:
  - section: Encoding Usage and Restrictions
    anchor: encoding-usage-and-restrictions
  - section: Encoding multipart Media Types
    anchor: encoding-multipart-media-types
  - section: "Example: Streaming Byte Ranges"
    anchor: example-streaming-byte-ranges
layout: default
---

{% capture summary %}
The `multipart/byteranges` media type is generally handled like `multipart/mixed`, but is more likely to be used in a streaming capacity, requiring the use of the Media Type Object's `itemSchema` and `itemEncoding` fields.
{% endcapture %}

{% include media-type-entry.md summary=summary remarks=remarks %}

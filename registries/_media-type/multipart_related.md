---
owner: handrews
issue:
description: Multipart Related
media_type: multipart/related
specifications:
  - name: RFC2387
    url: https://www.rfc-editor.org/rfc/rfc2387.html
  - name: RFC2557
    url: https://www.rfc-editor.org/rfc/rfc2557.html
references:
  - section: Encoding Usage and Restrictions
    anchor: encoding-usage-and-restrictions
  - section: Encoding multipart Media Types
    anchor: encoding-multipart-media-types
  - section: "Example: Ordered Multipart With Required Header"
    anchor: example-ordered-multipart-with-required-header
layout: default
---

{% capture summary %}
The `multipart/related` media type is generally handled like `multipart/mixed`, but note that RFC2557 establishes a convention of using a per-part `Content-Location` header to allow resolving web links among the parts.
{% endcapture %}

{% include media-type-entry.md summary=summary remarks=remarks %}  

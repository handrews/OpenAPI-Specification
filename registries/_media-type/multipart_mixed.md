---
owner: handrews
issue:
description: Multipart Mixed
media_type: multipart/mixed
specifications:
  - name: RFC2046
    url: https://www.rfc-editor.org/rfc/rfc2046.html
references:
  - section: Encoding Usage and Restrictions
    anchor: encoding-usage-and-restrictions
  - section: Encoding multipart Media Types
    anchor: encoding-multipart-media-types
  - section: "Example: Ordered, Unnamed Multipart"
    anchro: example-ordered-unnamed-multipart
  - section: "Example: Streaming Multipart"
    anchor: example-streaming-multipart
layout: default
---

{% capture summary %}
The `multipart/mixed` media type is an ordered list of parts without names.  It and all other unnamed `multipart` subtypes use a Media Type Object with the `itemEncoding` and/or `prefixEncoding` fields that correlate Encoding Objects with the items in the data array.
{% endcapture %}

{% include media-type-entry.md summary=summary remarks=remarks %}  

---
owner: handrews
issue:
description: Multipart Form Data
media_type: multipart/form-data
specifications:
  - name: RFC7578
    url: https://www.rfc-editor.org/rfc/rfc7578.html
references:
  - section: Encoding Usage and Restrictions
    anchor: encoding-usage-and-restrictions
  - section: Encoding multipart Media Types
    anchor: encoding-multipart-media-types
  - section: "Example: Basic Multipart Form"
    anchor: example-basic-multipart-form
  - section: "Example: Multipart Form with Encoding Objects"
    anchor: example-multipart-form-with-encoding-objects
  - section: "Exampe: Multipart Form with Multiple Files"
    anchor: example-multipart-form-with-multiple-files
  - section: "Appendix C: Using RFC6570-Based Serialization"
    anchor: appendix-c-using-rfc6570-based-serialization
  - section: "Appendix E: Percent-Encoding and Form Media Types"
    anchor: appendix-e-percent-encoding-and-form-media-types
layout: default
---

{% capture summary %}
Multipart forms, which consist of parts named after the form field names, use the Encoding Objects under the Media Type Objects `encoding` field to control how the JSON-like structure defined by the Schema Object maps to each part.  As with the `application/x-www-form-urlencoded`, the names in the ordered name-value pairs need not be unique, although the ordering is not necessarily well-defined.  In accordance with RFC7578, multiple file upload fields are expected to be handled by creating a part for each file and using the same field / part name for each of those parts.
{% endcapture %}

{% include media-type-entry.md summary=summary remarks=remarks %}

---
owner: handrews
issue:
description: XML
media_type: application/xml
specifications:
  - name: RFC7303
    url: https://www.rfc-editor.org/rfc/rfc7303.html
references:
  - section: XML Object
    anchor: xml-object
  - section: XML Modeling
    anchor: xml-modeling
layout: default
---

{% capture summary %}
XML is modeled using the OAS's `xml` extension keyword for JSON Schema, which has an XML Object as its value.  This allows fine-grained control over how each part of the JSON Schema description maps to XML elements or attributes.
{% endcapture %}

{% capture remarks %}
Note that as of OAS v3.2, the XML Object uses the `nodeType` field to determine whether a given Schema Object corresponds to an element, attribute, text node, cdata node, or nothing at all.  If a Schema Object does not correspond to anything, its subschemas, the nodes corresponding to any subschemas are place directly under the node of the parent schema.  Elements with primitive types contain an implicit text node for convenience.  The default `nodeType` is determined in a somewhat complex manner to maintain compatibility with OAS v3.1 and earlier.

In OAS v3.1 and earlier, only elements, their implicit primitive-type text nodes, and attributes were supported, with the now-deprecated `attribute` and `wrapped` flags as controls.
{% endcapture %}

{% include media-type-entry.md summary=summary remarks=remarks %}  

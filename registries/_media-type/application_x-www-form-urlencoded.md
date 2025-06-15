---
owner: handrews
issue:
description: URL-Encoded Forms
media_type: application/x-www-form-urlencoded
specifications:
  - name: WHATWG URL Section 5
    url: https://url.spec.whatwg.org/#application/x-www-form-urlencoded
  - name: HTML 4.01 Section 17.13.4.1 (historical, with slightly different escaping rules)
    url: https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
  - name: RFC1866 Section 8.2.1 (historical, with slightly different escaping rules)
    url: https://www.rfc-editor.org/rfc/rfc1866#section-8.2.1
references:
  - section: Encoding Usage and Restrictions
    anchor: encoding-usage-and-restrictions
  - section: Encoding the x-www-form-urlencoded Media Type
    anchor: encoding-the-x-www-form-urlencoded-media-type
  - section: "Appendix C: Using RFC6570-Based Serialization"
    anchor: appendix-c-using-rfc6570-based-serialization
  - section: "Appendix E: Percent-Encoding and Form Media Types"
    anchor: appendix-e-percent-encoding-and-form-media-types
layout: default
---

{% capture summary %}
URL-Encoded forms use the Encoding Object to control how the JSON-like structure defined by the Schema Object maps to the URL query string-like format.  This can be done either for HTTP message content or (with `in: "querystring"`) for the entire query component of the request URL using a Parameter Object.  Parameter Objects can also control individual query parameters, or sets of query parameters, using `in: "querystring"`.
{% endcapture %}

{% capture remarks %}
The history of this media type is very complex and interwoven with that of the HTML specification, with three different sgroups claiming ownership of the specification, sometimes simultaneously.  To add to the confusion, different iterations of the specification reference different iterations of the URI specification, which themselves define slightly different rules for percent-encoding.  While in most cases the differences are irrelevant, they are covered in detail in [Appendex E](appendix-e-percent-encoding-and-form-media-types).
{% endcapture %}

{% include media-type-entry.md summary=summary remarks=remarks %}  

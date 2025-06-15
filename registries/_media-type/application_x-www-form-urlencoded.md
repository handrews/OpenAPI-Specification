---
owner: handrews
issue:
description: URL-Encoded Forms
media_type: application/x-www-form-urlencoded
specifications:
  - name: WHATWG URL
    url: https://url.spec.whatwg.org/#application/x-www-form-urlencoded
references:
  - section: Encoding Usage and Restrictions
    anchor: encoding-usage-and-restrictions
  - section: Encoding the x-www-form-urlencoded Media Type
    anchor: encoding-the-x-www-form-urlencoded-media-type
layout: default
---

{% capture summary %}
URL-Encoded forms use the Encoding Object to control how the JSON-like structure defined by the Schema Object maps to the URL query string-like format.  This can be done either for HTTP message content or (with `in: "querystring"`) for the entire query component of the request URL using a Parameter Object.  Parameter Objects can also control individual query parameters, or sets of query parameters, using `in: "querystring"`.
{% endcapture %}

{% include media-type-entry.md summary=summary remarks=remarks %}  

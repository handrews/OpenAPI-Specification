---
owner: handrews
issue:
description: SSE Events
specifications:
  - name: WHATWG HTML
    url: https://html.spec.whatwg.org/multipage/iana.html#text/event-stream
media_type: text/event-stream
media_type_unregistered: true
references:
  - section: Special Considerations for text/event-stream Content
    anchor: special-considerations-for-text-event-stream-content
versions: "3.2+"
layout: default
---

{% capture summary %}
Event streams build on the sequential media type support used by sequential JSON media types by further defining a mapping of the individual event format into the Schema Object's data model.
{% endcapture %}

{% include media-type-entry.md summary=summary remarks=remarks %}  

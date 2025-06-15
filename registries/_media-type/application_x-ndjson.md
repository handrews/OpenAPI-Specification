---
owner: handrews
issue:
description: Newline Delimited JSON
specifications:
  - name: NDJSON
    url: https://github.com/ndjson/ndjson-spec/blob/master/README.md
media_type: application/x-ndjson
media_type_unregistered: true
references:
  - section: Sequential Media Types
    anchor: sequential-media-types
  - section: Streaming Sequential Media Types
    anchor: streaming-sequential-media-types
  - section: Sequential JSON
    anchor: sequential-json
versions: "3.2+"
layout: default
---

{% capture summary %}
Newline Delimited JSON uses the same approach as all sequential JSON media types.
{% endcapture %}

{% include media-type-entry.md summary=summary remarks=remarks %}  

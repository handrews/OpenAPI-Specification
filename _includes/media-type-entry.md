# <a href=".">{{ page.collection | replace 'media-type', 'Media Type' | replace '-', ' ' }}</a>

## {{ page.description }}

**[Media Type](https://spec.openapis.org/oas/latest.html#media-types):** `{{ page.media_type }}` {% if value.unregistered %}_unregistered_ {% endif %}

{% if page.specifications %}
**Specifications:**
{% for spec in page.specifications %}
* [{{ spec.name }}]({{ spec.url }})
{% endfor %}
{% endif %}

{% if page.references %}
**OAS References:**
{% for ref in page.references %}
* [{{ ref.section }}](https://spec.openapis.org/oas/latest.html#{{ ref.anchor }})
{% endfor %}
{% endif %}

## Summary

{{ include.summary }}

{% if page.issue %}
### GitHub Issue

* [#{{ page.issue }}](https://github.com/OAI/OpenAPI-Specification/issues/{{ page.issue }})
{% endif %}

{% if page.remarks %}
### Remarks

{{ page.remarks }}
{% endif %}


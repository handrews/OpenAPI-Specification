# <a href="..">{{ page.collection }}</a>

## {{ page.slug }} - {{ page.description }}

Base type: `{{ page.base_type | join:', ' }}`

{{ include.summary }}

{% if page.specifications %}
_Specification(s):_ {{ page.deprecated.specifications | join:', ' }}
{% endif %}

{% if page.deprecated %}
### Deprecated
This format is documented in order to maintain compatibility with older release lines.

_Deprecated as of:_ {{ page.deprecated.in }}

_Replace with:_ {{ page.deprecated.replacement }}

  {% if page.deprecated.specifications %}
_Specification(s):_
    {% for spec in page.deprecated.specifications %}
* {{ spec }}
    {% endfor %}
  {% endif %}
{% endif %}

{% if page.issue %}
### GitHub Issue

* [#{{ page.issue }}](https://github.com/OAI/OpenAPI-Specification/issues/{{ page.issue }})
{% endif %}

{% if page.remarks %}
### Remarks

{{ page.remarks }}
{% endif %}

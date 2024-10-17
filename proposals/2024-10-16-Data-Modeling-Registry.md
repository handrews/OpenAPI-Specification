# Self-Identification

## Metadata

|Tag |Value |
|---- | ---------------- |
|Proposal |[2024-10-16 Object-Identification](https://github.com/OAI/OpenAPI-Specification/tree/main/proposals/{2024-10-16-Object-Identification.md})|
|Relevant Specification(s)|OAS, Arazzo|
|Authors|[Henry Andrews](https://github.com/handrews)|
|Review Manager | TBD |
|Status |Proposal|
|Implementations |n/a|
|Issues | |
|Previous Revisions | |

## Change Log

|Date |Responsible Party |Description |
|---- | ---------------- | ---------- |
|2024-10-16 | @handrews | Initial submission

## Introduction

The OAS uses JSON Schema as its data modeling system.  This works well for JSON, but is not an obvious fit for other media types, or for formats such as HTTP headers that are not defined as media types.

This proposal introduces a data modeling registry to enable data modeling to be extensible outside of the OAS release process.

## Motivation

The OAS currently offers additional Objects to adapt JSON Schema for certain other media types (`application/xml`, `application/x-www-form-urlencoded`, and `multipart/form-data`).
This approach requires changing the OAS whenever new, or newly popular, media types appear.
It also does not address modeling data formats, such as HTTP headers, that are not defined as media types. ().
Finally, it does not allow for experimentation with alternative descriptive technologies such as XSD or CDDL.

In other areas of the OAS, it is reasonable to advise people to add `x-` extension fields to experiment with new features.
However, data modeling is often not a matter of adding fields, but a matter of mapping existing Schema Object structures (sometimes with help from additional Objects and fields) to a different data model.
Individual `x-` extension fields cannot solve this problem.

### Use Cases

There are nearly 30 issues in our backlog that have to do with modeling currently-unsupported or under-supported media types, or other data formats including custom query string syntax and HTTP fields:

* Novel query string formats: 3084, 2511, 2374, 1710, 1706, 1504, 1502, 1501
* JSON streaming: 3730
* JSON-LD: 1100
* CBOR: 3108
* Non-`form-data` `multipart` media types: 3721, 3725
* Accessing `multipart` bodies in callbacks: 2146
* Encryption signatures: 1464
* Proper modeling of HTTP fields (a.k.a. headers): 2748, 2402, 2342, 2296, 1980, 1572, 1237, 738, 667
* XML: 3959, 1652, 1435, 630

Crafting individual solutions for each of these, if we even want to give each one full support, would be a monumental effort.
A data modeling registry would allow us to fix the most important handful directly, and encourage users and tooling vendors to experiment with the use cases that are too niche to justify full support at this time.

## Proposed solution

To each Object that contains a `schema` field, I propose adding a field named along the lines of `schemaModel` or perhaps `dataModel`.
This field would take a new Object, which we'll provisionally call the Data Model Object to go with the `dataModel` field (the exact names are not important at this stage).

The Data Model Object would have two standard fields:  One for the URI (or other name?) of the entry in the Data Modeling Registry, and another that would be similar to the old [`alternativeSchema` proposal](001_Alternative Schema Proposal.md).

At least one of these fields MUST be present.



### Alternative data model

This field would be u

For example, to use XSD, the field analogous to `alternativeSchema` would be used.  This cou

## Detailed design

```Markdown
# Schema

...

## Data Model Object

### Fixed Fields

Field Name | Type | Description
---|:---|:---
model | `string` | A URI-reference (or a plain name?) identifying the modeling approach being used. _TODO:_ Are only registered values allowed here?  What about local experimentation?_
modelType | `string` | A name identifying the underlying syntax used by the modeling approach.  The default value is `"JSON Schema"`.
modelInfo | Map[`string`, Any] | An object with a syntax defined by the modeling approach.
```

The `modelInfo` field is intended to avoid needing a variable set of per-modeling approach fields (`x-` or otherwise) in the Data Model Object proper.
This makes it easier to parse and validate the Data Model Object, and potentially to have some sort of hook for validating `modelInfo` based on `model` (and `modelType`?).

For example, a model that wants to do something similar to the Media Type Object's `encoding` field and its map of Encoding Objects would place the necessary fields under `modelInfo`.

## Backwards compatibility

## Alternatives considered


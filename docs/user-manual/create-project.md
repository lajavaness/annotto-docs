---
sidebar_position: 3
---

# Creating projects

This document aims to provide the information needed to create a project.

## Create a project

You can create a project “from scratch” or by importing configuration files.

:::note
You can find an example of a configuration file for each type of project in **_Project types and annotations_**
:::

### Uploading files:

In order to create a project you must import items to annotate which can be either in text or image format.

#### Metadata (since 21/05/2021)

You can include custom data, which is only saved and returned during export. this data must be added in items.jsonlines, in a “metadata” object which has free content.

_metadata_ must be an object (or omitted), so it must contain keys and values ​​inside. It cannot be a number, date, or string.

```json
"metadata": "contenu" // not ok
"metadata": 12343 // not ok
"metadata": [12343] // not ok
"metadata": { "contenu": 123 } // ok
"metadata": { "contenu": "texte libre" } // ok
"metadata": { "contenu": "texte", "et": [23829438] } // ok
```

#### Mode texte

_The expected item format is as follows._

```json
{"datatype": "text","uuid": "e0870093-180d-46ac-9dd8-2e4b9661025d","data": {"text": "Mon texte"},"metadata": {"objet": "libre à votre usage"}},
{"datatype": "text","uuid": "e0870093-180d-46ac-9dd8-2e4b9661025e","data": {"text": "Mon texte2"}},
{"datatype": "text","uuid": "e0870093-180d-46ac-9dd8-2e4b9661025f","data": {"text": "Mon texte3"}}
```

_ex : items.jsonlines_

:::note
“datatype” is an alias of “type”, the two are interchangeable (for backward compatibility reasons)
:::

#### Image mode

_The expected item format is as follows._

```json
{"uuid": "d7bb0128-c478-4f56-a00a-601ed6bd0801", "datatype": "image", "data": { "url": "s3://annoto-s3-storage/catDataset/cat.1.jpg"}},
{"uuid": "e1c7b817-7f20-4fe5-9c87-99d2cd768402", "datatype": "image", "data": { "url": "s3://annoto-s3-storage/catDataset/cat.2.jpg"}},
{"uuid": "dc86e13b-9d53-468b-ba70-b19e241c4f03", "datatype": "image", "data": { "url": "s3://annoto-s3-storage/catDataset/cat.3.jpg"}},
{"uuid": "d7bb0128-c478-4f56-a00a-601ee6bf0804", "datatype": "image", "data": { "url": "s3://annoto-s3-storage/catDataset/cat.4.jpg"}}
```

_ex : images.jsonlines_

:::note
“datatype” is an alias of “type”, the two are interchangeable (for backward compatibility reasons)
:::

Your images must be hosted elsewhere, on S3 or on public URLs.
For protected S3 URLs, you must add this additional configuration element after creating the project.

:::caution
Your aws credentials (what you put in your ~/.aws/credentials) is strictly confidential. Never share these credentials. Never use these credentials in Annotto.
:::

```json
{
  "s3": {
    // aws access key which (only) gives access to the S3 bucket containing the data
    "accessKeyId": "<YOUR SECRET ID>",
    "secretAccessKey": "<YOUR SECRET ACCESS KEY>" // aws secret
  }
}
```

_ex : config.json_

For more information on the signatures of the different annotto APIs: predictions, upload, users, etc. you can refer to the Swagger documentation : [Swagger UI](https://next.annotto-k8s.lajavaness.com/api-docs)

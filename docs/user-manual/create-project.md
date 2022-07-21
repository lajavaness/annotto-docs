---
sidebar_position: 3
---

# Création de projets

Ce document à pour objectif de fournir les informations nécessaires à la création d’un projet.

## Création de projet

Vous pouvez créer un projet “from scratch” ou en important des fichiers de configuration. Pour voir un exemple de fichiers de configuration, je conseille d’aller exporter une configuration sur l’instance de staging qui contient tous les types de projets.

### Upload des fichiers :

Afin de créer un projet vous devez importer des items à annotter qui sont soi au format texte soit au format image.

#### Metadonnées (depuis 21/05/2021)

Vous pouvez inclure des données custom, qui ne sont que sauvées puis renvoyées lors de l’export. ces données doivent être ajoutées dans items.jsonlines, dans un objet “metadata” qui a un contenu libre.

*metadata* est obligatoirement un objet (ou omis), donc il doit contenir des clés et valeurs à l’intérieur. Il ne peut pas être un nombre, une date, ou une chaîne de caractères.

```json
"metadata": "contenu" // not ok
"metadata": 12343 // not ok
"metadata": [12343] // not ok
"metadata": { "contenu": 123 } // ok
"metadata": { "contenu": "texte libre" } // ok
"metadata": { "contenu": "texte", "et": [23829438] } // ok
```

#### Mode texte

*Le format des items attendu est le suivant.*

```json
{"datatype": "text","uuid": "e0870093-180d-46ac-9dd8-2e4b9661025d","data": {"text": "Mon texte"},"metadata": {"objet": "libre à votre usage"}},
{"datatype": "text","uuid": "e0870093-180d-46ac-9dd8-2e4b9661025e","data": {"text": "Mon texte2"}},
{"datatype": "text","uuid": "e0870093-180d-46ac-9dd8-2e4b9661025f","data": {"text": "Mon texte3"}}
```

*ex : items.jsonlines*

:::note
“datatype” est un alias de “type”, les deux sont intervertibles (pour des raisons de rétrocompatibilité)
:::

#### Mode image

*Le format des items attendu est le suivant.*

```json
{"uuid": "d7bb0128-c478-4f56-a00a-601ed6bd0801", "datatype": "image", "data": { "url": "s3://annoto-s3-storage/catDataset/cat.1.jpg"}},
{"uuid": "e1c7b817-7f20-4fe5-9c87-99d2cd768402", "datatype": "image", "data": { "url": "s3://annoto-s3-storage/catDataset/cat.2.jpg"}},
{"uuid": "dc86e13b-9d53-468b-ba70-b19e241c4f03", "datatype": "image", "data": { "url": "s3://annoto-s3-storage/catDataset/cat.3.jpg"}},
{"uuid": "d7bb0128-c478-4f56-a00a-601ee6bf0804", "datatype": "image", "data": { "url": "s3://annoto-s3-storage/catDataset/cat.4.jpg"}}
```

*ex : images.jsonlines*

:::note
“datatype” est un alias de “type”, les deux sont intervertibles (pour des raisons de rétrocompatibilité)
:::

Vos images doivent être hébergées ailleurs, sur S3 ou sur des URLs publiques.
Dans le cas d’URL S3 protégées, il faut une fois le projet crée “uploader” cet élément de configuration complémentaire.

:::caution
Votre aws credential (ce que vous mettez dans votre ~/.aws/credentials) est strictement personnel. Jamais partager ces credentials. Jamais utiliser ces credentials dans Annotto.
Voir avec Phi pour créer les credentials spécifiques au besoins du projet Annotto en question.
:::

```json
{
  "s3": {
    // aws access key qui donne (uniquement) l'accès au bucket S3 contenant les données
    "accessKeyId": "AKIAV3IKDL2IEWUGCNIK", 
    "secretAccessKey": "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" // aws secret
  }
}
```

*ex : config.json*

Pour plus d’informations sur les signatures des différentes API annotto : predictions, upload, users, etc.. vous pouvez vous référer à la documentation Swagger : [Swagger UI](https://next.annotto-k8s.lajavaness.com/api-docs)

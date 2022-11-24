# Création d'un projet type : Transcription

Depuis le header, je clique sur **_Create new project_**.

![Screenshot 1-1](../../../assets/screenshot-1-1.png)

### 1/ Étape Project

On renseigne les champs obligatoires :

- **_Client_**
- **_Project type_**
- **_Project name_**
- **_Project deadline_**
- **_Project description_**

Les champs non obligatoires :

- **_Default markers_** : apparaît sur l’item plus tard
- **_to delete_** : indique un item à supprimer
- **_to check_** : indique un item à vérifier
- **_to discuss_**: indique un item à discuter

On peut définir des niveaux d’accès à l’item importé à :

- **_l’admin_**
- **_le data scientist_**
- **_l’utilisateur_**

![Screenshot 1-2](../../../assets/screenshot-1-2.png)

### 2/ Étape Files

![Screenshot 1-3](../../../assets/screenshot-1-3.png)

les champs :

- **_Config file_**: fichier de config
- **_Annotations file_**: fichier contenant les annotations liées à l’item
- **_Predictions file_**: fichier contenant les predictions liées à l’item

Contrairement aux annotations, les prédictions viennent d’un modèle pré-entraîné. Après l’import, on pourra choisir de les garder ou non.

Quant au champ obligatoire :

- **_item file_** : c’est une liste qu’il faut préparer à l’avance comprenant le type de l’item et une id unique

### 3/ Étape Labeling

On va définir ce qu’on veut faire avec notre projet.

- **_Task Title_** : définit le nom
- **_Task Type_** : définit le type

![Screenshot 1-4](../../../assets/screenshot-1-4.png)

On peut ajouter un nouveau label en cliquant sur **_Add a new label_**.

Les champs :

- **_Label Code_** : doit être unique
- **_Label Name_** : ne doit pas forcement porter le même nom que Label Code
- **_Color_** : définit la couleur du label
- **_Hotkey_** : permet de créer un raccourci clavier
- **_Label Description_** : une description du label

![Screenshot 1-5](../../../assets/screenshot-1-5.png)

:::caution
Une fois ces labels définis, il n’est plus possible de les modifiers par la suite.
:::

### 4/ Étape Annotation Guide

On peut ici définir des règles d’annotations.

Une fois les spécifications d’un projet renseignées, on peut cliquer sur **_Add a new task_** pour commencer à renseigner les détails d'un autre projet.

![Screenshot 1-6](../../../assets/screenshot-1-6.png)

_exemple d'un fichier de config_

```json
{
{
   "text": [
      {
         "name": "text",
         "values": [
            {
               "parents": [],
               "exposed": true,
               "type": "text",
               "annotationPourcent": 100,
               "annotationCount": 3,
               "_id": "634837bf795c92001ed8ae54",
               "project": "634837bf795c92001ed8ae53",
               "value": "text",
               "label": "text",
               "category": "text",
               "updatedAt": "2022-10-13T16:07:27.503Z",
               "createdAt": "2022-10-13T16:07:27.503Z",
               "__v": 0
            }
         ]
      }
   ],
   "name": "DEMO: OCR",
   "client": "LJN",
   "type": "image",
   "highlights": [],
   "description": "test text task",
   "admins": [
      "admin@test.com",
      "data@test.com",
   ],
   "users": [],
   "dataScientists": [],
   "defaultTags": [
      "To delete",
      "To check",
      "To discuss",
      "quality",
      "empty"
   ],
   "showPredictions": true,
   "prefillPredictions": true,
   "filterPredictionsMinimum": 0.4,
   "deadline": "2022-12-31T10:41:24.456Z",
   "entitiesRelationsGroup": []
}
}
```

_exemple d'un fichier d'items_

```json
{
{"predictions":{},
"uuid":"ec0a4c92-f5f6-11eb-a271-acde48001122",
"data":{"url":"s3://data-for-demo-ljn/invoice-parsing/data/constat_circumstance/CDN_MAYENNE1_PAPER_20210401104747_00001_001_002_CONSTAT_Page_1_0.jpg"},
"type":"image",
"metadata":{},
"description":"",
"annotated":false,
"createdAt":1665677247548,
"velocity":null,
"lastAnnotator":{},
"seenAt":"2022-10-27T04:00:48.724Z"
}
```

_exemple d'un fichier d'annotation_

```json
{
  "item": {
    "uuid": "ec0a4bb6-f5f6-11eb-a271-acde48001122",
    "datatype": "image",
    "data": {
      "url": "s3://data-for-demo-ljn/invoice-parsing/data/constat_circumstance/CDN_MAYENNE1_PAPER_20200417145911_00001_001_002_CONSTAT_Page_1_0.jpg"
    }
  },
  "itemMetadata": {
    "createdAt": 1665677247548,
    "updated": "2022-10-27T04:00:17.438Z",
    "seenAt": "2022-10-27T04:00:17.437Z"
  },
  "tags": [],
  "comments": [],
  "metadata": {},
  "annotationMetadata": {
    "annotatedBy": "admin@test.com",
    "annotatedAt": "2022-10-14T01:46:43.973Z",
    "createdAt": "2022-10-14T01:46:43.964Z"
  },
  "annotation": {
    "text": {
      "text": {
        "entities": [
          {
            "value": "text",
            "text": "17"
          }
        ]
      }
    }
  },
  "historicAnnotations": []
}
```

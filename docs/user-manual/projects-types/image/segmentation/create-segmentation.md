# Création d'un projet type : Segmentation

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
  "text": [
    {
      "name": "Text Recognition task",
      "min": null,
      "max": null,
      "values": [
        {
          "parents": [],
          "exposed": true,
          "type": "text",
          "annotationPourcent": 50,
          "annotationCount": 1,
          "_id": "6151f60ce23ddf001d69eec0",
          "project": "6151f60ce23ddf001d69eebf",
          "value": "textInput1",
          "label": "textInput1",
          "category": "Text Recognition task",
          "updatedAt": "2021-09-27T16:49:16.818Z",
          "createdAt": "2021-09-27T16:49:16.818Z",
          "__v": 0,
          "color": null,
          "description": null,
          "hotkey": null,
          "max": null,
          "min": null
        },
        {
          "parents": [],
          "exposed": true,
          "type": "text",
          "annotationPourcent": 50,
          "annotationCount": 1,
          "_id": "6151f60ce23ddf001d69eec1",
          "project": "6151f60ce23ddf001d69eebf",
          "value": "textInput2",
          "label": "textInput2",
          "category": "Text Recognition task",
          "updatedAt": "2021-09-27T16:49:16.819Z",
          "createdAt": "2021-09-27T16:49:16.819Z",
          "__v": 0,
          "color": null,
          "description": null,
          "hotkey": null,
          "max": null,
          "min": null
        }
      ]
    }
  ],
  "zone": [
    {
      "name": "bboxes",
      "min": null,
      "max": null,
      "values": [
        {
          "parents": [],
          "exposed": true,
          "type": "zone",
          "annotationPourcent": 50,
          "annotationCount": 1,
          "_id": "6151f60ce23ddf001d69eec2",
          "project": "6151f60ce23ddf001d69eebf",
          "color": "123",
          "value": "bbox_name",
          "hotkey": "n",
          "label": "Name",
          "category": "bboxes",
          "updatedAt": "2021-09-27T16:49:16.819Z",
          "createdAt": "2021-09-27T16:49:16.819Z",
          "__v": 0,
          "description": null,
          "max": null,
          "min": null
        },
        {
          "parents": [],
          "exposed": true,
          "type": "zone",
          "annotationPourcent": 50,
          "annotationCount": 1,
          "_id": "6151f60ce23ddf001d69eec3",
          "project": "6151f60ce23ddf001d69eebf",
          "value": "bbox_skill",
          "hotkey": "c",
          "label": "Skill",
          "category": "bboxes",
          "updatedAt": "2021-09-27T16:49:16.819Z",
          "createdAt": "2021-09-27T16:49:16.819Z",
          "__v": 0,
          "color": null,
          "description": null,
          "max": null,
          "min": null
        },
        {
          "parents": [],
          "exposed": true,
          "type": "zone",
          "annotationPourcent": 50,
          "annotationCount": 1,
          "_id": "6151f60ce23ddf001d69eec4",
          "project": "6151f60ce23ddf001d69eebf",
          "value": "bbox_formation",
          "hotkey": "f",
          "label": "Formation",
          "category": "bboxes",
          "updatedAt": "2021-09-27T16:49:16.820Z",
          "createdAt": "2021-09-27T16:49:16.820Z",
          "__v": 0,
          "color": null,
          "description": null,
          "max": null,
          "min": null
        },
        {
          "parents": [],
          "exposed": true,
          "type": "zone",
          "annotationPourcent": 150,
          "annotationCount": 3,
          "_id": "6151f60ce23ddf001d69eec5",
          "project": "6151f60ce23ddf001d69eebf",
          "value": "bbox_Exp",
          "hotkey": "e",
          "label": "Experience",
          "category": "bboxes",
          "updatedAt": "2021-09-27T16:49:16.820Z",
          "createdAt": "2021-09-27T16:49:16.820Z",
          "__v": 0,
          "color": null,
          "description": null,
          "max": null,
          "min": null
        }
      ]
    }
  ],
  "name": "DEMO Zone and Text : CV - Extraction",
  "client": "LJN",
  "type": "image",
  "guidelines": "The Guidelines",
  "highlights": [],
  "description": "Demo de projet",
  "admins": ["admin@test.com"],
  "users": ["user@test.com"],
  "dataScientists": ["datascientis@test.com"],
  "defaultTags": ["pose question", "etrange", "rigolo"],
  "showPredictions": false,
  "prefillPredictions": false,
  "filterPredictionsMinimum": 0.4,
  "deadline": "2025-11-30T13:57:20.355Z",
  "entitiesRelationsGroup": []
}
```

_exemple d'un fichier d'items_

```json
{
  "predictions": {
    "raw": {
      "Text Recognition task": {
        "entities": [
          { "value": "textInput1", "text": "This is a prediction" },
          { "value": "textInput2", "text": "This is second prediction" }
        ]
      },
      "bboxes": {
        "entities": [
          {
            "value": "bbox_Exp",
            "coords": [
              { "x": 0.4845528455284553, "y": 0.01264367816091954 },
              { "x": 0.9707317073170731, "y": 0.016091954022988506 },
              { "x": 0.9739837398373984, "y": 0.11609195402298851 },
              { "x": 0.4878048780487805, "y": 0.1103448275862069 }
            ]
          }
        ]
      }
    },
    "keys": [
      { "value": "textInput1", "text": "This is a prediction" },
      { "value": "textInput2", "text": "This is second prediction" },
      {
        "value": "bbox_Exp",
        "zone": [
          { "x": 0.4845528455284553, "y": 0.01264367816091954 },
          { "x": 0.9707317073170731, "y": 0.016091954022988506 },
          { "x": 0.9739837398373984, "y": 0.11609195402298851 },
          { "x": 0.4878048780487805, "y": 0.1103448275862069 }
        ]
      }
    ]
  },
  "uuid": "d7bb0128-c478-4f56-a00a-601ee6bd0849",
  "data": { "url": "https://online.dts.edu/eportfolios/34/entries/51/files/R0JCkx5SXaFzWnEIYhPd5yrDNVGSOqoMVZf4rbSf" },
  "type": "image",
  "metadata": { "_id": 123 },
  "description": "",
  "annotated": true,
  "annotatedBy": ["admin@test.com"],
  "createdAt": 1632761356851,
  "velocity": 64,
  "lastAnnotator": { "email": "admin@test.com" },
  "seenAt": "2022-11-02T12:21:20.358Z",
  "annotatedAt": "2022-10-12T15:53:35.764Z"
}
```

_exemple d'un fichier d'annotation_

```json
{
  "item": {
    "uuid": "d7bb0128-c478-4f56-a00a-601ee6bd0849",
    "datatype": "image",
    "data": {
      "url": "https://online.dts.edu/eportfolios/34/entries/51/files/R0JCkx5SXaFzWnEIYhPd5yrDNVGSOqoMVZf4rbSf"
    },
    "metadata": { "_id": 123 }
  },
  "itemMetadata": {
    "createdAt": 1632761356851,
    "updated": "2022-11-02T12:21:20.359Z",
    "seenAt": "2022-11-02T12:21:20.358Z"
  },
  "tags": [],
  "comments": [],
  "metadata": { "_id": 123 },
  "annotationMetadata": {
    "annotatedBy": "admin@test.com",
    "annotatedAt": "2022-02-23T09:16:53.062Z",
    "createdAt": "2022-02-23T09:16:53.051Z"
  },
  "annotation": {
    "text": {
      "Text Recognition task": {
        "entities": [
          { "value": "textInput1", "text": "This is a prediction" },
          { "value": "textInput2", "text": "This is second prediction" }
        ]
      }
    },
    "zone": {
      "bboxes": {
        "entities": [
          {
            "value": "bbox_Exp",
            "coords": [
              { "x": 0.4845528455284553, "y": 0.01264367816091954 },
              { "x": 0.9707317073170731, "y": 0.016091954022988506 },
              { "x": 0.9739837398373984, "y": 0.11609195402298851 },
              { "x": 0.4878048780487805, "y": 0.1103448275862069 }
            ]
          },
          {
            "value": "bbox_formation",
            "coords": [
              { "x": 0.07586206896551724, "y": 0.776255707762557 },
              { "x": 0.9280788177339901, "y": 0.7800608828006088 },
              { "x": 0.9172413793103448, "y": 0.8774733637747336 },
              { "x": 0.07980295566502463, "y": 0.8706240487062404 }
            ]
          },
          {
            "value": "bbox_Exp",
            "coords": [
              { "x": 0.8088669950738916, "y": 0.6050228310502284 },
              { "x": 0.08374384236453201, "y": 0.6050228310502284 },
              { "x": 0.08374384236453201, "y": 0.4916286149162861 },
              { "x": 0.8088669950738916, "y": 0.4916286149162861 }
            ]
          }
        ]
      }
    }
  },
  "historicAnnotations": []
}
```

# Création d'un projet type : NER

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
  "tasks": [
    {
      "conditions": [],
      "exposed": true,
      "type": "classifications",
      "annotationPourcent": 4,
      "annotationCount": 15,
      "_id": "60cee9b5c6009f001ccb75f8",
      "project": "60cee9b5c6009f001ccb75f7",
      "color": "#ff4d4f",
      "value": "en",
      "hotkey": "e",
      "label": "english",
      "category": "language",
      "updatedAt": "2021-06-20T07:09:41.715Z",
      "createdAt": "2021-06-20T07:09:41.715Z",
      "__v": 0,
      "description": null,
      "max": null,
      "min": null
    },
    {
      "conditions": [],
      "exposed": true,
      "type": "classifications",
      "annotationPourcent": 84,
      "annotationCount": 378,
      "_id": "60cee9b5c6009f001ccb75f9",
      "project": "60cee9b5c6009f001ccb75f7",
      "color": "#597ef7",
      "value": "fr",
      "hotkey": "f",
      "label": "french",
      "category": "language",
      "updatedAt": "2021-06-20T07:09:41.715Z",
      "createdAt": "2021-06-20T07:09:41.715Z",
      "__v": 0,
      "description": null,
      "max": null,
      "min": null
    },
    {
      "conditions": [],
      "exposed": true,
      "type": "classifications",
      "annotationPourcent": 14,
      "annotationCount": 60,
      "_id": "60cee9b5c6009f001ccb75fa",
      "project": "60cee9b5c6009f001ccb75f7",
      "color": "#73d13d",
      "value": "unk",
      "hotkey": "u",
      "label": "unknown",
      "category": "language",
      "updatedAt": "2021-06-20T07:09:41.715Z",
      "createdAt": "2021-06-20T07:09:41.715Z",
      "__v": 0,
      "description": null,
      "max": null,
      "min": null
    },
    {
      "conditions": [],
      "exposed": true,
      "type": "classifications",
      "annotationPourcent": 1,
      "annotationCount": 4,
      "_id": "60cee9b5c6009f001ccb75fb",
      "project": "60cee9b5c6009f001ccb75f7",
      "description": "Document will potentially overfit the NER model",
      "color": "#ff4d4f",
      "value": "true",
      "hotkey": "t",
      "label": "true",
      "category": "overfit",
      "updatedAt": "2021-06-20T07:09:41.715Z",
      "createdAt": "2021-06-20T07:09:41.715Z",
      "__v": 0,
      "max": null,
      "min": null
    },
    {
      "conditions": [],
      "exposed": true,
      "type": "ner",
      "annotationPourcent": 22,
      "annotationCount": 98,
      "_id": "60cee9b5c6009f001ccb75fc",
      "project": "60cee9b5c6009f001ccb75f7",
      "color": "#36cfc9",
      "value": "web",
      "hotkey": "w",
      "label": "web",
      "category": "entity",
      "updatedAt": "2021-06-20T07:09:41.716Z",
      "createdAt": "2021-06-20T07:09:41.716Z",
      "__v": 0,
      "description": null,
      "max": null,
      "min": null
    },
    {
      "conditions": [],
      "exposed": true,
      "type": "ner",
      "annotationPourcent": 70,
      "annotationCount": 318,
      "_id": "60cee9b5c6009f001ccb75fd",
      "project": "60cee9b5c6009f001ccb75f7",
      "color": "#597ef7",
      "value": "address",
      "hotkey": "a",
      "label": "address",
      "category": "entity",
      "updatedAt": "2021-06-20T07:09:41.716Z",
      "createdAt": "2021-06-20T07:09:41.716Z",
      "__v": 0,
      "description": null,
      "max": null,
      "min": null
    },
    {
      "conditions": [],
      "exposed": true,
      "type": "ner",
      "annotationPourcent": 23,
      "annotationCount": 104,
      "_id": "60cee9b5c6009f001ccb75fe",
      "project": "60cee9b5c6009f001ccb75f7",
      "color": "#bae637",
      "value": "number",
      "hotkey": "n",
      "label": "number",
      "category": "entity",
      "updatedAt": "2021-06-20T07:09:41.716Z",
      "createdAt": "2021-06-20T07:09:41.716Z",
      "__v": 0,
      "description": null,
      "max": null,
      "min": null
    },
    {
      "conditions": [],
      "exposed": true,
      "type": "ner",
      "annotationPourcent": 77,
      "annotationCount": 348,
      "_id": "60cee9b5c6009f001ccb75ff",
      "project": "60cee9b5c6009f001ccb75f7",
      "color": "#fa8c16",
      "value": "date",
      "hotkey": "d",
      "label": "date",
      "category": "entity",
      "updatedAt": "2021-06-20T07:09:41.717Z",
      "createdAt": "2021-06-20T07:09:41.717Z",
      "__v": 0,
      "description": null,
      "max": null,
      "min": null
    },
    {
      "conditions": [],
      "exposed": true,
      "type": "ner",
      "annotationPourcent": 25,
      "annotationCount": 113,
      "_id": "60cee9b5c6009f001ccb7600",
      "project": "60cee9b5c6009f001ccb75f7",
      "color": "#9254de",
      "value": "person",
      "hotkey": "p",
      "label": "person",
      "category": "entity",
      "updatedAt": "2021-06-20T07:09:41.717Z",
      "createdAt": "2021-06-20T07:09:41.717Z",
      "__v": 0,
      "description": null,
      "max": null,
      "min": null
    },
    {
      "conditions": [],
      "exposed": true,
      "type": "ner",
      "annotationPourcent": 69,
      "annotationCount": 310,
      "_id": "60cee9b5c6009f001ccb7601",
      "project": "60cee9b5c6009f001ccb75f7",
      "color": "#ff4d4f",
      "value": "org",
      "hotkey": "o",
      "label": "org",
      "category": "entity",
      "updatedAt": "2021-06-20T07:09:41.717Z",
      "createdAt": "2021-06-20T07:09:41.717Z",
      "__v": 0,
      "description": null,
      "max": null,
      "min": null
    },
    {
      "conditions": [],
      "exposed": true,
      "type": "ner",
      "annotationPourcent": 1,
      "annotationCount": 4,
      "_id": "61f110db9f8a97001c5ce61d",
      "project": "60cee9b5c6009f001ccb75f7",
      "color": "#ffec3d",
      "value": "key",
      "label": "key",
      "hotkey": "k",
      "category": "entity",
      "min": null,
      "max": null,
      "updatedAt": "2022-01-26T09:14:03.650Z",
      "createdAt": "2022-01-26T09:14:03.650Z",
      "__v": 0
    }
  ],
  "name": "CV NER",
  "client": "LJN",
  "type": "text",
  "highlights": [],
  "description": "Assign NER tags to the tokens of raw CV strings.",
  "admins": ["admin@test.com"],
  "users": [],
  "dataScientists": ["data@test.com"],
  "defaultTags": ["To delete", "To check", "To discuss"],
  "showPredictions": false,
  "prefillPredictions": false,
  "filterPredictionsMinimum": 0.4,
  "deadline": "2021-08-31T13:53:35.175Z",
  "entitiesRelationsGroup": []
}
```

_exemple d'un fichier d'items_

```json
{
  "predictions": {
    "raw": { "Category": { "labels": [{ "value": "P03", "proba": 0.9940561436 }] } },
    "keys": [{ "value": "P03", "proba": 0.9940561436 }]
  },
  "uuid": "20200626_500k_19050300000023992_174390",
  "data": {
    "text": "Bonjour,Vous trouverez ci-dessous le message vocal le 03.05.2019 a 10:40:59 par un demandeur d'emploi de votre agence."
  },
  "type": "text",
  "metadata": {},
  "description": "",
  "annotated": false,
  "createdAt": 1658755619299,
  "velocity": null,
  "lastAnnotator": {}
}
```

_exemple d'un fichier d'annotation_

```json
{
  "item": {
    "uuid": "3cbc0986-d195-11eb-82b5-acde48001122",
    "datatype": "text",
    "data": {
      "text": "EXPERIENCE PROFESSIONNELLE ET PROJETS  08.2014-12.2014 Stage de fin d’étude au Laboratoire de Biomécanique des Chocs (LBMC IFSTTAR-UCBL) de Lyon  Sujet : Etude de la variabilité de la densité du cartilage costal en fonction de la croissance, a partir de  l'imagerie médicale (CT scan)."
    }
  },
  "itemMetadata": {
    "createdAt": 1624172982039,
    "updated": "2022-01-26T09:15:56.172Z",
    "seenAt": "2022-01-26T09:15:56.171Z"
  },
  "tags": ["exp"],
  "comments": [],
  "metadata": {},
  "annotationMetadata": {
    "annotatedBy": "data@test.com",
    "annotatedAt": "2021-06-21T09:31:00.795Z",
    "createdAt": "2021-06-21T09:31:00.783Z"
  },
  "annotation": {
    "ner": {
      "entity": {
        "entities": [
          {
            "value": "date",
            "start_char": 39,
            "end_char": 54,
            "ent_id": 0
          },
          {
            "value": "org",
            "start_char": 118,
            "end_char": 135,
            "ent_id": 1
          },
          {
            "value": "org",
            "start_char": 79,
            "end_char": 116,
            "ent_id": 2
          },
          {
            "value": "address",
            "start_char": 140,
            "end_char": 144,
            "ent_id": 3
          },
          {
            "value": "key",
            "start_char": 0,
            "end_char": 37,
            "ent_id": 4
          },
          {
            "value": "key",
            "start_char": 55,
            "end_char": 78,
            "ent_id": 5
          },
          {
            "value": "key",
            "start_char": 146,
            "end_char": 153,
            "ent_id": 6
          }
        ]
      },
      "relations": []
    },
    "classifications": {
      "language": { "labels": [{ "value": "fr" }] }
    }
  },
  "historicAnnotations": []
}
```

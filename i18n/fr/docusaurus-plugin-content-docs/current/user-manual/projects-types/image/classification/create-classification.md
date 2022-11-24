# Création d'un projet type : Classification

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
  "tasks": [],
  "name": "DEMO: Classification public image",
  "client": "LJN",
  "type": "image",
  "highlights": [],
  "description": "Project image",
  "admins": ["admin@test.com"],
  "users": ["user@test.com"],
  "dataScientists": ["datascientis@test.com"],
  "defaultTags": [],
  "showPredictions": true,
  "prefillPredictions": true,
  "filterPredictionsMinimum": 0.4,
  "deadline": "2025-08-30T13:57:20.355Z",
  "entitiesRelationsGroup": []
}
```

_exemple d'un fichier d'items_

```json
{
  "predictions": {},
  "uuid": "f770556d-b59f-4319-8ef4-7dad14be40cc",
  "data": { "url": "https://loremflickr.com/1024/800?lock=3" },
  "type": "image",
  "metadata": {},
  "description": "",
  "annotated": false,
  "createdAt": 1658755619096,
  "velocity": null,
  "lastAnnotator": {}
}
```

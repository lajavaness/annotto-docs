# Configurations of images projects

### Classification

_ex config.json_

```json
{
  "tasks": [],
  "name": "DEMO: Classification public image",
  "client": "LJN",
  "type": "image",
  "highlights": [],
  "description": "Project image",
  "admins": ["userProfile-42@lajavaness.com", "admin-42@lajavaness.com"],
  "users": ["user-42@lajavaness.com"],
  "dataScientists": ["datascientist-42@lajavaness.com"],
  "defaultTags": [],
  "showPredictions": true,
  "prefillPredictions": true,
  "filterPredictionsMinimum": 0.4,
  "deadline": "2025-08-30T13:57:20.355Z",
  "entitiesRelationsGroup": []
}
```

_ex items.jsonlines_

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

### Transcription

_ex config.json_

```json
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
  "admins": ["admin@lajavaness.com", "data@test.com", "datascientist@lajavaness.com", "muram@lajavaness.com"],
  "users": [],
  "dataScientists": [],
  "defaultTags": ["To delete", "To check", "To discuss", "quality", "empty"],
  "showPredictions": true,
  "prefillPredictions": true,
  "filterPredictionsMinimum": 0.4,
  "deadline": "2022-12-31T10:41:24.456Z",
  "entitiesRelationsGroup": []
}
```

_ex items.jsonlines_

```json
{
  "predictions": {},
  "uuid": "ec0a4c92-f5f6-11eb-a271-acde48001122",
  "data": {
    "url": "s3://data-for-demo-ljn/invoice-parsing/data/constat_circumstance/CDN_MAYENNE1_PAPER_20210401104747_00001_001_002_CONSTAT_Page_1_0.jpg"
  },
  "type": "image",
  "metadata": {},
  "description": "",
  "annotated": false,
  "createdAt": 1665677247548,
  "velocity": null,
  "lastAnnotator": {},
  "seenAt": "2022-10-27T04:00:48.724Z"
}
```

_ex annotations.jsonlines_

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
    "annotatedBy": "admin@lajavaness.com",
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

### Segmentation

_ex config.json_

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
  "admins": ["userProfile-42@lajavaness.com", "admin-42@lajavaness.com"],
  "users": ["user-42@lajavaness.com", "guillaume@lajavaness.com"],
  "dataScientists": ["datascientist-42@lajavaness.com"],
  "defaultTags": ["pose question", "etrange", "rigolo"],
  "showPredictions": false,
  "prefillPredictions": false,
  "filterPredictionsMinimum": 0.4,
  "deadline": "2025-11-30T13:57:20.355Z",
  "entitiesRelationsGroup": []
}
```

_ex d'items.jsonlines_

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
  "annotatedBy": ["florian@lajavaness.com", "admin@lajavaness.com"],
  "createdAt": 1632761356851,
  "velocity": 64,
  "lastAnnotator": { "email": "admin@lajavaness.com" },
  "seenAt": "2022-11-02T12:21:20.358Z",
  "annotatedAt": "2022-10-12T15:53:35.764Z"
}
```

_ex annotations.jsonlines_

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
    "annotatedBy": "admin@lajavaness.com",
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

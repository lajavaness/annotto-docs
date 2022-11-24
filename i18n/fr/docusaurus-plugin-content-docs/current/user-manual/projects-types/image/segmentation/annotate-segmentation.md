import useBaseUrl from '@docusaurus/useBaseUrl'

# Annotation d'un projet type : Segmentation

Le projet **DEMO Segmentation**, permet d’annoter une image en localisant des zones.

Dans cet exemple, on voudrait localiser sur l’image la partie du CV qui traite de l’expérience professionnel.

- On sélectionne notre outil depuis la section **_Tool_**

- On sélectionne également **_Experience_** depuis **_Sections_**

- On délimite la zone correspondante sur le CV

L’annotation se fait directement lorsqu’on relâche la souris.

:::note
choix de l’outil d’annotation dans l'ordre:

1. pour traite des zones clairement identifiable

2. pour traite des zones un peu moins uniformes

3. permet d'avoir une délimitation des zones personnalisée

:::

<video src={useBaseUrl('/video/screenrecord-1-5.mov')} controls width="100%"></video>

Pour supprimer une annotation, il suffit de cliquer sur la croix qui encadre la sélection.

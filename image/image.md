### ICONS
Description
: Liste des icones utilise dans le site internet `https://lienhartm.github.io/lm/`.

#### Liste :

> Travaux

Generalement represente par des bandes diagonales jaunes et noires, et souvent utilise pour bloquer physiquement l'acces a une route ou a une zone.
Il peut egalement etre utilise pour indiquer qu'un site web ou un projet est en cours de realisation ou en construction.
***L'emoji Travaux a ete approuve dans le cadre d'Unicode 6.0 en 2010 et ajoute a Emoji 1.0 en 2015.***

Emoji
:  `^=^z`

Code HTML (entite numerique) :
: &#128679;

Nom Unicode :
: Construction Sign

Unicode :
: U+1F6A7

Ajout   dans Unicode :
: 6.0 (2010)

Ajoute a Emoji :
: 1.0 (2015)

----------

#### Convertion des images en PNG

Image au format *.avif du site [123rf](https://fr.123rf.com/).
    - academy.avif
    - company.avif
    - competence.avif
    - development.avif
    - electronics.avif
    - interest.avif
    - roadmap.avif
    - work.avif

Programme permettant la convertion en PNG des images au format AVIF ainsi que la suppresion du filigramme et la recoloration de l'icone en gris et leurs supression une fois converties. 

```bash
#!/bin/bash

if [ -z "$1" ]; then
    echo "Usage: $0 image"
    exit 1
fi

INPUT="$1"
NAME="${INPUT%.*}"
OUTPUT="${NAME}.png"

convert "$INPUT" -colorspace Gray -threshold 80% "$OUTPUT" && rm "$INPUT"

echo "Fichier créé : $OUTPUT - Fichier supprimée : $INPUT"
```
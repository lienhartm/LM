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

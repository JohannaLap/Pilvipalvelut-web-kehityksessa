 /* const recipes = [
    {
      id: 1,
      title: "Kana & kasviswokki",
      ingredient: "kana",
      image: "https://source.unsplash.com/featured/?chicken,vegetables,wok",
      instructions: "Aloita leikkaamalla haluamasi kasvikset.Paista kana ja lisää kasvikset. Mausta mielesi mukaan, esimerkiksi sweetchili kastikkeella. Halutessasi voit lisätä wokkiin nuudeleita."
    },
    {
      id: 2,
      title: "Kana ja riisi",
      ingredient: "kana",
      image: "https://source.unsplash.com/featured/?chicken,rice",
      instructions: "Aloita paistamalla kana pannulla öljyssä. Samaan aikaan voit laittaa riisin keittymään. Keitä riisi pakkauksen ohjeen mukaisesti. Kun kanat ovat paistuneet mausta esim currylla. Lisää joukkoon ruokakerma."
    },
    {
      id: 3,
      title: "Makaronilaatikko",
      ingredient: "makaroni",
      image: "https://source.unsplash.com/featured/?macaroni,bake",
      instructions: "Keitä makaroni. Paista jauheliha ja sipuli. Sekoita munamaito. Yhdistä kaikki ja paista uunissa.Halutessa voit laittaa pinnalle ennen uunia juustoraasteen."
    },
    {
      id: 4,
      title: "Tofuwokki",
      ingredient: "tofu",
      image: "https://source.unsplash.com/featured/?tofu,vegetables",
      instructions: "Leikkaa tofu kuutioiksi ja paista rapeaksi. Lisää wok-vihannekset ja paista yhdessä. Mausta seesamiöljyllä ja tarjoile."
    }
  ];
  
  export default recipes; */

  const recipes = [
    {
      id: 1,
      title: "Kana & kasviswokki",
      ingredient: "kana",
      image: "https://source.unsplash.com/featured/?chicken,vegetables,wok",
      ingredients: [
        "400 g broilerisuikaleita",
        "1 paprika",
        "1 porkkana",
        "1 pieni parsakaali",
        "2 rkl sweet chili -kastiketta",
        "Nuudeleita (halutessasi)"
      ],
      instructions: [
        "Leikkaa kasvikset suikaleiksi.",
        "Paista broileri pannulla öljyssä.",
        "Lisää kasvikset ja paista, kunnes pehmenevät.",
        "Sekoita joukkoon sweet chili -kastike.",
        "Lisää halutessasi keitetyt nuudelit ja sekoita kaikki yhteen."
      ]
    },
    {
      id: 2,
      title: "Kana ja riisi",
      ingredient: "kana",
      image: "https://source.unsplash.com/featured/?chicken,rice",
      ingredients: [
        "300 g broilerin fileesuikaleita",
        "2 dl riisiä",
        "1 prk ruokakermaa",
        "1 tl currya",
        "Öljyä paistamiseen"
      ],
      instructions: [
        "Keitä riisi pakkauksen ohjeen mukaan.",
        "Paista broilerisuikaleet pannulla öljyssä.",
        "Mausta currylla ja lisää ruokakerma.",
        "Hauduta miedolla lämmöllä 5–10 min.",
        "Tarjoile riisin kanssa."
      ]
    },
    {
      id: 3,
      title: "Makaronilaatikko",
      ingredient: "makaroni",
      image: "https://source.unsplash.com/featured/?macaroni,bake",
      ingredients: [
        "4 dl makaroneja",
        "400 g jauhelihaa",
        "1 sipuli",
        "2 kananmunaa",
        "5 dl maitoa",
        "Juustoraastetta (halutessasi)"
      ],
      instructions: [
        "Keitä makaronit ja valuta.",
        "Paista jauheliha ja hienonnettu sipuli.",
        "Sekoita munat ja maito keskenään.",
        "Yhdistä makaroni ja jauheliha uunivuokaan.",
        "Kaada munamaito päälle ja ripottele pinnalle juustoa.",
        "Paista 200 °C noin 40 min."
      ]
    },
    {
      id: 4,
      title: "Tofuwokki",
      ingredient: "tofu",
      image: "https://source.unsplash.com/featured/?tofu,vegetables",
      ingredients: [
        "200 g tofu-kuutioita",
        "1 paprika",
        "1 porkkana",
        "100 g vihreitä papuja",
        "1 rkl seesamiöljyä",
        "2 rkl soijakastiketta"
      ],
      instructions: [
        "Leikkaa tofu ja kasvikset sopiviksi paloiksi.",
        "Paista tofu seesamiöljyssä kullanruskeaksi.",
        "Lisää kasvikset ja paista 5–10 min.",
        "Sekoita joukkoon soijakastike.",
        "Tarjoile esimerkiksi riisin kanssa."
      ]
    }
  ];
  
  export default recipes;
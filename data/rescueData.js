const dogs = [
    {
        id: 2167,
        name: Henry,
        gender: "male",
        breed: "Mixed (medium)",
        age: "5 years old",
        location: "Dayi",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2018/12/23/09/20181223090310.png?itok=DeqJJBOI",
        description: "Gets along well with other dogs. Henry is playful and happy."
    },
    {
        id: 7292,
        name: Jack,
        gender: "male",
        breed: "Mixed (large)",
        age: "5 years old",
        location: "Dayi",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2018/12/23/09/20181223092830.png?itok=01l9vS1h",
        description: "Must be homed in a single-dog environment."
    },
    {
        id: 7343,
        name: Delia,
        gender: "female",
        breed: "Mixed (medium)",
        age: "5 years old",
        location: "Dayi",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2018/12/23/10/20181223104456.png?itok=223Ndga_",
        description: "Cautious with people. She is shy and submissive, but gets along well with other dogs."
    },
    {
        id: 7332,
        name: Rex,
        gender: "male",
        breed: "Mixed (large)",
        age: "5 years old",
        location: "Toronto",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2018/12/25/10/20181225104108.png?itok=cE00KnXm",
        description: "Gets along well with other dogs. Rex is playful and happy."
    },
    {
        id: 2163,
        name: Cleo,
        gender: "female",
        breed: "Mixed (medium)",
        age: "6 years old",
        location: "Dayi",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2020/08/29/08/20200829084959.png?itok=Ywxphaz5",
        description: "Aggressive around men and generally cautious around people. Gets along well with other dogs, however, is shy and submissive."
    },
    {
        id: 5312,
        name: Deborah,
        gender: "female",
        breed: "Mixed (large)",
        age: "5 years old",
        location: "Toronto",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2018/12/25/10/20181225105541.png?itok=YjqaLZg6",
        description: "Deborah is playful and happy."
    },
    {
        id: 3829,
        name: Cara,
        gender: "female",
        breed: "Mixed (medium)",
        age: "6 years old",
        location: "Toronto",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2018/12/25/11/20181225110811.png?itok=ZHuZk19s",
        description: "Gets along well with other dogs. Cara is playful and happy."
    },
    {
        id: 5494,
        name: Speckles,
        gender: "male",
        breed: "Mixed (medium)",
        age: "6 years old",
        location: "Toronto",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2018/12/25/11/20181225111138.png?itok=Ou9tj4jE",
        description: "Gets along well with other dogs. Speckles if happy and playful."
    },
    {
        id: 5992,
        name: Ganache,
        gender: "male",
        breed: "Mixed (large)",
        age: "5 years old",
        location: "Toronto",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2021/06/10/16/20210610164143.png?itok=JzKWFAVS",
        description: "Gets along well with other dogs. Ganache is happy and playful."
    },
    {
        id: 8297,
        name: Leslie,
        gender: "female",
        breed: "Mixed (large)",
        age: "8 years old",
        location: "Toronto",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2021/09/27/01/20210927012357.png?itok=c0LKNXyl",
        description: "Gets along well with other dogs. Leslie is happy and playful."
    },
    {
        id: 3821,
        name: Wish,
        gender: "female",
        breed: "Mixed (small)",
        age: "6 years old",
        location: "Dayi",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2018/12/25/11/20181225113258.png?itok=OPQr_bLP",
        description: "Aggressive around men, but generally cautious around people. Gets along well with other dogs."
    },
    {
        id: 0525,
        name: Bolt,
        gender: "female",
        breed: "Mixed (medium)",
        age: "6 years old",
        location: "Dayi",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2018/12/25/11/20181225113258.png?itok=OPQr_bLP",
        description: "Gets along with other dogs. Bolt is playful and happy."
    },
    {
        id: 3766,
        name: Sandwich,
        gender: "female",
        breed: "Mixed (small)",
        age: "6 years old",
        location: "Toronto",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2018/12/25/12/20181225121556.png?itok=qbQYytg_",
        description: "Gets along with other dogs. Sandwich is playful and happy."
    },
    {
        id: 4625,
        name: Spark,
        gender: "female",
        breed: "Mixed (medium)",
        age: "6 years old",
        location: "Dayi",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2018/12/25/12/20181225122645.png?itok=HHi3nDx7",
        description: "Aggressive around men, but generally cautious around people. Spark is shy and submissive."
    },
    {
        id: 3794,
        name: Tom,
        gender: "male",
        breed: "Mixed (large)",
        age: "6 years old",
        location: "Dayi",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2018/12/25/12/20181225122906.png?itok=r3XAm-HR",
        description: "Aggressive around men, but generally cautious around people. Tom is shy and submissive."
    },
    {
        id: 6514,
        name: Alpha,
        gender: "female",
        breed: "Mixed (medium)",
        age: "5 years old",
        location: "Dayi",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2018/12/25/12/20181225123124.png?itok=tDfFkmlx",
        description: "Aggressive around men, but generally cautious around people. Alpha is shy and submissive."
    },
    {
        id: 7769,
        name: Dodo,
        gender: "female",
        breed: "Mixed (small)",
        age: "6 years old",
        location: "Dayi",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2018/12/25/12/20181225123440.png?itok=0SJKyGp_",
        description: "Gets along well with other dogs. Dodo is shy and submissive, but also happy and playful."
    },
    {
        id: 6018,
        name: Furry,
        gender: "female",
        breed: "Mixed (medium)",
        age: "6 years old",
        location: "Dayi",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2020/09/02/09/20200902095940.png?itok=7HTyFJ7Z",
        description: "Gets along well with other dogs. Furry is happy and playful."
    },
    {
        id: 4811,
        name: Wood,
        gender: "female",
        breed: "Mixed (large)",
        age: "6 years old",
        location: "Dayi",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2020/09/02/18/20200902184858.png?itok=VzSPPLP0",
        description: "Gets along well with other dogs. Wood is shy and submissive, but also happy and playful."
    },
    {
        id: 7718,
        name: Chip,
        gender: "male",
        breed: "Mixed (medium)",
        age: "6 years old",
        location: "Gongyi",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2018/12/25/12/20181225125351.png?itok=JiUwr_yJ",
        description: "Gets along well with other dogs. Chip is happy and playful."
    },
    {
        id: 3798,
        name: Pigeon,
        gender: "male",
        breed: "Mixed (medium)",
        age: "6 years old",
        location: "Dayi",
        img: "https://www.shelterluv.com/sites/default/files/styles/large_square/public/animal_pics/18636/2020/09/02/11/20200902110639_0.png?itok=lV8PyEya",
        description: "Gets along well with other dogs. Pigeon is happy and playful."
    }
];

module.exports = dogs;
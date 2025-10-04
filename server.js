const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const characters = [
  {
    "id": 1,
    "name": "Trailblazer",
    "rarity": 5,
    "path": "Destruction",
    "element": "Physical",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "A boy/girl who boarded the Astral Express. They chose to travel with the Astral Express to eliminate the dangers posed by the Stellaron.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/6/6f/Character_Trailblazer_%28F%29_Destruction_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20230501005741"
  },
  {
    "id": 2,
    "name": "March_7th",
    "rarity": 4,
    "path": "Preservation",
    "element": "Ice",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "A girl who once slumbered in eternal ice and knows nothing about her past. To find out the truth about her origins, she decided to travel with the Astral Express.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/c/c7/Character_March_7th_%28Preservation%29_Splash_Art.png/revision/latest/scale-to-width/360?cb=20230525090156"
  },
  {
    "id": 3,
    "name": "Dan_Heng",
    "rarity": 4,
    "path": "Hunt",
    "element": "Wind",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "A cold and reserved young man who is reticent about his past. To avoid his kin, he decided to travel with the Astral Express.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/e/e5/Character_Dan_Heng_Splash_Art.png"
  },
  {
    "id": 4,
    "name": "Himeko",
    "rarity": 5,
    "path": "Erudition",
    "element": "Fire",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "The one who repaired the Astral Express. To witness the vast starry sky, she decided to travel with the Astral Express. Her hobby is brewing hand-made coffee.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/8/8e/Character_Himeko_Splash_Art.png"
  },
  {
    "id": 5,
    "name": "Welt",
    "rarity": 5,
    "path": "Nihility",
    "element": "Imaginary",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "A seasoned member of the Express crew. The passion buried in his heart burns anew as he enjoys this fresh adventure.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/1/11/Character_Welt_Splash_Art.png"
  },
  {
    "id": 6,
    "name": "Sampo",
    "rarity": 4,
    "path": "Nihility",
    "element": "Wind",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "A merchant who freely travels between the Overworld and the Underworld. He acts like he is everyone's friend.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/6/65/Character_Sampo_Splash_Art.png"
  },
  {
    "id": 7,
    "name": "Bronya",
    "rarity": 5,
    "path": "Harmony",
    "element": "Wind",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "Heir apparent to the Supreme Guardian of Belobog. She possesses pride befitting of a princess.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/7/7c/Character_Bronya_Splash_Art.png"
  },
  {
    "id": 8,
    "name": "Seele",
    "rarity": 5,
    "path": "Hunt",
    "element": "Quantum",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "A resident of the Underworld and the backbone of Wildfire. She goes by the alias Babochka.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/5/58/Character_Seele_Splash_Art.png"
  },
  {
    "id": 9,
    "name": "Asta",
    "rarity": 4,
    "path": "Harmony",
    "element": "Fire",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "The lead researcher of Herta Space Station and a lady from a renowned family.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/b/bd/Character_Asta_Splash_Art.png"
  },
  {
    "id": 10,
    "name": "Clara",
    "rarity": 5,
    "path": "Destruction",
    "element": "Physical",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "A vagrant girl who lives with robots. She is introverted, gentle, and has a pure heart.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/c/c2/Character_Clara_Splash_Art.png"
  },
  {
    "id": 11,
    "name": "Gepard",
    "rarity": 5,
    "path": "Preservation",
    "element": "Ice",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "A captain in the Silvermane Guards and an outstanding warrior of Belobog.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/9/96/Character_Gepard_Splash_Art.png"
  },
  {
    "id": 12,
    "name": "Hook",
    "rarity": 4,
    "path": "Destruction",
    "element": "Fire",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "Boss of an Underworld adventure squad, The Moles. She loves freedom and sees life as adventures.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/e/ec/Character_Hook_Splash_Art.png"
  },
  {
    "id": 13,
    "name": "Natasha",
    "rarity": 4,
    "path": "Abundance",
    "element": "Physical",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "A doctor from the Underworld and a caregiver of children.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/7/7e/Character_Natasha_Splash_Art.png"
  },
  {
    "id": 14,
    "name": "Pela",
    "rarity": 4,
    "path": "Nihility",
    "element": "Ice",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "A secretarial officer for the Silvermane Guards. She has a serious personality.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/c/c9/Character_Pela_Splash_Art.png"
  },
  {
    "id": 15,
    "name": "Serval",
    "rarity": 4,
    "path": "Erudition",
    "element": "Lightning",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "A Belobog mechanic who used to be a researcher. She loves rock and roll music.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/8/8a/Character_Serval_Splash_Art.png"
  },
  {
    "id": 16,
    "name": "Trailblazer",
    "rarity": 5,
    "path": "Preservation",
    "element": "Fire",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "A boy/girl who boarded the Astral Express. Fire variant of the Trailblazer.",
    "img": "https://gametora.com/images/hsr/character/full/trailblazer-preservation.png"
  },
  {
    "id": 17,
    "name": "Arlan",
    "rarity": 4,
    "path": "Destruction",
    "element": "Lightning",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "The head of Herta Space Station's Security Department. This quiet boy hopes to protect researchers.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/5/5b/Character_Arlan_Splash_Art.png"
  },
  {
    "id": 18,
    "name": "Blade",
    "rarity": 5,
    "path": "Destruction",
    "element": "Wind",
    "release": "2023-07-19T00:00:00.000Z",
    "introduction": "A member of the Stellaron Hunters, and a swordsman who abandoned his body to become a blade.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/1/16/Character_Blade_Splash_Art.png"
  },
  {
    "id": 19,
    "name": "Herta",
    "rarity": 4,
    "path": "Erudition",
    "element": "Ice",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "Member 83 of the Genius Society. The real master of the space station.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/8/8c/Character_Herta_Splash_Art.png"
  },
  {
    "id": 20,
    "name": "Jing_Yuan",
    "rarity": 5,
    "path": "Erudition",
    "element": "Lightning",
    "release": "2023-05-17T00:00:00.000Z",
    "introduction": "The Divine Foresight, one of the Seven Arbiter-Generals of the Xianzhou Alliance.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/4/48/Character_Jing_Yuan_Splash_Art.png"
  },
  {
    "id": 21,
    "name": "Kafka",
    "rarity": 5,
    "path": "Nihility",
    "element": "Lightning",
    "release": "2023-08-09T00:00:00.000Z",
    "introduction": "A member of the Stellaron Hunters. A dashing, collected, and professional beauty.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/9/95/Character_Kafka_Splash_Art.png"
  },
  {
    "id": 22,
    "name": "Luocha",
    "rarity": 5,
    "path": "Abundance",
    "element": "Imaginary",
    "release": "2023-06-28T00:00:00.000Z",
    "introduction": "A blond-haired handsome young man who carries a coffin on his back.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/a/a5/Character_Luocha_Splash_Art.png"
  },
  {
    "id": 23,
    "name": "Silver_Wolf",
    "rarity": 5,
    "path": "Nihility",
    "element": "Quantum",
    "release": "2023-06-07T00:00:00.000Z",
    "introduction": "A member of the Stellaron Hunters and a genius hacker.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/6/60/Character_Silver_Wolf_Splash_Art.png"
  },
  {
    "id": 24,
    "name": "Bailu",
    "rarity": 5,
    "path": "Abundance",
    "element": "Lightning",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "The High Elder of the Vidyadhara, who is also known as the Healer Lady on the Luofu.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/e/e9/Character_Bailu_Splash_Art.png"
  },
  {
    "id": 25,
    "name": "Qingque",
    "rarity": 4,
    "path": "Erudition",
    "element": "Quantum",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "Diviner of the Divination Commission on the Xianzhou Luofu, and a librarian.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d1/Character_Qingque_Splash_Art.png"
  },
  {
    "id": 26,
    "name": "Tingyun",
    "rarity": 4,
    "path": "Harmony",
    "element": "Lightning",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "Amicassador of the Sky-Faring Commission of the Xianzhou Luofu.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/5/5b/Character_Tingyun_Splash_Art.png"
  },
  {
    "id": 27,
    "name": "Yanqing",
    "rarity": 5,
    "path": "Hunt",
    "element": "Ice",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "General Jing Yuan's retainer. A gifted swordsman who hasn't even come of age.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/6/6d/Character_Yanqing_Splash_Art.png"
  },
  {
    "id": 28,
    "name": "Sushang",
    "rarity": 4,
    "path": "Hunt",
    "element": "Physical",
    "release": "2023-04-26T00:00:00.000Z",
    "introduction": "Born on the Xianzhou Yaoqing, sent to the Cloud Knights of the Luofu for military training.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/7/72/Character_Sushang_Splash_Art.png"
  },
  {
    "id": 29,
    "name": "Yukong",
    "rarity": 4,
    "path": "Harmony",
    "element": "Imaginary",
    "release": "2023-06-28T00:00:00.000Z",
    "introduction": "Head of the Sky-Faring Commission on the Xianzhou Luofu. Yukong was a seasoned pilot.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/0/04/Character_Yukong_Splash_Art.png"
  },
  {
    "id": 30,
    "name": "Luka",
    "rarity": 4,
    "path": "Nihility",
    "element": "Physical",
    "release": "2023-08-09T00:00:00.000Z",
    "introduction": "An optimistic and carefree fighter with a mechanical arm. Skilled in mixed martial arts.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/5/51/Character_Luka_Splash_Art.png"
  },
  {
    "id": 31,
    "name": "Imbibitor_Lunae",
    "rarity": 5,
    "path": "Destruction",
    "element": "Imaginary",
    "release": "2023-08-30T00:00:00.000Z",
    "introduction": "Dan Heng's true form from his Vidyadhara lineage carries residual power.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/2/2c/Character_Dan_Heng_•_Imbibitor_Lunae_Splash_Art.png/revision/latest?cb=20230818234313"
  },
  {
    "id": 32,
    "name": "Fu_Xuan",
    "rarity": 5,
    "path": "Preservation",
    "element": "Quantum",
    "release": "2023-09-20T00:00:00.000Z",
    "introduction": "Master Diviner of the Xianzhou Luofu. One of the Seven Arbiter-Generals.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/3/3e/Character_Fu_Xuan_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20230928224921"
  },
  {
    "id": 33,
    "name": "Lynx",
    "rarity": 4,
    "path": "Abundance",
    "element": "Quantum",
    "release": "2023-09-20T00:00:00.000Z",
    "introduction": "Youngest daughter of the Landau family and Gepard and Serval's sister.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/3/3c/Character_Lynx_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20230719101506"
  },
  {
    "id": 34,
    "name": "Topaz",
    "rarity": 5,
    "path": "Hunt",
    "element": "Fire",
    "release": "2023-10-11T00:00:00.000Z",
    "introduction": "Senior Manager of the Strategic Investment Department in the IPC.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/9/9d/Character_Topaz_and_Numby_Splash_Art.png/revision/latest?cb=20231030040101"
  },
  {
    "id": 35,
    "name": "Guinaifen",
    "rarity": 4,
    "path": "Nihility",
    "element": "Fire",
    "release": "2023-10-11T00:00:00.000Z",
    "introduction": "An outworlder who ended up on the Xianzhou Luofu by accident.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/3/33/Character_Guinaifen_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20231030040741"
  },
  {
    "id": 36,
    "name": "Jingliu",
    "rarity": 5,
    "path": "Destruction",
    "element": "Ice",
    "release": "2023-11-15T00:00:00.000Z",
    "introduction": "The former Sword Champion of the Luofu, and Jing Yuan's master.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/9/97/Character_Jingliu_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20240525000314"
  },
  {
    "id": 37,
    "name": "Argenti",
    "rarity": 5,
    "path": "Erudition",
    "element": "Physical",
    "release": "2023-12-06T00:00:00.000Z",
    "introduction": "A Knight of Beauty who roams the cosmos.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/9/90/Character_Argenti_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20231206232011"
  },
  {
    "id": 38,
    "name": "Hanya",
    "rarity": 4,
    "path": "Harmony",
    "element": "Physical",
    "release": "2023-12-06T00:00:00.000Z",
    "introduction": "Judge of the Ten-Lords Commission. Xueyi's sister.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/e/e8/Character_Hanya_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20231206232120"
  },
  {
    "id": 39,
    "name": "Huohuo",
    "rarity": 5,
    "path": "Abundance",
    "element": "Wind",
    "release": "2023-11-15T00:00:00.000Z",
    "introduction": "A trainee Ten-Lords Commission Judge with a fear of ghosts.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/8/82/Character_Huohuo_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20250604025217"
  },
  {
    "id": 40,
    "name": "Ruan_Mei",
    "rarity": 5,
    "path": "Harmony",
    "element": "Ice",
    "release": "2023-12-27T00:00:00.000Z",
    "introduction": "Member 81 of the Genius Society. A scholar of life sciences.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d5/Character_Ruan_Mei_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20231227021137"
  },
  {
    "id": 41,
    "name": "Xueyi",
    "rarity": 4,
    "path": "Destruction",
    "element": "Quantum",
    "release": "2023-12-27T00:00:00.000Z",
    "introduction": "A zealous judge of the Ten-Lords Commission.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/b/bc/Character_Xueyi_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20231227045314"
  },
  {
    "id": 42,
    "name": "Dr_Ratio",
    "rarity": 5,
    "path": "Hunt",
    "element": "Imaginary",
    "release": "2024-01-17T00:00:00.000Z",
    "introduction": "Member of the Intelligentsia Guild. An eccentric scholar.",
    "img": "https://static.wikia.nocookie.net/theunitedorganizationtoonsheroes/images/c/c0/Character_Dr._Ratio_Splash_Art.webp/revision/latest?cb=20240910063754"
  },
  {
    "id": 43,
    "name": "Black_Swan",
    "rarity": 5,
    "path": "Nihility",
    "element": "Wind",
    "release": "2024-02-07T00:00:00.000Z",
    "introduction": "A Memokeeper of the Garden of Recollection.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/f/fd/Character_Black_Swan_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20240220023547"
  },
  {
    "id": 44,
    "name": "Sparkle",
    "rarity": 5,
    "path": "Harmony",
    "element": "Quantum",
    "release": "2024-02-29T00:00:00.000Z",
    "introduction": "A member of the Masked Fools. A dangerous maestro of theatrics.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/9/99/Character_Sparkle_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20240327022635"
  },
  {
    "id": 45,
    "name": "Misha",
    "rarity": 4,
    "path": "Destruction",
    "element": "Ice",
    "release": "2024-02-07T00:00:00.000Z",
    "introduction": "A hotel bellboy who is passionate about the Nameless.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/5/5c/Character_Misha_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20240206022717"
  },
  {
    "id": 46,
    "name": "Acheron",
    "rarity": 5,
    "path": "Nihility",
    "element": "Lightning",
    "release": "2024-03-27T00:00:00.000Z",
    "introduction": "A drifter claiming to be a Galaxy Ranger.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/5/5c/Character_Misha_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20240206022717"
  },
  {
    "id": 47,
    "name": "Aventurine",
    "rarity": 5,
    "path": "Preservation",
    "element": "Imaginary",
    "release": "2024-03-27T00:00:00.000Z",
    "introduction": "A senior manager in the IPC Strategic Investment Department.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/a/a9/Character_Aventurine_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20240327104723"
  },
  {
    "id": 48,
    "name": "Gallagher",
    "rarity": 4,
    "path": "Abundance",
    "element": "Fire",
    "release": "2024-03-27T00:00:00.000Z",
    "introduction": "A security officer of the Bloodhound Family at Penacony.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/2/2d/Character_Gallagher_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20240327022011"
  },
  {
    "id": 49,
    "name": "Robin",
    "rarity": 5,
    "path": "Harmony",
    "element": "Physical",
    "release": "2024-05-08T00:00:00.000Z",
    "introduction": "A Halovian singer born in Penacony. Sunday's sister.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/9/92/Character_Robin_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20240508021256"
  },
  {
    "id": 50,
    "name": "Boothill",
    "rarity": 5,
    "path": "Hunt",
    "element": "Physical",
    "release": "2024-05-08T00:00:00.000Z",
    "introduction": "A cyborg cowboy drifting among the stars. A Galaxy Ranger.",
    "img": "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/05/16/610e41525b45eddb8937419fe6fd4eab_9161087205181370400.png?x-oss-process=image%2Fformat%2Cwebp"
  },
  {
    "id": 51,
    "name": "Firefly",
    "rarity": 5,
    "path": "Destruction",
    "element": "Fire",
    "release": "2024-06-19T00:00:00.000Z",
    "introduction": "A member of the Stellaron Hunters. A girl clad in a mechanical armor.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/3/38/Character_Firefly_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20241007220547"
  },
  {
    "id": 52,
    "name": "Jade",
    "rarity": 5,
    "path": "Erudition",
    "element": "Quantum",
    "release": "2024-06-19T00:00:00.000Z",
    "introduction": "One of the Ten Stonehearts. A senior manager in the IPC.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/6/6d/Character_Jade_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20240706170539"
  },
  {
    "id": 53,
    "name": "Yunli",
    "rarity": 5,
    "path": "Destruction",
    "element": "Physical",
    "release": "2024-07-31T00:00:00.000Z",
    "introduction": "General Huaiyan's granddaughter. A sword hunter from the Xianzhou Zhuming.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/7/72/Character_Yunli_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20241007221656"
  },
  {
    "id": 54,
    "name": "Jiaoqiu",
    "rarity": 5,
    "path": "Nihility",
    "element": "Fire",
    "release": "2024-07-31T00:00:00.000Z",
    "introduction": "A Foxian healer from the Xianzhou Yaoqing. Counselor to General Feixiao.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/b/be/Character_Jiaoqiu_Splash_Art.png/revision/latest?cb=20240911023034"
  },
  {
    "id": 55,
    "name": "March_7th_Hunt",
    "rarity": 4,
    "path": "Hunt",
    "element": "Imaginary",
    "release": "2024-07-31T00:00:00.000Z",
    "introduction": "March 7th after learning the ways of the Hunt from Yanqing.",
    "img": "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/07/23/87757046fcd7644b685c0d51e011f242_3662823375710304452.png?x-oss-process=image%2Fformat%2Cwebp"
  },
  {
    "id": 56,
    "name": "Feixiao",
    "rarity": 5,
    "path": "Hunt",
    "element": "Wind",
    "release": "2024-09-10T00:00:00.000Z",
    "introduction": "General of the Xianzhou Yaoqing. One of the Seven Arbiter-Generals.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/6/61/Character_Feixiao_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20241007220552"
  },
  {
    "id": 57,
    "name": "Moze",
    "rarity": 4,
    "path": "Hunt",
    "element": "Lightning",
    "release": "2024-09-10T00:00:00.000Z",
    "introduction": "A Shadow Guard of the Xianzhou Yaoqing. Works under General Feixiao.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/8/81/Character_Moze_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20240910181952"
  },
  {
    "id": 58,
    "name": "Lingsha",
    "rarity": 5,
    "path": "Abundance",
    "element": "Fire",
    "release": "2024-09-25T00:00:00.000Z",
    "introduction": "Cauldron Master of the Xianzhou Luofu's Alchemy Commission.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/c/c1/Character_Lingsha_Splash_Art.png/revision/latest?cb=20241120224130"
  },
  {
    "id": 59,
    "name": "Rappa",
    "rarity": 5,
    "path": "Erudition",
    "element": "Imaginary",
    "release": "2024-10-23T00:00:00.000Z",
    "introduction": "A ninja and Galaxy Ranger who raps.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/1/1c/Character_Rappa_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20241120154734"
  },
  {
    "id": 60,
    "name": "Sunday",
    "rarity": 5,
    "path": "Harmony",
    "element": "Imaginary",
    "release": "2024-12-04T00:00:00.000Z",
    "introduction": "Former head of the Oak Family in Penacony. Robin's brother.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/2/21/Character_Sunday_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20241224161538"
  },
  {
    "id": 61,
    "name": "Fugue",
    "rarity": 5,
    "path": "Nihility",
    "element": "Fire",
    "release": "2024-12-04T00:00:00.000Z",
    "introduction": "A mysterious woman with ties to the Xianzhou.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/4/4c/Character_Fugue_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20241122125941"
  },
  {
    "id": 62,
    "name": "Mydei",
    "rarity": 5,
    "path": "Destruction",
    "element": "Imaginary",
    "release": "2025-01-15T00:00:00.000Z",
    "introduction": "A warrior from the Chrysos Heirs faction.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/6/67/Character_Mydei_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20250725220512"
  },
  {
    "id": 63,
    "name": "Trailblazer_Remembrance",
    "rarity": 5,
    "path": "Remembrance",
    "element": "Ice",
    "release": "2025-01-15T00:00:00.000Z",
    "introduction": "The Trailblazer wielding the power of Remembrance.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/1/15/Character_Trailblazer_%28F%29_Remembrance_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20250117063309"
  },
  {
    "id": 64,
    "name": "Castorice",
    "rarity": 5,
    "path": "Erudition",
    "element": "Lightning",
    "release": "2025-02-26T00:00:00.000Z",
    "introduction": "A member of the Chrysos Heirs.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/9/94/Character_Castorice_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20250409035111"
  },
  {
    "id": 65,
    "name": "Tribbie",
    "rarity": 5,
    "path": "Harmony",
    "element": "Quantum",
    "release": "2025-03-12T00:00:00.000Z",
    "introduction": "A member of the Chrysos Heirs faction.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/e/eb/Character_Tribbie_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20250309185506"
  },
  {
    "id": 66,
    "name": "Aglaea",
    "rarity": 5,
    "path": "Remembrance",
    "element": "Lightning",
    "release": "2025-01-15T00:00:00.000Z",
    "introduction": "A Goldweaver and one of the Chrysos Heirs.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/8/81/Character_Aglaea_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20250117063425"
  },
  {
    "id": 67,
    "name": "The_Herta",
    "rarity": 5,
    "path": "Erudition",
    "element": "Ice",
    "release": "2025-01-15T00:00:00.000Z",
    "introduction": "The true form of Herta, genius member of the Genius Society.",
    "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/4/42/Character_The_Herta_Splash_Art.png/revision/latest/scale-to-width-down/1200?cb=20250121214107"
  }
];

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Honkai Star Rail API (Server-Side Filtering)",
        version: "1.0.0",
        endpoints: {
            getAllCharacters: "/api/v1/character/search", 
            searchByName: "/api/v1/character/search?name=<character_name>",
            filterByFirstLetter: "/api/v1/character/search?f=<letter>", 
            filterByElement: "/api/v1/character/element?e=<element>",
            getById: "/api/v1/character/id?id=<character_id>"
        }
    });
});

app.get('/api/v1/character/search', (req, res) => {
    const searchName = req.query.name;
    const firstLetter = req.query.f; 

    let results = characters;

    if (searchName) {
        results = results.filter(char => 
            char.name.toLowerCase().includes(searchName.toLowerCase())
        );
    } else if (firstLetter) {
        if (firstLetter.length !== 1) {
             return res.status(400).json({ error: "Parameter 'f' must be a single letter." });
        }
        results = results.filter(char => 
            char.name.toLowerCase().startsWith(firstLetter.toLowerCase())
        );
    } else {
        return res.json(results);
    }

    if (results.length === 0) {
         return res.status(404).json({ error: "No characters found matching the criteria." });
    }
    
    res.json(results);
});

app.get('/api/v1/character/element', (req, res) => {
  const element = req.query.e;
  
  if (!element) {
    return res.status(400).json({ error: "Element parameter is required" });
  }
  
  const results = characters.filter(char => 
    char.element.toLowerCase() === element.toLowerCase()
  );
  
  res.json(results);
});

app.get('/api/v1/character/id', (req, res) => {
  const id = parseInt(req.query.id);
  
  if (!id) {
    return res.status(400).json({ error: "ID parameter is required" });
  }
  
  const character = characters.find(char => char.id === id);
  
  if (!character) {
    return res.status(404).json({ error: "Character not found" });
  }
  
  res.json(character);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

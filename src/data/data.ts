import realtech from "../assets/Realtech_Logo.png"
import Aama from "../assets/38th_Image.png"
import ssts from "../assets/SSTS_Image.png"
import psycho from "../assets/Pyscho_Image.png"
import nft from "../assets/nftgallery.jpg"
interface LeaderboardItem {
  id: number
  name: string
  image: string
  score: number
  skulls?: number
  price?: number
}
export const galleryData = [
  {
    id: 1,
    title: "Mountain Landscape",
    image: nft,
    likes: 245,
    views: 1230,
    category: "Nature"
  },
  {
    id: 2,
    title: "Ocean Sunset",
    image: nft,
    likes: 189,
    views: 890,
    category: "Nature"
  },
  {
    id: 3,
    title: "City Architecture",
    image: nft,
    likes: 156,
    views: 765,
    category: "Architecture"
  },
  {
    id: 4,
    title: "Forest Path",
    image: nft,
    likes: 203,
    views: 1050,
    category: "Nature"
  },
  {
    id: 5,
    title: "Urban Night",
    image: nft,
    likes: 167,
    views: 820,
    category: "Urban"
  },
  {
    id: 6,
    title: "Desert Dunes",
    image: nft,
    likes: 134,
    views: 690,
    category: "Nature"
  },
  {
    id: 7,
    title: "Coastal Cliffs",
    image: nft,
    likes: 221,
    views: 1180,
    category: "Nature"
  },
  {
    id: 8,
    title: "Modern Building",
    image: nft,
    likes: 178,
    views: 940,
    category: "Architecture"
  }
];


export const leaderboardData: LeaderboardItem[] = [
  { id: 1, name: "REALTECH", image: realtech, score: 17, skulls: 0 },
  { id: 2, name: "RUSCHA AZOV", image: psycho, score: 15, skulls: 0, price: 30 },
  { id: 3, name: "SSTS", image: ssts, score: 8, skulls: 0, price: 25 },
  { id: 4, name: "38TH ARMOR", image: Aama, score: 11, skulls: 0, price: 25 },
]
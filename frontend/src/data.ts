import { Banner } from "./app/shared/models/Banner";
import { Product } from "./app/shared/models/Product";
import { Catagory } from "./app/shared/models/Catagory";
import { User } from "./app/shared/models/User";

const bannerPath = 'assets/img/banner/';
const productPath = 'assets/img/product/'
const catagoryPath ='assets/img/catagory/'

export const USERS: User[] = [
    {
        email: "tuanna21411@st.uel.edu.vn",
        password: "anhtuan716",
        name: "Nguyen Anh Tuan",
        isAdmin: false,
        phone: "0123456789",
        token: ''
    },
    {
        email: "tuanna214112@st.uel.edu.vn",
        password: "anhtuan716",
        name: "Nguyen Anh Tuan",
        isAdmin: true,
        phone: "0123456789",
        token: ''
    }

]

export const BANNERS: Banner[] = [
    {imageUrl: bannerPath + 'banner1.jpeg'},
    {imageUrl: bannerPath + 'banner2.gif'},
    {imageUrl: bannerPath + 'banner3.jpeg'},
    {imageUrl: bannerPath + 'banner4.jpeg'},
    {imageUrl: bannerPath + 'banner5.jpeg'},
    {imageUrl: bannerPath + 'banner6.jpeg'},
]

export const CATAGORYS: Catagory[] = [
    {
        imageUrl: catagoryPath + 'bupbegaubong.png',
        name: "Búp bê - Gấu bông",
    },
    {
        imageUrl: catagoryPath + 'dochoingoaitroi.png',
        name: "Đồ chơi ngoài trời"
    },
    {
        imageUrl: catagoryPath + 'hoatrang.png',
        name: "Hoá trang",
    },
    {
        imageUrl: catagoryPath + 'thethao.png',
        name: "Thể thao"
    },
    {
        imageUrl: catagoryPath + 'thucongmythuat.png',
        name: "Thủ công - Mỹ thuật",
    },
    {
        imageUrl: catagoryPath + 'trochoitritue.png',
        name: "Trò chơi trí tuệ"
    }
]
import { ProductCard } from "../components/ProductCard";
import { useTitle } from "../hooks/useTitle";

export const Home = () => {
    useTitle("Home");

    const products = [
        {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 20999, "image": "/assets/images/1001.png"},
        {"id": 2, "name": "boAt Rockerz 450", "price": 2499, "image": "/assets/images/1002.png"},
        {"id": 3, "name": "JBL Tune 760NC", "price": 6499, "image": "/assets/images/1003.png"},
        {"id": 4, "name": "Logitech H111 Wired", "price": 1599, "image": "/assets/images/1004.png"},
        {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 19999, "image": "/assets/images/1005.png"},
        {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 2999, "image": "/assets/images/1006.png"},
        {"id": 7, "name": "Samsung Galaxy Buds Pro", "price": 14999, "image": "/assets/images/1007.png"},
        {"id": 8, "name": "Sennheiser HD 450BT", "price": 12990, "image": "/assets/images/1008.png"},
        {"id": 9, "name": "Bose QuietComfort 35 II", "price": 29900, "image": "/assets/images/1009.png"},
        {"id": 10, "name": "Skullcandy Crusher ANC", "price": 24999, "image": "/assets/images/1010.png"},
        {"id": 11, "name": "Audio-Technica ATH-M50xBT", "price": 18499, "image": "/assets/images/1011.png"},
        {"id": 12, "name": "Beats Solo Pro", "price": 29900, "image": "/assets/images/1012.png"},
        {"id": 13, "name": "Sennheiser Momentum 3 Wireless", "price": 34990, "image": "/assets/images/1013.png"},
        {"id": 14, "name": "Jabra Elite 85h", "price": 19999, "image": "/assets/images/1014.png"},
        {"id": 15, "name": "Sony WH-1000XM4", "price": 29990, "image": "/assets/images/1015.png"},
        {"id": 16, "name": "AKG K371-BT", "price": 12999, "image": "/assets/images/1016.png"},
        {"id": 17, "name": "Marshall Major III Bluetooth", "price": 9999, "image": "/assets/images/1017.png"},
        {"id": 18, "name": "Plantronics BackBeat FIT 6100", "price": 9990, "image": "/assets/images/1018.png"},
        {"id": 19, "name": "Bang & Olufsen Beoplay H9 3rd Gen", "price": 49999, "image": "/assets/images/1019.png"},
        {"id": 20, "name": "JBL Live 660NC", "price": 15999, "image": "/assets/images/1020.png"},
        {"id": 21, "name": "Bowers & Wilkins PX7", "price": 39999, "image": "/assets/images/1021.png"},
        {"id": 22, "name": "Beyerdynamic Amiron Wireless", "price": 54990, "image": "/assets/images/1022.png"},
        {"id": 23, "name": "V-MODA Crossfade 2 Wireless Codex Edition", "price": 29999, "image": "/assets/images/1023.png"},
        {"id": 24, "name": "SteelSeries Arctis Pro Wireless", "price": 32999, "image": "/assets/images/1024.png"},
        {"id": 25, "name": "Philips PH805", "price": 9999, "image": "/assets/images/1025.png"},
        {"id": 26, "name": "Panasonic RB-M700B", "price": 8999, "image": "/assets/images/1026.png"},
        {"id": 27, "name": "Razer Opus", "price": 17999, "image": "/assets/images/1027.png"},
        {"id": 28, "name": "Master & Dynamic MW65", "price": 54999, "image": "/assets/images/1028.png"},
        {"id": 29, "name": "Shure AONIC 50", "price": 34999, "image": "/assets/images/1029.png"},
        {"id": 30, "name": "Pioneer DJ HDJ-X5BT", "price": 14999, "image": "/assets/images/1030.png"},
        {"id": 31, "name": "Bose SoundLink II", "price": 17999, "image": "/assets/images/1031.png"},
        {"id": 32, "name": "Sony WF-1000XM4", "price": 24990, "image": "/assets/images/1032.png"},
        {"id": 33, "name": "Jabra Elite 75t", "price": 10999, "image": "/assets/images/1033.png"},
        {"id": 34, "name": "Beats Powerbeats Pro", "price": 21990, "image": "/assets/images/1034.png"},
        {"id": 35, "name": "Apple AirPods Pro", "price": 24900, "image": "/assets/images/1035.png"},
        {"id": 36, "name": "Sennheiser CX 400BT True Wireless", "price": 16990, "image": "/assets/images/1036.png"},
        {"id": 37, "name": "Skullcandy Sesh Evo", "price": 5499, "image": "/assets/images/1037.png"},
        {"id": 38, "name": "Samsung Galaxy Buds Live", "price": 14999, "image": "/assets/images/1038.png"},
        {"id": 39, "name": "Anker Soundcore Liberty Air 2 Pro", "price": 12999, "image": "/assets/images/1039.png"},
        {"id": 40, "name": "Bose Sport Earbuds", "price": 13990, "image": "/assets/images/1040.png"},
        {"id": 41, "name": "JBL Free X", "price": 7999, "image": "/assets/images/1041.png"},
        {"id": 42, "name": "Sony WF-XB700", "price": 9990, "image": "/assets/images/1042.png"},
        {"id": 43, "name": "RHA TrueConnect 2", "price": 11999, "image": "/assets/images/1043.png"},
        {"id": 44, "name": "Marshall Mode II", "price": 16999, "image": "/assets/images/1044.png"},
        {"id": 45, "name": "Sennheiser CX 150BT", "price": 4990, "image": "/assets/images/1045.png"},
        {"id": 46, "name": "Philips TAUT102BK", "price": 3999, "image": "/assets/images/1046.png"},
        {"id": 47, "name": "1MORE Stylish True Wireless", "price": 4999, "image": "/assets/images/1047.png"},
        {"id": 48, "name": "SoundPEATS TrueFree 2", "price": 2999, "image": "/assets/images/1048.png"},
        {"id": 49, "name": "Edifier TWS NB2", "price": 6499, "image": "/assets/images/1049.png"},
        {"id": 50, "name": "TaoTronics SoundLiberty 94", "price": 3999, "image": "/assets/images/1050.png"},
        {"id": 51, "name": "Beats Flex", "price": 4990, "image": "/assets/images/1051.png"},
        {"id": 52, "name": "JBL Tune 125TWS", "price": 7999, "image": "/assets/images/1052.png"},
        {"id": 53, "name": "Skullcandy Indy ANC", "price": 9999, "image": "/assets/images/1053.png"},
        {"id": 54, "name": "Creative Outlier Air V2", "price": 6999, "image": "/assets/images/1054.png"},
        {"id": 55, "name": "Soundcore Life Dot 2", "price": 4999, "image": "/assets/images/1055.png"},
        {"id": 56, "name": "Tribit FlyBuds C1", "price": 2999, "image": "/assets/images/1056.png"},
        {"id": 57, "name": "Mpow X3", "price": 6999, "image": "/assets/images/1057.png"},
        {"id": 58, "name": "Tranya T10", "price": 3999, "image": "/assets/images/1058.png"},
        {"id": 59, "name": "Aukey EP-T21", "price": 2999, "image": "/assets/images/1059.png"},
        {"id": 60, "name": "SoundPEATS Sonic", "price": 1999, "image": "/assets/images/1060.png"},

      ]

    return (
        <main>
            <section className="products">
                { products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </main>
  )
}

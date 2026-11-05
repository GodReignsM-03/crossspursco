// Cross Spurs Co. — product + Square checkout link data, shared by index.html and checkout.html.
// SHIP links: $25 + $6 shipping (Square collects the address). PICKUP links: $25, local pickup in Mission, TX.
// Never edit a Square link's shipping fee in Square; recreate the link and paste the new URL here.
window.PRODUCTS = {
  deadline: "2026-11-30T23:59:00-06:00",   // Nov 30, 11:59 PM Central
  price: 25,
  shippingFee: 6,
  pickupPlace: "Mission, TX",
  items: {
    men: {
      name: "Men's Signature Tee", colorway: "Natural / Saddle Brown",
      fit: "Unisex classic fit · true to size", swatch: ["#efe8dc","#7a4a2a"],
      front: "0% 0%", back: "100% 0%", btn: "brown",
      ship:   { "S": "https://square.link/u/f2SqTp3H", "M": "https://square.link/u/ials4hSd", "L": "https://square.link/u/NXUE4yIu",
                "XL": "https://square.link/u/T4QxrV2N", "2XL": "https://square.link/u/pfRo3XqV", "3XL": "https://square.link/u/yGICyZp9" },
      pickup: { "S": "https://square.link/u/IzSz9ePI", "M": "https://square.link/u/EGIgRIob", "L": "https://square.link/u/rnG8qsyQ",
                "XL": "https://square.link/u/BT90r8XE", "2XL": "https://square.link/u/4mB0nTIG", "3XL": "https://square.link/u/wUaOXyYo" }
    },
    women: {
      name: "Women's Signature Tee", colorway: "Black / Turquoise",
      fit: "Unisex classic fit · most women size down one", swatch: ["#1a1715","#2bb3bf"],
      front: "0% 100%", back: "100% 100%", btn: "",
      ship:   { "S": "https://square.link/u/lKlcjTvP", "M": "https://square.link/u/AiTkHPOA", "L": "https://square.link/u/IBlX5H1w",
                "XL": "https://square.link/u/pWL3bidK", "2XL": "https://square.link/u/IRPc6vYS", "3XL": "https://square.link/u/0Cz9VXyd" },
      pickup: { "S": "https://square.link/u/YLt5Z3wQ", "M": "https://square.link/u/J1nJVx6V", "L": "https://square.link/u/4IFT6jBR",
                "XL": "https://square.link/u/OxHKhaTz", "2XL": "https://square.link/u/zhoOJVtL", "3XL": "https://square.link/u/1veM14f7" }
    }
  },
  sizes: ["S","M","L","XL","2XL","3XL"]
};

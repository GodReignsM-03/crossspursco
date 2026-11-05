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
      ship:   { "S": "https://square.link/u/MLanYXuk", "M": "https://square.link/u/ib1TqSZ3", "L": "https://square.link/u/WkoXIHCd",
                "XL": "https://square.link/u/t0hYxBNj", "2XL": "https://square.link/u/JGAQe1z3", "3XL": "https://square.link/u/urkj5qJy" },
      pickup: { "S": "https://square.link/u/Z8MNY4Q6", "M": "https://square.link/u/03FUp7c1", "L": "https://square.link/u/a6gsl8La",
                "XL": "https://square.link/u/wBhiucX4", "2XL": "https://square.link/u/jodk1v4e", "3XL": "https://square.link/u/1ZbrIwVD" }
    },
    women: {
      name: "Women's Signature Tee", colorway: "Black / Turquoise",
      fit: "Unisex classic fit · most women size down one", swatch: ["#1a1715","#2bb3bf"],
      front: "0% 100%", back: "100% 100%", btn: "",
      ship:   { "S": "https://square.link/u/GyudvhMF", "M": "https://square.link/u/KBSVi0y5", "L": "https://square.link/u/wt9ENLCw",
                "XL": "https://square.link/u/PPJn99Pr", "2XL": "https://square.link/u/lEGGveta", "3XL": "https://square.link/u/Zs7Uwfcs" },
      pickup: { "S": "https://square.link/u/vjlFdfTf", "M": "https://square.link/u/9rtUMHWi", "L": "https://square.link/u/18fsEWn6",
                "XL": "https://square.link/u/A03bI95n", "2XL": "https://square.link/u/18caRCUs", "3XL": "https://square.link/u/e0vRNkcL" }
    }
  },
  sizes: ["S","M","L","XL","2XL","3XL"]
};

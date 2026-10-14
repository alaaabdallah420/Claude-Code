# Algeria PC upgrade part prices (DA), used and new, with France comparison (as of 14 Oct 2026)

**How the data was collected:**
- **Shop prices were read directly on 14 Oct 2026** through each shop's own product feed:
  - Campus Informatique: WooCommerce Store API.
  - NextGen DZ: search pages.
  - Geekzone DZ: PrestaShop search JSON.
  - Lahlou Industrie: Shopify `products.json`. Every Lahlou product shows `updated_at` = 2026-10-14, so those prices are current.
  - Click Informatique (click-dz.com): WooCommerce Store API.
- **Stock status matters for Campus.** "IN" or "OUT" is the shop's own stock flag. A Campus price marked OUT may be stale, possibly from before the 2025-26 memory price rise. Treat OUT prices as historical.
- **NextGen shows no stock flag.** Its product IDs only roughly show listing age; a higher ID means a newer listing.
- **Ouedkniss could not be read directly.** The site renders in JavaScript, and its GraphQL API (`api.ouedkniss.com/graphql`) needs an anonymous login with a recaptcha token. It returned empty bodies.
  - All Ouedkniss figures below come from search-engine snapshots of Ouedkniss search pages. They have **no visible listing dates**, so treat them as possibly stale asking prices, not completed sales.
  - The search snapshots seldom give the seller or city for each listing; when they do, it is noted.
- **Shops that blocked access:** Digitec DZ (recaptcha "bots verification" page), Informatics DZ (HTTP 403), Hardsoft (search did not filter; connection resets), Ultima PC and Bestsetup (no connection). No prices were collected from them.
- **Exchange rate used for conversions:** about 276 DA/EUR on the parallel market (sell side, 11 Oct 2026; see the last section).

---

## Q1. GPU prices in Algeria: used on Ouedkniss and new at shops

### Takeaway
- **New RTX 50-series cards are well stocked:**
  - RTX 5070: about 165-230k DA (typically about 195-200k).
  - RTX 5070 Ti: about 270-360k DA (typically about 295-330k).
  - RTX 5080: about 345-440k DA (typically about 389k); premium models up to 559k.
- **Used high-end 30/40-series cards on Ouedkniss** (asking prices):
  - RTX 3080 10GB: about 104-109k DA.
  - RTX 3080 Ti: about 118-138k DA.
  - RTX 3090: about 190-218k DA.
  - RTX 4070 Ti: about 195-209k DA.
  - RTX 4070 Ti Super: about 200-265k DA.
  - RTX 4090: about 610k DA.
- **Discontinued 40-series cards are scarce new.** NextGen still lists the RTX 4070 Super (175k), RTX 4080 Super (299.9k, probably an old price) and RTX 4090 (980k).
- **Confirmation of the caller's figures:** the used RTX 3090 range of about 190-218k DA is confirmed. The new RTX 5070 Ti range of about 244-330k DA is broadly confirmed and extended: the in-stock range now runs from about 294.5k to 360k DA, and the 229-275k entries are out-of-stock or older Ouedkniss asking prices.

### Cited Findings

**Price table: GPUs (DA)**

| GPU | Condition | Price (DA) | Seller / city | Date / status | Source |
|---|---|---|---|---|---|
| RTX 3080 10GB Palit Gaming Pro | used/unclear | 103,900 | Ouedkniss seller, Bab Ezzouar (cash on delivery) | undated snapshot | [Ouedkniss "3080"](https://www.ouedkniss.com/s/1?keywords=3080+) |
| RTX 3080 10GB EVGA FTW3 (Ultra) | used/unclear | 108,000-109,000 | Ouedkniss, Bab Ezzouar | undated | [Ouedkniss "3080"](https://www.ouedkniss.com/s/1?keywords=3080+) |
| RTX 3080 12GB MSI Gaming Z Trio LHR | used/unclear | 118,000 | Ouedkniss | undated | [Ouedkniss "rtx 3080 12go"](https://www.ouedkniss.com/s/1?keywords=rtx-3080-12go) |
| RTX 3080 Ti EVGA FTW3 12GB | used/unclear | 126,000 | Ouedkniss | undated | [Ouedkniss "rtx 3080 ti"](https://www.ouedkniss.com/s/1?keywords=rtx-3080-ti) |
| RTX 3080 Ti Palit GamingPro 12GB | used/unclear | 137,900 | Ouedkniss | undated | [Ouedkniss "3080 ti"](https://www.ouedkniss.com/s/1?keywords=3080-ti) |
| RTX 3090 MSI Ventus 3X 24GB "OC USED 10/10" | used | 190,000 | Ouedkniss (sellers on these pages include DZ TECH SHOP and Ami Informatique, Bordj Bou Arreridj and Algiers) | undated | [Ouedkniss "rtx 3090"](https://www.ouedkniss.com/s/1?keywords=rtx-3090) |
| RTX 3090 24GB Palit GameRock | used/unclear | 218,000 | Ouedkniss | undated | [Ouedkniss "3090 rtx"](https://www.ouedkniss.com/s/1?keywords=3090-rtx) |
| RTX 3090 Ti | none found | none | none | none | [Ouedkniss "Rtx 3090ti"](https://www.ouedkniss.com/s/1?keywords=Rtx+3090ti) (only category headers in snapshot) |
| RTX 4070 Super Zotac Twin Edge OC 12GB | new | 175,000 | NextGen DZ | read 14 Oct 2026 | [NextGen](https://nextgendz.com/product-detail.php?id=1063) |
| RTX 4070 Ti ASUS ROG Strix 12GB | used | 195,000 (Baraki); 205,000 (Bir El Djir, Oran); 209,000 (Oran, "occasion") | Ouedkniss | undated | [Ouedkniss "rtx 4070 ti"](https://www.ouedkniss.com/s/1?keywords=rtx-4070-ti%3Flang%3Den) |
| RTX 4070 Ti Super MSI Gaming X Slim 16GB "10/10" | used | 200,000 | Ouedkniss | undated | [Ouedkniss "rtx 4070 super"](https://www.ouedkniss.com/s/1?keywords=rtx-4070-super%3Flang%3Den) |
| RTX 4070 Ti Super Gigabyte Eagle OC 16G | unclear | 229,000 | Ouedkniss, Alger centre (cash on delivery) | undated | [Ouedkniss "rtx 4070 ti"](https://www.ouedkniss.com/s/1?keywords=rtx-4070-ti%3Flang%3Den) |
| RTX 4070 Ti Super (unspecified) | unclear | 240,000 | Ouedkniss, Sidi Bel Abbès | undated | same |
| RTX 4070 Ti Super Gigabyte AORUS Master 16G | unclear | 265,000 | Ouedkniss | undated | same |
| RTX 4080 (non-Super) | none found | none | none | none | no card-only Ouedkniss result |
| RTX 4080 Super MSI Gaming X Slim 16GB | new | 299,900 | NextGen DZ | old listing ID (579), price probably stale | [NextGen](https://nextgendz.com/product-detail.php?id=579) |
| RTX 4080 Super Zotac Trinity OC 16GB | new | 299,900 | NextGen DZ | old listing ID (469), probably stale | [NextGen](https://nextgendz.com/product-detail.php?id=469) |
| RTX 4090 ASUS ROG Strix White OC 24GB "ETAT 10/10" | used | 610,000 | Ouedkniss | undated | [Ouedkniss "rtx 4090 24gb"](https://www.ouedkniss.com/s/1?keywords=rtx-4090-24gb) |
| RTX 4090 MSI Suprim Liquid X 24GB | new | 980,000 | NextGen DZ | recent ID (1128) | [NextGen](https://nextgendz.com/product-detail.php?id=1128) |
| RTX 5070 Gigabyte Windforce SFF 12GB | new | 164,500 | Campus Informatique | OUT | [Campus](https://campusinformatique.com/shop/gigabyte-rtx-5070-windforce-sff-12go/) |
| RTX 5070 ASUS Prime OC 12GB | new | 174,900 | Campus | OUT | [Campus](https://campusinformatique.com/shop/carte-graphique-asus-prime-rtx-5070-oc-12go-gddr7/) |
| RTX 5070 Zotac Twin Edge 12GB | new | 194,000 | Lahlou Industrie | in stock, 14 Oct 2026 | [Lahlou](https://lahlou-industrie.com/products/carte-graphique-zotac-rtx-5070-twin-edge-12gb-gddr7-192-bits) |
| RTX 5070 ASUS Dual OC 12GB | new | 198,900 (Lahlou); 199,500 (Campus, IN); 199,900 (NextGen) | Lahlou / Campus / NextGen | 14 Oct 2026 | [Lahlou](https://lahlou-industrie.com/products/carte-graphique-asus-rtx-5070-dual-oc-12gb-gddr7-192-bits); [Campus](https://campusinformatique.com/shop/asus-rtx-5070-dual-oc-12go-gddr7/); [NextGen](https://nextgendz.com/product-detail.php?id=983) |
| RTX 5070 Zotac Twin Edge OC | new | 214,900 | Click Informatique | IN | [Click](https://click-dz.com/rtx-5070-12gb-gddr7-zotac-gaming-twin-edge-oc-edition/) |
| RTX 5070 Gigabyte Eagle OC Ice SFF | new | 219,900 | Geekzone DZ | 14 Oct 2026 | [Geekzone](https://www.geekzonedz.com/cartes-graphiques/3790-gigabyte-geforce-rtx-5070-eagle-oc-ice-sff-12g.html) |
| RTX 5070 MSI Gaming Trio / Gigabyte Gaming OC / Aero | new | 229,900 | NextGen | 14 Oct 2026 | [NextGen](https://nextgendz.com/product-detail.php?id=839) |
| RTX 5070 Ti MSI Shadow 3X OC | new | 229,000 (Campus, OUT); 295,000 (NextGen) | Campus / NextGen | | [Campus](https://campusinformatique.com/shop/msi-rtx-5070-ti-shadow-3x-oc-16go-gddr7/); [NextGen](https://nextgendz.com/product-detail.php?id=707) |
| RTX 5070 Ti MSI Ventus 3X OC | new | 259,500 (Campus, OUT); 295,900 (NextGen); 269,900-270,000 (Ouedkniss shops, "neuf sous emballage") | Campus / NextGen / Ouedkniss shops (Algiers, Sétif, Oran, Tipaza, e.g. EL ASSLI HI TECH, Salam Informatique Sétif) | Ouedkniss undated | [Campus](https://campusinformatique.com/shop/msi-rtx-5070-ti-ventus-3x-oc-16go/); [NextGen](https://nextgendz.com/product-detail.php?id=633); [Ouedkniss "rtx 5070 ti"](https://www.ouedkniss.com/s/1?keywords=rtx-5070-ti%3Flang%3Den) |
| RTX 5070 Ti Gigabyte Windforce OC SFF | new | 294,500 | Campus | IN | [Campus](https://campusinformatique.com/shop/gigabyte-rtx-5070-ti-windforce-oc-sff-16g/) |
| RTX 5070 Ti PNY Epic OC ARGB | new | 299,000 | NextGen | | [NextGen](https://nextgendz.com/product-detail.php?id=708) |
| RTX 5070 Ti ASUS Prime OC | new | 315,000 | Campus | IN | [Campus](https://campusinformatique.com/shop/asus-prime-rtx-5070-ti-oc-16go-gddr7/) |
| RTX 5070 Ti MSI Gaming Trio OC | new | 325,000 (Geekzone); 315,000 (Campus, OUT); 359,900 (Click, IN) | Geekzone / Campus / Click | | [Geekzone](https://www.geekzonedz.com/cartes-graphiques/3625-msi-geforce-rtx-5070-ti-16g-gaming-trio-oc.html); [Click](https://click-dz.com/rtx-5070ti-msi-gaming-trio-oc-16gb-gddr7-black/) |
| RTX 5070 Ti Gigabyte Aero OC | new | 325,000 | Ouedkniss shop | undated | [Ouedkniss "5070 ti"](https://www.ouedkniss.com/s/1?keywords=5070-ti%3Flang%3Den) |
| RTX 5070 Ti Zotac Solid SFF | new | 331,900 (+7% if bought without a full config) | Click | IN | [Click](https://click-dz.com/rtx-5070ti-16gb-zotac-gaming-solid-sff-fan-x3-256bit-gddr7-7-pour-ceux-qui-veulent-lacheter-seule-copie/) |
| RTX 5070 Ti ASUS TUF OC | new | 339,500 (Campus, IN); 345,900 (NextGen) | Campus / NextGen | | [Campus](https://campusinformatique.com/shop/asus-tuf-gaming-rtx-5070-ti-oc-16go-gddr7/); [NextGen](https://nextgendz.com/product-detail.php?id=822) |
| RTX 5080 MSI Shadow 3X OC | new | 345,000 (Campus, OUT); 389,000 (Lahlou, in stock); 394,000 (NextGen) | | 14 Oct 2026 | [Campus](https://campusinformatique.com/shop/msi-rtx-5080-shadow-3x-oc-16go/); [Lahlou](https://lahlou-industrie.com/products/carte-graphique-msi-rtx5080-16g-shadow-3x-oc-16gb-gddr7-black); [NextGen](https://nextgendz.com/product-detail.php?id=629) |
| RTX 5080 MSI Ventus 3X 16GB | new/unclear | 348,000 (Ouedkniss; shops on the page include BUYMORE and Gigastore); 358,000 (Campus, OUT) | | Ouedkniss undated | [Ouedkniss "5080 rtx"](https://www.ouedkniss.com/s/1?keywords=5080-rtx); [Campus](https://campusinformatique.com/shop/msi-rtx-5080-ventus-3x-oc-16go/) |
| RTX 5080 Gigabyte Aero OC SFF | new | 360,000 | Campus | OUT | [Campus](https://campusinformatique.com/shop/gigabyte-rtx-5080-aero-oc-sff-16go/) |
| RTX 5080 Gigabyte Windforce SFF | new | 389,000 | NextGen | | [NextGen](https://nextgendz.com/product-detail.php?id=819) |
| RTX 5080 ASUS TUF OC | new | 425,900 | NextGen | | [NextGen](https://nextgendz.com/product-detail.php?id=710) |
| RTX 5080 MSI Vanguard SOC | new | 388,900 (Campus, OUT); 439,000 (NextGen) | | | [Campus](https://campusinformatique.com/shop/msi-rtx-5080-vanguard-soc-launch-edition-16go/); [NextGen](https://nextgendz.com/product-detail.php?id=1111) |
| RTX 5080 ASUS ROG Astral | new | 559,000 | NextGen | | [NextGen](https://nextgendz.com/product-detail.php?id=798) |

**Other GPU findings:**
- **Some Algerian shops charge extra for a card bought on its own.** Click Informatique adds 5-10% unless the card is part of a full PC build ("vente seule +10%", "config uniquement ou +7%"). [Click RTX listing](https://click-dz.com/rtx-5070ti-16gb-zotac-gaming-solid-sff-fan-x3-256bit-gddr7-7-pour-ceux-qui-veulent-lacheter-seule-copie/)
- **Some Ouedkniss listings are placeholders or typos.** Examples include 1 DA listings and a Gigabyte RTX 4090 Gaming OC at "487.5 DA". NextGen also lists an ASUS RTX 5090 TUF at 13,999,000 DA, an obvious typo. [Ouedkniss "4090"](https://www.ouedkniss.com/s/1?keywords=4090); [NextGen](https://nextgendz.com/product-detail.php?id=1121)

**Summary ranges: GPUs (DA)**

| GPU | Used low / typical / high | New low / typical / high |
|---|---|---|
| RTX 3080 10GB | 104k / ~106k / 109k (Ouedkniss, condition partly unclear) | n/a |
| RTX 3080 12GB / 3080 Ti | 118k / ~126k / 138k | n/a |
| RTX 3090 | 190k / ~200k / 218k | n/a |
| RTX 3090 Ti | not found | n/a |
| RTX 4070 Super | not found | 175k (one listing, NextGen) |
| RTX 4070 Ti | 195k / ~205k / 209k | n/a |
| RTX 4070 Ti Super | 200k / ~230k / 265k (condition mixed) | n/a |
| RTX 4080 / 4080 Super | not found | 299.9k (NextGen, probably stale) |
| RTX 4090 | 610k (one listing) | 980k (one listing) |
| RTX 5070 | n/a | 164.5k / ~199k / 229.9k |
| RTX 5070 Ti | n/a | 269.9k (Ouedkniss shop) / ~295-325k / 359.9k. The in-stock floor is 294.5k (Campus). |
| RTX 5080 | n/a | 345k (OUT) or 348k (Ouedkniss) / ~389k / 439k; Astral 559k |

### Inferences
- **A used RTX 3090 (about 190-218k DA) costs about 65-75% of a new RTX 5070 Ti (about 295-330k)**, and the 3090 brings 24GB of VRAM. The table shows it is the cheapest high-VRAM option here.
- **The used RTX 4070 Ti Super (200-265k) overlaps the price of a new RTX 5070 (195-230k)** and sits below a new RTX 5070 Ti.
- **The 4080 and 4080 Super are effectively absent** on both the used and new markets in the indexed data, so they are not a realistic target in Algeria now.
- **Ouedkniss figures are asking prices.** Negotiated prices are often lower; this is a general observation, not measured here.

### Gaps
- No Ouedkniss listing dates could be retrieved, because of the API and recaptcha block. The age of every Ouedkniss price is unknown.
- No Ouedkniss results were found for RTX 3090 Ti, RTX 4080 (non-Super) or RTX 4080 Super, and only one RTX 4090.
- Not checked: Digitec DZ, Informatics DZ, Hardsoft, Ultima PC and Bestsetup (blocked or unreachable).
- No used RTX 5070, 5070 Ti or 5080 listings were found on Ouedkniss; listings that come up are shop and new stock.

---

## Q2. Resale value of a used RTX 3060 Ti 8GB on Ouedkniss

### Takeaway
- Asking prices for RTX 3060 Ti 8GB cards on Ouedkniss run about 68k-86k DA.
- The only listing explicitly marked "Used" asks 68,000 DA.
- A private resale is likely to bring about 60-70k DA. This is an estimate.

### Cited Findings
- ASUS Dual RTX 3060 Ti 8GB Mini V2, marked "Used": 68,000 DA. [Ouedkniss "asus rtx 3060 ti"](https://www.ouedkniss.com/s/1?keywords=asus-rtx-3060-ti)
- Palit Dual 8GB: 70,000 DA. Galax 8GB: 72,000 DA. Condition is not stated for either. [Ouedkniss "rtx 3060 ti/1000"](https://www.ouedkniss.com/s/1?keywords=rtx+3060+ti%2F1000)
- A seller listing EVGA, Gigabyte and ASUS TUF 3060 Ti cards asks 69,500 DA. Biostar 8GB: 82,000 DA. "GeForce RTX 3060Ti": 85,900 DA, possibly a shop or new unit. [Ouedkniss "3060ti"](https://www.ouedkniss.com/s/1?keywords=3060ti); [Ouedkniss "Rtx3060ti"](https://www.ouedkniss.com/s/1?keywords=Rtx3060ti)
- **Reference prices for new cards in a similar class:**
  - New RTX 3060 12GB: 74,900-86,900 DA at Campus (mostly out of stock); Zotac bulk 79,500 DA, in stock. [Campus Zotac 3060](https://campusinformatique.com/shop/zotac-rtx-3060-x-gaming-12go/)
  - New RTX 5060 8GB: about 92-120k DA. [Campus MSI 5060 Ventus](https://campusinformatique.com/shop/msi-rtx-5060-ventus-2x-oc-8go/)
- A used RTX 2060 Super 8GB sells for 59,900 DA at Click Informatique ("OCCASION"). This gives a floor for used cards in this class. [Click](https://click-dz.com/rtx-2060-super-08go-gddr6-msi-ventus-2x-3dp-1hdmi-occasion/)

### Inferences
- **Estimated private sale price: about 60-70k DA.** This is an estimate, not a measured figure. To sell quickly, the 3060 Ti probably has to be priced below the 68-72k asks and well below a new RTX 3060 12GB (about 75-80k).
- **Offset against the upgrade:**
  - About 60-70k DA covers roughly 30% of a used RTX 3090.
  - It covers roughly 20-23% of a new RTX 5070 Ti.

### Gaps
- No completed-sale data and no listing dates.
- Most 3060 Ti listings do not state the condition.

---

## Q3. PSU prices: quality 850W and 1000W ATX 3.x units

### Takeaway
- **Good 850W Gold ATX 3.x units cost about 25-37k DA new.** Examples: MSI MPG A850GS at 24.9k, ASUS TUF 850W at 26.9-37k, Cooler Master Elite 850W at 27.9-29.9k.
- **1000W Gold units cost about 36-58k DA.** Examples: MSI MAG A1000GL at 35.8k, Gigabyte UD1000GM V2 at 43.9k, ASUS TUF 1000W at 49.9k, Corsair RM1000e (2025) at 58k.
- **Some models were not found in DA:** Corsair RM850x, RM1000x, Seasonic Focus, and MSI MPG A850G (non-S).
- No used PSU listings were found.

### Cited Findings

| PSU | Condition | Price (DA) | Seller | Status | Source |
|---|---|---|---|---|---|
| MSI MPG A850GS PCIe5 850W Gold | new | 24,900 (was 29,800) | Campus | IN | [Campus](https://campusinformatique.com/shop/alimentation-msi-mpg-a850gs-pcie5-850w-80plus-gold/) |
| MSI MAG A850GL 850W Gold PCIe5 | new | 25,900 | Campus | OUT | [Campus](https://campusinformatique.com/shop/msi-mag-a850gl-850w-80plus-gold/) |
| ASUS TUF Gaming 850W Gold ATX 3.1 | new | 26,900 (NextGen); 32,900 (Lahlou, in stock); 37,000 (Geekzone) | | 14 Oct 2026 | [NextGen](https://nextgendz.com/product-detail.php?id=1041); [Lahlou](https://lahlou-industrie.com/products/alimentation-asus-tuf-850watts-80-gold); [Geekzone](https://www.geekzonedz.com/alimentations/3584-asus-tuf-gaming-850w-gold-atx-31.html) |
| Cooler Master Elite 850W Gold ATX 3.1 | new | 27,900 (Lahlou); 29,900 (NextGen) | | | [Lahlou](https://lahlou-industrie.com/products/alimentation-coolermaster-850watts-elite-80-gold); [NextGen](https://nextgendz.com/product-detail.php?id=1023) |
| Thermaltake Toughpower GT Snow 850W Gold ATX | new | 26,900 | NextGen | | [NextGen](https://nextgendz.com/product-detail.php?id=1123) |
| ASUS Prime AP-850G 850W Gold | new | 29,800 | Campus | IN | [Campus](https://campusinformatique.com/shop/asus-prime-ap-850g-850w-80plus-gold-modulair/) |
| be quiet! Power Zone 2 850W Platinum | new | 49,900 | NextGen | | [NextGen](https://nextgendz.com/product-detail.php?id=1032) |
| MSI MAG A1000GL 1000W Gold PCIe 5.0 | new | 35,800 | Campus | IN | [Campus](https://campusinformatique.com/shop/alimentation-msi-mag-a1000gl-1000w-80plus-gold-modulaire-pcie5-0/) |
| Thermaltake Toughpower GT Snow 1000W Gold | new | 35,900 | Geekzone | | [Geekzone](https://www.geekzonedz.com/alimentations/3492-thermaltake-toughpower-gt-snow-1000w-gold.html) |
| Gigabyte UD1000GM V2 Gold ATX 3.1 / PCIe 5.1 | new | 43,900 | Campus | IN | [Campus](https://campusinformatique.com/shop/gigabyte-ud1000gm-v2-80plus-gold-1000w-modulaire-atx-3-1-pcie-5-1/) |
| ASUS TUF Gaming 1000W Gold ATX 3.1 | new | 49,900 (Geekzone); 49,500 (Campus, ATX 3.0, OUT) | | | [Geekzone](https://www.geekzonedz.com/alimentations/3583-asus-tuf-gaming-1000w-gold-atx-31.html); [Campus](https://campusinformatique.com/shop/asus-tuf-gaming-1000w-80plus-gold-atx-3-0/) |
| Corsair RM1000e (2025) | new | 58,000 | Geekzone | | [Geekzone](https://www.geekzonedz.com/alimentations/3590-corsair-rm1000e-2025.html) |
| be quiet! Power Zone 2 1000W Platinum | new | 58,900 (NextGen); 65,000 (Geekzone) | | | [NextGen](https://nextgendz.com/product-detail.php?id=1031); [Geekzone](https://www.geekzonedz.com/alimentations/3634-be-quiet-power-zone-2-1000w-80plus-platinum.html) |
| Aorus Master AE1000PM 1000W Platinum ATX 3.1 | new | 62,900 | NextGen | | [NextGen](https://nextgendz.com/product-detail.php?id=728) |
| Seasonic (any model in stock) | new | 168,000 for the Prime TX-1600 ATX 3.1 only | Geekzone | | [Geekzone](https://www.geekzonedz.com/alimentations/3510-seasonic-prime-tx-1600-atx-31.html) |

- **An older Hardsoft listing is unreliable.** It is titled "Corsair RM 850W 80+ Gold" at 10,500 DA, but its specification shows 550W, so it is probably mislabeled. [Hardsoft](https://hardsoft.dz/produit.php?id=1056)
- **Price ranges (new):**
  - 850W Gold ATX 3.x: low 24.9k, typical about 27-30k, high 37k; Platinum about 50k.
  - 1000W Gold: low 35.8k, typical about 44-50k, high 58k; Platinum 59-65k.

### Inferences
- **An 850W Gold ATX 3.1 unit with a native 12V-2x6 connector** (MSI A850GS, ASUS TUF, CM Elite) costs about 25-33k DA and is enough for an RTX 3090, 5070 Ti or 5080 build. A 1000W unit adds about 10-20k DA.

### Gaps
- No DA prices were found for the Corsair RM850x or RM1000x, MSI MPG A850G (non-GS), Seasonic Focus GX, or be quiet! Pure/Straight Power.
- No used PSU listings were found; Ouedkniss could not be queried directly.

---

## Q4. RAM: 2x32GB DDR5-6000 and 2x48GB DDR5 kits

### Takeaway
- **DDR5 is very expensive in Algeria in October 2026.** A 2x32GB DDR5-6000 CL30 kit costs about 210-229k DA, roughly 760-830 EUR at the parallel rate. 2x16GB 6000 kits cost about 102-150k DA.
- **No 2x48GB (96GB) kit was listed** at any shop checked.

### Cited Findings

| Kit | Condition | Price (DA) | Seller | Status | Source |
|---|---|---|---|---|---|
| Kingston FURY Beast RGB 64GB (2x32) DDR5-6000 CL30 | new | 210,000 | Geekzone | 14 Oct 2026 | [Geekzone](https://www.geekzonedz.com/barrettes-memoire/3239-kingston-fury-beast-rgb-64-go-2-x-32-go-ddr5-6000-mhz-cl30.html) |
| XPG Caster RGB 64GB (2x32) 6400 CL32 | new | 219,900 | Campus | OUT | [Campus](https://campusinformatique.com/shop/ram-xpg-64go-2x32go-6400mhz-caster-rgb-cl32-ddr5/) |
| Corsair Vengeance RGB 64GB (2x32) 6400 CL32 | new | 220,900 | Campus | OUT | [Campus](https://campusinformatique.com/shop/ram-corsair-64go-2x32go-6400mhz-vengeance-rgb-ddr5-cl32/) |
| Silicon Power XPower Storm 64GB (2x32) 6000 | new | 225,400 | Campus | OUT | [Campus](https://campusinformatique.com/shop/ram-silicon-power-64go-2x32go-6000mhz-xpower-storm-rgb/) |
| XPG Lancer Blade 64GB (2x32) 6000 CL30 | new | 225,400 (white) / 229,000 (black) | Campus | OUT | [Campus](https://campusinformatique.com/shop/ram-xpg-64go-2x32go-6000mhz-lancer-blade-cl30-ddr5/) |
| XPG Lancer RGB 64GB (2x32) 6000 CL30 | new | 229,000 | Campus | OUT | [Campus](https://campusinformatique.com/shop/ram-xpg-64go-2x32go-6000mhz-lancer-rgb-cl30-ddr5/) |
| XPG Lancer RGB White 64GB (2x32) 6400 CL32 | new | 269,500 | Campus | IN | [Campus](https://campusinformatique.com/shop/ram-xpg-64go-2x32go-6400mhz-lancer-rgb-cl32-white/) |
| TeamGroup T-Force Xtreem 48GB (2x24) 7200 | new | 219,500 | Campus | IN | [Campus](https://campusinformatique.com/shop/ram-teamgroup-tforce-xtreem-argb-48go-2x24go-7200mhz-ddr5/) |
| 2x16GB DDR5-6000 kits (reference) | new | 102,000 (Magma); 115,000 (Corsair, NextGen); 125,000 (G.Skill Flare X5 / Trident Z5 CL36, Geekzone); 125,900-135,900 (CL30 kits, NextGen); 150,000 (G.Skill CL28, Geekzone) | various | | [Campus Magma](https://campusinformatique.com/shop/ram-magma-32go-2x16go-6000mhz-ddr5-rgb-black/); [NextGen](https://nextgendz.com/product-detail.php?id=844); [Geekzone](https://www.geekzonedz.com/barrettes-memoire/2416-gskill-flare-x5-2x-16-go-ddr5-6000-mhz-cl36.html) |
| Single 16GB DDR5 sticks (reference) | new | 59,900-62,900 | Lahlou | in stock, 14 Oct 2026 | [Lahlou](https://lahlou-industrie.com/products/memoire-asgard-freyr-ddr5-16gb-pc6000mhz) |

- **2x48GB (96GB):** no kit found at Campus, NextGen, Geekzone, Lahlou or Click. Searches for "2x48", "96gb" and "48go" returned only the 2x24 kit.
- **US reference:** Tom's Hardware's 2026 RAM price index shows a 96GB DDR5-6000 kit at "$1,899". The snippet is ambiguous, because a "$189" figure also appears. [Tom's Hardware RAM index](https://www.tomshardware.com/pc-components/ram/ram-price-index-2026-lowest-price-on-ddr5-and-ddr4-memory-of-all-capacities)

### Inferences
- **2x32GB DDR5-6000 CL30 price range:** low 210k, typical about 220-229k, high 269.5k (6400 white). Most Campus 2x32 kits are out of stock, so the 210k Geekzone kit may be the realistic current price.
- **Keeping the existing mixed RAM may be cheaper.** Replacing it costs as much as a used RTX 3090, so it is probably worth deferring unless it is unstable.

### Gaps
- No DA price for any 2x48GB kit.
- No used DDR5 listings were found; Ouedkniss was not queryable.

---

## Q5. NVMe SSD: 2TB and 4TB Gen4

### Takeaway
- **2TB Gen4 drives:**
  - Samsung 990 Pro 2TB: about 65.9-89.5k DA.
  - WD SN850X 2TB: 71.9k at Campus (out of stock).
  - Cheaper Gen4 alternatives: Lexar Thor Pro 2TB at 45.9k and Lexar EQ790 2TB at 60k.
- **4TB drives:**
  - Samsung 990 Pro 4TB: 118.9k (NextGen).
  - Samsung 990 EVO Plus 4TB: 154.5k (Campus, in stock).
- The Lexar NM790 was not listed at any shop checked.

### Cited Findings

| SSD | Price (DA) | Seller | Status | Source |
|---|---|---|---|---|
| Samsung 990 Pro 2TB | 65,900 | NextGen | | [NextGen](https://nextgendz.com/product-detail.php?id=527) |
| Samsung 990 Pro 2TB | 68,900 | Campus | OUT | [Campus](https://campusinformatique.com/shop/ssd-samsung-2to-990-pro-nvme-7450mbs/) |
| Samsung 990 Pro 2TB (± heatsink) | 74,000 | Geekzone | | [Geekzone](https://www.geekzonedz.com/stockages/1485-samsung-ssd-990-pro-m2-pcie-nvme-2-to.html) |
| Samsung 990 Pro 2TB with heatsink | 89,500 | Campus | IN | [Campus](https://campusinformatique.com/shop/ssd-samsung-2to-990-pro-nvme-7450mbs-avec-dissipateur/) |
| WD Black SN850X 2TB | 71,900 | Campus | OUT | [Campus](https://campusinformatique.com/shop/ssd-nvme-wd-2to-black-sn850x-gen4-7300mb-s/) |
| Lexar Thor Pro 2TB Gen4 | 45,900 | NextGen | | [NextGen](https://nextgendz.com/product-detail.php?id=580) |
| Lexar EQ790 2TB Gen4 | 60,000 | NextGen | | [NextGen](https://nextgendz.com/product-detail.php?id=894) |
| ADATA Legend 860 2TB Gen4 | 53,000 | NextGen | | [NextGen](https://nextgendz.com/product-detail.php?id=1014) |
| Kingston NV3 2TB Gen4 | 72,900 | Campus | IN | [Campus](https://campusinformatique.com/shop/ssd-m-2-nvme-kingston-1to-nv3-pcie4-0-6000mb-s/) |
| Samsung 990 EVO Plus 2TB | 58,000 (NextGen); 79,800 (Campus, IN) | | | [NextGen](https://nextgendz.com/product-detail.php?id=646); [Campus](https://campusinformatique.com/shop/ssd-samsung-990-evo-plus-2to-nvme-7250mbs/) |
| Samsung 9100 Pro 2TB Gen5 (reference) | 69,900-75,900 | NextGen | | [NextGen](https://nextgendz.com/product-detail.php?id=1083) |
| Samsung 990 Pro 4TB | 118,900 | NextGen | | [NextGen](https://nextgendz.com/product-detail.php?id=813) |
| Samsung 990 Pro 4TB heatsink | 84,900 | Campus | OUT; probably a stale price | [Campus](https://campusinformatique.com/shop/ssd-m-2-nvme-samsung-4to-990-pro-heatsink-7450mb-s/) |
| Samsung 990 EVO Plus 4TB | 154,500 | Campus | IN | [Campus](https://campusinformatique.com/shop/ssd-samsung-990-evo-plus-4to-nvme-7250mbs/) |
| Samsung 9100 Pro 4TB Gen5 (reference) | 135,900 | NextGen | | [NextGen](https://nextgendz.com/product-detail.php?id=777) |

- **Price ranges:**
  - 2TB premium Gen4 (990 Pro / SN850X): low 65.9k, typical about 70-74k, high 89.5k.
  - 2TB budget Gen4: about 46-60k.
  - 4TB premium: about 119k (990 Pro, NextGen) to 154.5k (990 EVO Plus, Campus, in stock).

### Inferences
- **A Gen5 drive can cost almost the same as a Gen4 one.** NextGen's Samsung 9100 Pro 2TB at 69.9k is close to the 990 Pro 2TB (65.9-74k), so where it is in stock it is roughly a free upgrade.
- **A 4TB drive in stock costs about 120-155k DA.**

### Gaps
- Lexar NM790 and WD SN850X 4TB: no DA listing found.
- No used SSD data.

---

## Q6. Content-creation monitor (27" 1440p or 4K IPS)

### Takeaway
- **ASUS ProArt models are the ones stocked in Algeria:**
  - PA278CV (27" 1440p): about 68k DA.
  - PA279CV (27" 4K): about 117k.
  - PA279CRV (27" 4K): about 118-136k.
  - PA329CRV (32" 4K): about 156-159k.
- No DA price was found for the Dell U2723QE or the LG 27UP850.

### Cited Findings

| Monitor | Price (DA) | Seller | Status | Source |
|---|---|---|---|---|
| ASUS ProArt PA278CV 27" 1440p IPS | 67,900 | NextGen | | [NextGen](https://nextgendz.com/product-detail.php?id=1103) |
| ASUS ProArt PA278CV | 68,000 | Geekzone | | [Geekzone](https://www.geekzonedz.com/moniteurs/3020-asus-27-led-proart-pa278cv.html) |
| ASUS ProArt PA279CV 27" 4K IPS | 116,900 | Lahlou | in stock, 14 Oct 2026 | [Lahlou](https://lahlou-industrie.com/products/ecran-asus-27-proart-pa279cv-4k-uhd-2160p-ips) |
| ASUS ProArt PA279CRV 27" 4K IPS | 117,900 | NextGen | | [NextGen](https://nextgendz.com/product-detail.php?id=1104) |
| ASUS ProArt PA279CRV | 123,000 | Campus | OUT | [Campus](https://campusinformatique.com/shop/ecran-asus-proart-pa279crv-27-ips-4k-uhd-hdr-pivot/) |
| ASUS ProArt PA279CRV | 136,000 | Geekzone | | [Geekzone](https://www.geekzonedz.com/moniteurs/3021-asus-27-led-proart-pa279crv.html) |
| ASUS ProArt PA329CRV 32" 4K IPS | 155,900 (NextGen); 159,000 (Lahlou, in stock) | | | [NextGen](https://nextgendz.com/product-detail.php?id=1105); [Lahlou](https://lahlou-industrie.com/products/ecran-asus-32-proart-pa329crv-4k-uhd-ips) |
| LG 27UP550N-W 27" 4K IPS (closest LG; not the 27UP850) | 76,990 (cash on delivery) | Ouedkniss, Oran | undated | [Ouedkniss "ecran lg 27"](https://www.ouedkniss.com/informatique/1?keywords=ecran-lg-27) |
| Matos StudioArt SA01 27" 4K IPS HDR400 (budget alternative) | 66,000 | Campus | OUT | [Campus](https://campusinformatique.com/shop/ecran-matos-studioart-sa01-27-ips-4k-hdr400-ajustable/) |

- **Dell U2723QE:** no Algerian listing found. It is 799 EUR on Dell France, currently unavailable there. [Dell FR](https://www.dell.com/fr-fr/shop/%C3%A9cran-4k-dell-ultrasharp-27-avec-hub-usb-c-u2723qe/apd/210-bcxk/moniteurs-et-accessoires-de-moniteur); [LCD-Compare](https://www.lcd-compare.com/moniteur-DELU2723QE-DELL-U2723QE.htm)
- **LG 27UP850:** no Ouedkniss or shop listing found.

### Inferences
- **Monitor price ranges (new):**
  - 27" 1440p ProArt: about 68k.
  - 27" 4K ProArt: low 116.9k, typical about 118-123k, high 136k.

### Gaps
- No used monitor prices were found.
- No DA prices for the Dell U2723QE or the LG 27UP850.

---

## Q7. Comparison with France: used GPU prices (EUR), parallel exchange rate, customs

### Takeaway
- **Used leboncoin asking prices in France:**
  - RTX 3090: about 650-1,050 EUR.
  - RTX 4070 Ti Super: about 400-1,000 EUR, typically 630-800 EUR.
  - RTX 4080 Super: about 1,000-1,200 EUR.
  - RTX 5070 Ti: about 950-1,050 EUR.
- **Converted at the parallel rate (about 276 DA/EUR):**
  - RTX 3090: about 180-290k DA, mostly **at or above** the Ouedkniss used price (190-218k).
  - RTX 5070 Ti, used in France: about 262-290k DA, close to **new** Algerian shop prices (295-330k).
- **Customs:** the traveler allowance is 150,000 DA (some older official pages say 50,000 DA). Official customs pages say computer equipment for personal use is exempt from the flat-rate tax, but there is no GPU-specific rule.

### Cited Findings

**France, used asking prices (leboncoin; eBay.fr returned HTTP 403):**

| GPU | EUR asking prices seen | ≈ DA at 276 | Source |
|---|---|---|---|
| RTX 3090 | 650 (EVGA FTW3 Ultra); 900 (Founders Edition); 1,050 (Gigabyte); 1,399 (ASUS Strix, watercooled). Listings at 1 EUR and 385 EUR look like bait. | 179k-290k (386k watercooled) | [leboncoin rtx-3090](https://www.leboncoin.fr/ck/accessoires_informatique/rtx-3090) (via search snapshot) |
| RTX 4070 Ti Super | 400 (ASUS Dual); 500; 630 (2X OC); 800-1,000 (MSI Gaming X Slim White); 44 listings on the category page | 110k-276k; typical 174-221k | [leboncoin rtx-4070-ti-super](https://www.leboncoin.fr/ck/accessoires_informatique/rtx-4070-ti-super) |
| RTX 4080 Super | 1,000 (MSI Suprim X); 1,200 (ASUS ProArt OC). eBay.de: ASUS ProArt used at 645 EUR, a single listing. | 276k-331k | [leboncoin search](https://www.leboncoin.fr/ck/ordinateurs/carte-graphique-nvidia-rtx); [eBay.de](https://www.ebay.de/p/12065718369) |
| RTX 5070 Ti | 990 (MSI Ventus 3X, Brioude, posted early Oct 2026); 1,000 (Gigabyte Eagle OC Ice); 950 (ASUS Prime "comme neuve"); 1,050 (Gigabyte SFF, sold). New/sealed units listed at 650-950. | 262k-290k | [leboncoin ad 3281110598](https://www.leboncoin.fr/ad/accessoires_informatique/3281110598); [leboncoin rtx-ti-oc](https://www.leboncoin.fr/ck/ordinateurs/rtx-ti-oc) |

- **Parallel ("square") rate, Square Port-Saïd, Algiers, 11 Oct 2026:** 100 EUR sells for 27,600 DA (276 DA/EUR) and buys for 27,350 DA (273.5 DA/EUR); the rate is described as stable. [ObservAlgérie, 11 Oct 2026](https://observalgerie.com/2026/10/11/economie/algerie-leuro-marque-une-pause-sur-le-marche-noir-a-combien-sechange-t-il); [Maghreb Emergent](https://maghrebemergent.news/fr/marche-noir-en-algerie-leuro-marque-une-pause-a-27-600-dinars/)
  - Aggregator sites show slightly different rates: about 275-277 and 274.3-276.3. [devisesalgerie.com](https://devisesalgerie.com/); [squarealger.com](https://squarealger.com/euro-to-dzd-marche-noir-aujourd-hui)
- **Official rate:** about 150.92 DA/EUR (Banque d'Algérie, 8 Oct 2026). [ObservAlgérie](https://observalgerie.com/2026/10/11/economie/algerie-leuro-marque-une-pause-sur-le-marche-noir-a-combien-sechange-t-il)
- **Customs (DGD):**
  - Personal or family items valued under 150,000 DA are exempt.
  - "Téléphones portables et matériels informatiques destinés à l'usage personnel ou familial" are exempt from the flat-rate tax.
  - Commercial-character goods are excluded from the allowance.
  - Above the allowance, a 30% flat tax applies to the excess value.
  - Sources: [douane.gov.dz article 553](https://www.douane.gov.dz/spip.php?article553=) (the page returned HTTP 503 on direct fetch, so this is from the search snapshot); [algerie360](https://www.algerie360.com/douane-algerie-voyageurs-devises-bijoux-franchise/); [algeriaexpats](https://www.algeriaexpats.com/douane-algerie-voyageurs/)
- **The allowance figure conflicts between official pages:** 50,000 DA on the "Vous arrivez en Algérie" page versus 150,000 DA on the summer-season leaflet. [ulysse.com guide 2026](https://ulysse.com/news/douane-algerie-2026-guide-diaspora-devises-vehicules-bagages)
- **The only GPU-specific evidence is a 2009 forum post** reporting that a traveler brought a graphics card in without trouble. It is anecdotal and stale. [forumdz](https://www.forumdz.com/topic/14200-informatique-perso-%C3%A0-la-douane-alg%C3%A9rienne/)

### Inferences
- **Buying used in France and carrying it in is not cheaper for the RTX 3090 or RTX 4070 Ti Super.** At about 276 DA/EUR, French used prices match or exceed Ouedkniss, and the buyer also takes on transport and customs risk.
- **For the RTX 5070 Ti, a French used card (about 262-290k DA) costs about 10-15% less than new in Algeria (295-330k)**, but comes without a local warranty. A new French retail card, if bought at or below about 900 EUR, could also undercut Algerian prices. French new retail prices were not verified here.
- **One GPU in personal luggage is likely covered by the personal-use exemption.** Any card bought abroad (about 260k+ DA) exceeds the 150k allowance. Several boxed or new items could be treated as commercial, which would trigger the 30% flat tax on the excess.
  - This is an interpretation, not an official ruling. The traveler should keep receipts and avoid carrying multiple sealed units.

### Gaps
- No eBay.fr sold-price data (HTTP 403).
- Leboncoin pages could not be fetched directly (HTTP 403); prices come from search-engine snapshots, mostly undated. Only the 5070 Ti ad 3281110598 is dated (early Oct 2026).
- No leboncoin data for RTX 3080, 3080 Ti or 4090.
- No official DGD rule on graphics cards or component quantities; the official customs page was unavailable (HTTP 503) during this research.

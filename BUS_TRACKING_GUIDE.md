# Bus Tracker — Setup Guide

> **Page:** `https://careerday.tvz.hr/bus-tracking`
> **Buses:** 2 (Linija 1 + Linija 2), running 10:00–17:00 on event day
> **Cost:** Free (7-day Traccar trial — cancel within 7 days)
> **Backend needed:** None — static Astro page

---

## Routes

| Line | Route | Color |
|---|---|---|
| Linija 1 | TVZ ELO ODJEL (Konavoska ulica 2) ↔ Stanica Vrbik ↔ TVZ GRO ODJEL (Avenija Večeslava Holjevca 15) | Yellow `#EAC31B` |
| Linija 2 | Kampus Borongaj (Borongajska cesta 83E) ↔ Stanica Vrbik (Josipa Marohnića 1) ↔ TVZ ELO ODJEL (Konavoska ulica 2) | Blue `#4A9EE0` |

---

## PHASE 1 — Set Up Traccar Hosted Server

### 1.1 Sign up for the free trial
1. Go to https://www.traccar.org/product/tracking-server/
2. Select **2 devices** from the dropdown
3. Click **"Try FREE for 7 days"**
4. Fill in your details and payment card *(won't be charged if cancelled within 7 days)*
5. After signup you'll receive your server address:
   ```
   https://YOURNAME.traccar.cloud
   ```

### 1.2 Log into your Traccar dashboard
1. Go to `https://YOURNAME.traccar.cloud`
2. Log in with your credentials

### 1.3 Add both buses as devices
Repeat for each bus:

1. Click the **"+"** button in the top left panel
2. **Bus 1 (Linija 1):**
   - Name: `Linija 1`
   - Identifier: `bus001`
3. **Bus 2 (Linija 2):**
   - Name: `Linija 2`
   - Identifier: `bus002`
4. Note the **Device ID numbers** (usually `1` and `2`)

### 1.4 Get your API token
1. Click your username/avatar in the top right corner
2. Go to **Account** or **Profile settings**
3. Find **API Token** section
4. Click **Generate**
5. Copy and save the token — looks like:
   ```
   a3f8c2d1e9b74056...
   ```
   One token covers both devices.

---

## PHASE 2 — Set Up the Drivers' Phones

### 2.1 Install Traccar Client
- **Android:** Search `Traccar Client` on Google Play Store
- **iPhone:** Search `Traccar Client` on App Store

### 2.2 Configure each phone

**Bus 1 driver's phone:**
1. Open app → gear icon (settings)
2. Fill in:
   - **Device identifier:** `bus001`
   - **Server URL:** `https://YOURNAME.traccar.cloud`
   - **Frequency:** `10` seconds
3. Toggle **Start**

**Bus 2 driver's phone:**
1. Same steps, but:
   - **Device identifier:** `bus002`

### 2.3 Verify it's working
Open your Traccar dashboard — you should see green dots for both devices on the map.

---

## PHASE 3 — Configure Environment Variables

### 3.1 Create `.env` file locally

At the project root, create `.env` (already gitignored):

```
PUBLIC_TRACCAR_URL=https://YOURNAME.traccar.cloud
PUBLIC_TRACCAR_TOKEN=your_api_token_here
PUBLIC_TRACCAR_DEVICE_ID_1=1
PUBLIC_TRACCAR_DEVICE_ID_2=2
```

### 3.2 Add variables to Vercel

1. Go to your Vercel project dashboard
2. **Settings → Environment Variables**
3. Add all four variables:
   - `PUBLIC_TRACCAR_URL`
   - `PUBLIC_TRACCAR_TOKEN`
   - `PUBLIC_TRACCAR_DEVICE_ID_1`
   - `PUBLIC_TRACCAR_DEVICE_ID_2`
4. Redeploy the project

The page at `/bus-tracking` will now fetch live positions from Traccar.

---

## PHASE 4 — Test Before the Event

Do this **the day before:**

- [ ] Open `https://careerday.tvz.hr/bus-tracking` in browser
- [ ] Both drivers turn on Traccar Client
- [ ] Walk around outside — watch both markers move on the map
- [ ] Test on a mobile phone
- [ ] Confirm both status chips show speed and timestamp (not "Bus kreće u 10:00")
- [ ] Share link with a friend to confirm it works externally

---

## PHASE 5 — On Event Day

1. Both drivers open **Traccar Client** → tap **Start** before 10:00
2. Share the link:
   - It's already linked from the main page BusSchedule section
   - Print QR codes for bus stops → generate at [qr-code-generator.com](https://www.qr-code-generator.com)
3. Both drivers tap **Stop** at end of day (after 17:00)

---

## PHASE 6 — Cancel the Trial ⚠️

**Do this within 7 days to avoid being charged:**

1. Log into your Traccar account
2. Go to billing/subscription settings
3. Cancel the subscription ✅

---

## Full Timeline

| When | What to do |
|---|---|
| Today | Sign up for Traccar trial, add 2 devices, get API token |
| Today | Add env vars to `.env` and Vercel dashboard, redeploy |
| Day before event | Full test with both drivers' phones |
| Event day 09:45 | Both drivers start the Traccar app |
| Event day 17:00 | Both drivers stop the app |
| Within 7 days | ⚠️ Cancel Traccar trial |

---

## Tech Stack

| Part | Tool | Cost |
|---|---|---|
| GPS tracking server | Traccar Cloud (trial) | Free |
| GPS source | Driver's phone + Traccar Client app | Free |
| Map display | Leaflet.js + CartoDB Dark Matter tiles | Free |
| Hosting | Vercel (existing) | Free |
| Backend | None | — |

---

## Stop Coordinates (hardcoded in page)

| Stop | Line | Lat | Lng |
|---|---|---|---|
| TVZ ELO ODJEL — Konavoska ulica 2 | 1 & 2 | 45.8068 | 15.9371 |
| Vrbik TO Dvorana Kornati | 1 | 45.8018 | 15.9994 |
| Vrbik DRUGI SMJER | 1 | 45.8009 | 15.9988 |
| TVZ GRO ODJEL — Holjevca 15 | 1 | 45.7903 | 16.0252 |
| Kampus Borongaj — Borongajska cesta 83E | 2 | 45.8197 | 16.0591 |
| Vrbik — Josipa Marohnića 1 | 2 | 45.8010 | 16.0028 |

To adjust coordinates, edit `src/pages/bus-tracking.astro` — the `line1Stops`, `line2Stops`, `line1Route`, and `line2Route` arrays at the top of the `<script define:vars>` block.

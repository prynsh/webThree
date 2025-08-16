# NFT Gallery

This project implements a simple NFT gallery grid with hover interactions.  
The focus was on **modularity** and **reusability**, so each piece of UI is built as a separate component that can be reused later.
I haven't made it responsive and used the Image for the bottom grid as it is not interactive or has animations. If told, it can built very easily using the base from RetroGrid from MagicUI.

---

## Approach

### 1. Component-First Design
- Created a reusable **`NFTCard`** component that:
  - Displays an NFT image.
  - Animates on hover (image zoom-in, border highlight, bottom action bar).
  - Keeps logic isolated so the same card can be reused anywhere else.

- Built an **`NFTGallery`** container that:
  - Loops over data (`galleryData`) and splits items into rows of 4.
  - Adds a **separator line** between rows for visual grouping.
  - Handles layout (`grid` system with Tailwind).

### 2. Styling & Hover Effects
- Used **Tailwind CSS utility classes** for fast styling.
- Added transitions for smooth hover animations:


### 3. Reusability
- The `NFTCard` is self-contained:
  - Can be used in this gallery or in future pages (e.g., detail view, featured carousel).
  - Supports fallback icons if images fail to load.

- The `NFTGallery`:
  - Uses simple data mapping, easy to replace with API data later.
  - Grid structure is reusable for any collection of items (not just NFTs).

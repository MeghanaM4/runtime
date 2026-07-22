# src/assets/

Drop real media here once you've recorded it — screen recordings for the
`<div class="gif-slot">` placeholders in `content/guide/*.md`, and any
logo/image files (e.g. the Hack Club + Runtime silkscreen art mentioned
in step 4).

A couple of suggested subfolders as you fill this in:

```
assets/
├── gifs/       step1-kicad-install.gif, step3-global-labels.gif, ...
└── logos/      hackclub-logo.png, runtime-logo.png, ...
```

## Wiring a GIF into a placeholder

Astro's built-in image optimization (`astro:assets`) is meant for
static formats (png/jpg/webp) that it can resize/compress at build
time — it does **not** preserve animation on GIFs. For animated GIFs,
skip the `assets/` import pipeline and instead drop the file straight
in `public/gifs/` (create that folder if it doesn't exist), then
reference it with a plain path:

```md
<div class="gif-slot">
  <img src="/gifs/step1-kicad-install.gif" alt="Installing KiCAD" />
</div>
```

For static screenshots/logos that *should* get Astro's optimization
(the silkscreen logo files, for instance), keep those here in
`src/assets/` and import them normally in whichever `.astro` file
needs them:

```astro
---
import runtimeLogo from '../assets/logos/runtime-logo.png';
import { Image } from 'astro:assets';
---
<Image src={runtimeLogo} alt="Runtime logo" />
```

# NVIDIA GPU performance for Blender Cycles and motion graphics, ranked against an RTX 3060 Ti

Research date: 2026-10-14. All Blender Open Data numbers were pulled live from opendata.blender.org on 2026-10-14 through the site's own query endpoint. NVIDIA rows are OptiX only (CUDA results excluded), and AMD rows are HIP.

## 1. What are the Blender Open Data median scores, and how much faster is each card than the 3060 Ti?

### Takeaway
Blender **4.5.0** is the best version to rank on. It has by far the most submissions (45,367 benchmarks in total, against 9,720 for 5.2.0 and 11,639 for 5.1.1), and every card on the list has at least 90 runs, most of them 200 or more. On 4.5.0, the 3060 Ti scores **2,764.5**. The RTX 3090 roughly doubles it (+96%), the 4070 Ti Super scores +157%, the 5070 Ti +175%, the 4080 Super +204%, the 4090 +300% and the 5090 +441%. The newer 5.1.1 and 5.2.0 data shows the same ranking, with the Blackwell and Ada cards pulling slightly further ahead.

### Cited Findings

**How submissions spread across Blender versions** (from the Open Data group-by-version query): 4.2.0 30,554 · 4.3.0 28,162 · 4.4.0 27,628 · **4.5.0 45,367** · 5.0.0 2,033 · 5.1.0 4,828 · 5.1.1 11,639 · 5.2.0 9,720 — [Blender Open Data query](https://opendata.blender.org/benchmarks/query/?group_by=blender_version&response_type=datatables)

**Blender 4.5.0 median scores** (OptiX for NVIDIA, HIP for AMD). n is the number of benchmark runs. Speedup is computed against the 3060 Ti's 2,764.5. Source: [Open Data query for 4.5.0](https://opendata.blender.org/benchmarks/query/?compute_type=OPTIX&compute_type=HIP&group_by=device_name&blender_version=4.5.0)

| GPU (Open Data device name) | Median score 4.5.0 | n | vs 3060 Ti |
|---|---|---|---|
| RTX 3060 Ti | 2,764.5 | 232 | baseline |
| RTX 3070 | 3,190.1 | 312 | +15% |
| RTX 3080 | 4,529.2 | 579 | +64% |
| RTX 3080 Ti | 5,319.3 | 208 | +92% |
| RTX 3090 | 5,411.7 | 629 | +96% |
| RTX 3090 Ti | 5,552.8 | 139 | +101% |
| RTX 4060 Ti (8 GB and 16 GB pooled) | 3,940.8 | 332 | +43% |
| RTX 4070 | 5,219.0 | 262 | +89% |
| RTX 4070 SUPER | 6,247.0 | 464 | +126% |
| RTX 4070 Ti | 6,369.3 | 156 | +130% |
| RTX 4070 Ti SUPER | 7,116.1 | 253 | +157% |
| RTX 4080 | 8,388.1 | 219 | +203% |
| RTX 4080 SUPER | 8,414.3 | 238 | +204% |
| RTX 4090 | 11,062.1 | 526 | +300% |
| RTX 5060 Ti (8 GB and 16 GB pooled) | 4,309.3 | 655 | +56% |
| RTX 5070 | 6,173.5 | 914 | +123% |
| RTX 5070 Ti | 7,589.0 | 1,415 | +175% |
| RTX 5080 | 9,138.2 | 1,431 | +231% |
| RTX 5090 | 14,966.0 | 1,553 | +441% |
| AMD RX 7900 XTX (HIP) | 4,328.7 | 223 | +57% |
| AMD RX 7900 XT (HIP) | 3,606.9 | 120 | +30% |
| AMD RX 9070 XT (HIP) | 3,279.2 | 676 | +19% |
| AMD RX 9070 (HIP) | 2,840.5 | 90 | +3% |

**Cross-check against newer Blender versions** (smaller samples). Format: median score (n, speedup vs 3060 Ti). Sources: [5.1.1 query](https://opendata.blender.org/benchmarks/query/?compute_type=OPTIX&compute_type=HIP&group_by=device_name&blender_version=5.1.1); [5.2.0 query](https://opendata.blender.org/benchmarks/query/?compute_type=OPTIX&compute_type=HIP&group_by=device_name&blender_version=5.2.0)

| GPU | 5.1.1 | 5.2.0 |
|---|---|---|
| RTX 3060 Ti | 2,641.5 (n=53, baseline) | 2,594.8 (n=58, baseline) |
| RTX 3070 | 3,083.8 (73, +17%) | 2,955.4 (73, +14%) |
| RTX 3080 | 4,379.1 (140, +66%) | 4,178.2 (74, +61%) |
| RTX 3080 Ti | 5,073.4 (69, +92%) | 4,919.0 (53, +90%) |
| RTX 3090 | 5,237.0 (80, +98%) | 5,087.1 (90, +96%) |
| RTX 3090 Ti | 5,472.1 (12, +107%) | 5,260.8 (14, +103%) |
| RTX 4060 Ti | 3,829.4 (67, +45%) | 3,803.5 (58, +47%) |
| RTX 4070 | 5,265.7 (82, +99%) | 5,126.7 (30, +98%) |
| RTX 4070 SUPER | 6,188.7 (125, +134%) | 5,937.0 (92, +129%) |
| RTX 4070 Ti | 6,530.6 (49, +147%) | 6,281.0 (19, +142%) |
| RTX 4070 Ti SUPER | 7,070.6 (63, +168%) | 6,992.0 (32, +169%) |
| RTX 4080 | 8,485.3 (50, +221%) | 8,284.6 (59, +219%) |
| RTX 4080 SUPER | 8,366.7 (46, +217%) | 8,075.3 (33, +211%) |
| RTX 4090 | 11,674.6 (132, +342%) | 11,575.6 (77, +346%) |
| RTX 5060 Ti | 4,325.5 (166, +64%) | 4,117.0 (202, +59%) |
| RTX 5070 | 5,966.9 (260, +126%) | 5,783.6 (152, +123%) |
| RTX 5070 Ti | 7,814.2 (402, +196%) | 7,704.5 (205, +197%) |
| RTX 5080 | 9,289.5 (380, +252%) | 9,129.5 (326, +252%) |
| RTX 5090 | 16,313.0 (235, +518%) | 16,099.2 (157, +520%) |
| RX 7900 XTX (HIP) | 4,908.8 (124, +86%) | 5,004.8 (61, +93%) |
| RX 9070 XT (HIP) | 3,559.7 (198, +35%) | 3,382.9 (352, +30%) |

- Blender 4.4.0 (n is also large) gives nearly identical ratios: 3060 Ti 2,720.1; 3090 5,330.3 (+96%); 4070 Ti SUPER 7,123.4 (+162%); 4080 SUPER 8,440.8 (+210%); 5070 Ti 7,603.3 (+180%); 4090 11,123.8 (+309%); 5090 15,082.0 (+454%) — [4.4.0 query](https://opendata.blender.org/benchmarks/query/?compute_type=OPTIX&compute_type=HIP&group_by=device_name&blender_version=4.4.0)
- Open Data gives the 4060 Ti and the 5060 Ti one device name each ("NVIDIA GeForce RTX 4060 Ti", "NVIDIA GeForce RTX 5060 Ti"). It does not separate the 8 GB and 16 GB models, so the "16 GB" scores asked for cannot be isolated. The only VRAM-suffixed names on the site are a few AMD entries such as "RX 6750 GRE 10GB/12GB" — [4.5.0 query](https://opendata.blender.org/benchmarks/query/?compute_type=OPTIX&compute_type=HIP&group_by=device_name&blender_version=4.5.0)
- Puget Systems (Blender 4.0 OptiX, January 2025) found the RTX 5080 about 7% faster than the 4080 SUPER. On Open Data 4.5.0, the 5080 leads the 4080 SUPER by about 8.6% (9,138 vs 8,414) — [Puget RTX 5080 review](https://www.pugetsystems.com/labs/articles/nvidia-geforce-rtx-5080-content-creation-review)

### Inferences
- **Rank by Cycles speed per card class (4.5.0):** 5090 ≫ 4090 > 5080 > 4080 SUPER ≈ 4080 > 5070 Ti > 4070 Ti SUPER > 4070 Ti ≈ 4070 SUPER ≈ 5070 > 3090 Ti ≈ 3090 ≈ 3080 Ti ≈ 4070 > 3080 > 7900 XTX ≈ 5060 Ti > 4060 Ti > 9070 XT > 3070 > 3060 Ti.
- A used RTX 3090 renders at about the speed of a new RTX 4070 (5,412 vs 5,219) and about 12% slower than a 5070 (6,174). Its advantage is the 24 GB of VRAM, not speed.
- The 5070 Ti (16 GB) is about 40% faster than a 3090 in Cycles (7,589 vs 5,412) and about 7% faster than the 4070 Ti SUPER. It is about 10% slower than the 4080 SUPER.
- AMD trails NVIDIA badly in Cycles. The RX 9070 XT (HIP) is only 3–35% faster than a 3060 Ti, depending on the Blender version, and the 7900 XTX lands around 3080 level. AMD is a poor choice for a Cycles-focused upgrade.
- The 3060 Ti's own score slips slightly in newer Blender versions (2,764 on 4.5, then 2,642, then 2,595), while the 40- and 50-series cards hold steady, so their percentage leads grow on 5.x. This may come from scene or kernel changes in the benchmark. Compare scores only within one version.

### Gaps
- Open Data has no separate scores for the 16 GB 4060 Ti or 5060 Ti. The 8 GB and 16 GB models probably perform about the same on these small benchmark scenes, but that is not verified.
- I did not pull per-scene breakdowns (monster, junkshop, classroom) because the query endpoint returned an error for that grouping.
- Open Data does not record whether AMD runs used HIP-RT, so the AMD numbers mix configurations.

## 2. How much does VRAM matter for Blender Cycles (8 GB vs 12/16/24 GB)?

### Takeaway
According to the official Blender manual, when GPU memory fills up, Cycles (CUDA, OptiX, HIP, Metal) automatically spills into system RAM. The render usually still finishes, faster than on the CPU, but with a performance hit. When the scene also exceeds the host-memory budget, the render fails with an out-of-memory error. Heavy texture, volumetric and particle work, such as underwater or ocean scenes, is where 8 GB becomes the limit. Vendor guidance puts 4K-texture production scenes at 12–16 GB and heavy displacement, volumetric and particle scenes at 24 GB or more.

### Cited Findings
- Blender manual: "Why does a scene that renders on the CPU not render on the GPU? … the most common one is that there is not enough memory on your graphics card… With CUDA, OptiX, HIP and Metal devices, if the GPU memory is full Blender will automatically try to use system memory. This has a performance impact, but will usually still result in a faster render than using CPU rendering." — [Blender Manual: GPU Rendering](https://docs.blender.org/manual/en/latest/render/cycles/gpu_rendering.html)
- Blender manual on the "Error: Out of memory" message: "This usually means there is not enough memory to store the scene for use by the GPU." The manual gives image-texture memory costs: **8K = 256 MB, 4K = 64 MB, 2K = 16 MB, 1K = 4 MB** — [Blender Manual: GPU Rendering](https://docs.blender.org/manual/en/latest/render/cycles/gpu_rendering.html)
- Blender manual: "each GPU can only access its own memory. The exception is NVIDIA GPUs connected with NVLink, where multiple GPUs can share memory at a small performance cost" (the "Distributed Memory Across Devices" preference) — [Blender Manual: GPU Rendering](https://docs.blender.org/manual/en/latest/render/cycles/gpu_rendering.html)
- Blender bug report T90440, "Error: System is out of GPU and shared host memory": the render fails once both GPU memory and the shared host memory are exhausted. The reported scene used 90 GB or more — [developer.blender.org T90440](https://developer.blender.org/T90440)
- An older bug report (Vega HBCC) says rendering a file larger than 8 GB of VRAM made Blender hang. A forum user with an 8 GB card said the out-of-core fallback "doesn't seem to work". Both are older Blender versions and anecdotal — [developer.blender.org T63378](https://developer.blender.org/T63378); [BlenderArtists](https://blenderartists.org/t/how-much-does-the-gpu-memory-limit-matter-in-2-9/1252532)
- iRender (a vendor of cloud render farms, June 2026) gives these tiers: basic scenes 4–8 GB; production scenes with 4K textures and complex geometry 12–16 GB; heavy scenes with displacement, volumetrics and dense particle systems 24 GB or more. By scene type: product shot 4–6 GB, interior 8–12 GB, exterior with vegetation 12–18 GB, VFX 16–24 GB, dense city or forest 24–48 GB. Its rule of thumb is that 20 or more 4K textures plus geometry suggests needing more than 12 GB. The same article cites a 2–5× slowdown for out-of-core rendering in Redshift, Octane and V-Ray GPU, but gives no figure for Cycles — [iRender VRAM guide 2026](https://irendering.net/how-much-vram-do-you-need-for-3d-rendering-a-practical-guide-2026/)
- Ways to reduce VRAM use: the Simplify panel's Texture Limit, lower subdivision render levels, and checking the peak memory Cycles reports during a render. Reused add-on node groups were found to inflate memory in one case — [iRender CUDA OOM article](https://irendering.net/cuda-out-of-memory-in-blender-how-to-render-heavy-scenes-without-crashing/); [evetech](https://evezone.evetech.co.za/quick-bytes/how-to-fix-out-of-vram-errors-when-rendering-a-scene-in-blender)

### Inferences
- The 3060 Ti's 8 GB is the most likely failure point for heavy ocean or underwater scenes: volumetric scattering, high-resolution ocean displacement, particle or foam caches, 4K and 8K PBR textures, and geometry-nodes scattering of plants, rocks and fish. Those scenes would hit the slow system-RAM fallback or fail outright. The other 8 GB cards (3070, 4060 Ti 8 GB, 5060 Ti 8 GB) have the same ceiling, and the 10 GB 3080 is only slightly better.
- 16 GB (4070 Ti SUPER, 4080/4080 SUPER, 5070 Ti, 5080, 4060 Ti 16 GB, 5060 Ti 16 GB) should fit most single-artist YouTube-scale scenes. 24 GB (3090, 3090 Ti, 4090) and 32 GB (5090) give the most headroom for dense volumetrics and big simulations.
- Since the fallback to system RAM works, the 13700K system's RAM amount also matters. 64 GB of system RAM makes overflow rendering more survivable than 32 GB. This is my inference from the manual's description.
- The RTX 3090 is the only card in this list with NVLink, so two 3090s could pool memory under Cycles' Distributed Memory option. This comes from general knowledge plus the manual's NVLink note, and is not separately verified here.

### Gaps
- I found no measured VRAM usage for "Into the Blue"-style ocean or underwater scenes, and no creator-published memory figures for that channel.
- I found no controlled benchmark of how much slower Cycles gets when it spills into host memory (no percentage figures).
- I found no current (2026) side-by-side test of 8 GB vs 16 GB on the same GPU in Cycles, for example 4060 Ti 8 GB vs 16 GB.

## 3. Does the GPU matter for After Effects, Premiere Pro and DaVinci Resolve? What do Puget Systems benchmarks show?

### Takeaway
In After Effects, the GPU barely matters for 2D and tracking work, which is CPU-bound. It matters for GPU-accelerated 3D work. In Premiere Pro, GPU effects scale modestly, and the biggest practical gain from the 50 series is hardware decode of 10-bit 4:2:2 H.264/HEVC footage. DaVinci Resolve scales most with the GPU: GPU effects, AI tools, and LongGOP 4:2:2 decode on the 50 series. Element 3D is GPU-only (OpenGL), so a faster GPU directly speeds it up.

### Cited Findings
- **Puget RTX 5080 review (January 29, 2025).** Tested on a Ryzen 9 9950X with Premiere Pro 25.1, After Effects 25.2 beta, Resolve 19.1, Blender 4.0 and V-Ray 6.
  - **After Effects:** overall +9% vs the 4080 SUPER and +14% vs the 3080 Ti. The 2D and Tracking scores were "essentially identical" across the 5080, 4080 SUPER and 3080 Ti (CPU-bound). The 3D score was +24% vs the 4080 SUPER and +44% vs the 3080 Ti.
  - **Premiere Pro:** LongGOP +5% vs the 4080 SUPER and +19% vs the 3080 Ti; Intraframe showed no advantage; RAW +20% vs the 3080 Ti; GPU Effects +7% vs the 4080 SUPER and +40% vs the 3080 Ti.
  - **Resolve:** overall +10% vs the 4080 SUPER (tying the 4090) and +21% vs the 3080 Ti; LongGOP (H.265 4:2:2 10-bit) +34% vs the 4080 SUPER and +86% vs the 3080 Ti; GPU Effects +21% and +33%; AI tied the 4080 SUPER and was +23% vs the 3080 Ti; RAW and Fusion showed little difference.
  - **Overall:** for video editing and motion graphics the 5080 was about 5–10% faster than the 4080 SUPER and about 20–30% faster than the 3080 Ti. For rendering it was about 10–20% faster than the 4080 SUPER and 55–188% faster than the 3080 Ti.
  - [Puget RTX 5080 review](https://www.pugetsystems.com/labs/articles/nvidia-geforce-rtx-5080-content-creation-review)
- **Puget RTX 5090 review (January 23, 2025), as reported by TechRadar:** Premiere Pro about 9% faster than the 4090. Resolve Studio +17% vs the 4090 and +35% vs the 3090 Ti (using a pre-release Resolve build for the 5090). After Effects 3D +35% vs the 4090 — [Puget RTX 5090 review](https://www.pugetsystems.com/labs/articles/nvidia-geforce-rtx-5090-content-creation-review/); [TechRadar summary](https://www.techradar.com/pro/usd2000-nvidia-geforce-rtx-5090-gets-tested-on-creative-software-and-ai-and-obliterates-absolutely-everything-in-its-path)
- **Puget on 50-series decoding:** Puget verified hardware decode of H.264 8/10-bit 4:2:2 and HEVC 8/10/12-bit 4:2:2 on the 50 series. Its April 2025 article says editors on the RTX 30 series or older, or anyone working with 10-bit 4:2:2 LongGOP footage, should consider upgrading, because the 50 series is the only lineup with hardware decode and encode for those formats — [Puget: Verifying RTX 50 series performance](https://www.pugetsystems.com/labs/articles/verifying-nvidia-geforce-rtx-50-series-performance/)
- **Media engines:** the 5070 Ti has 2× ninth-generation NVENC, while the 5070 has 1× ninth-generation NVENC. Both support AV1 encode and decode — [NVIDIA RTX 5070 family](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5070-family/). The 4080 and 4080 SUPER have 2× eighth-generation NVENC — [NVIDIA RTX 4080 family](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4080-family/)
- ProVideo Coalition and PostFlow (secondary sources) say the 5070 Ti matches the 5080 for LongGOP editing because they share the same media engines, and that Puget recommends 16 GB of VRAM rather than 8 GB — [ProVideo Coalition](https://www.provideocoalition.com/nvidia-rtx-5080-best-bang-for-the-buck-for-davinci-resolve/amp/); [The PostFlow](https://thepostflow.com/?p=7853)
- **Element 3D (Video Copilot):** it is GPU-based and uses "fast Open GL rendering instead of per-pixel raytracing". Only one GPU is used for rendering, and there is no multi-GPU or network rendering. The old minimum was 512 MB of VRAM, with 1 GB or more recommended — [Video Copilot: Technical details about E3D v2](https://www.videocopilot.net/blog/2014/10/technical-details-about-e3d-v2); [B&H listing](https://www.bhphotovideo.com/c/product/892486-REG/video_copilot_e3d_element_3d.html)

### Inferences
- For After Effects 2.5D work (shape and text layers, 2D compositing, tracking), upgrading from a 3060 Ti will barely change render times. The CPU (13700K) and RAM matter more. The AE "3D" scores, from the Advanced 3D renderer, and Element 3D do benefit from a faster GPU.
- The Cinema 4D Renderer inside After Effects is CPU-based, which is general knowledge and not verified in this research, so the GPU won't speed it up.
- Footage from cameras that record 10-bit 4:2:2 H.264/HEVC (many mirrorless cameras) gets the biggest practical NLE gain from any RTX 50-series card. A 5070 Ti gets the same decode benefit as a 5080. The 3090 and 40-series cards lack 4:2:2 hardware decode.
- The 3060 Ti already has 7th-generation NVENC (H.264/HEVC) but no AV1 encode, which arrived with the 40 series. Any 40- or 50-series card adds AV1 encode for YouTube uploads. This is general knowledge, not separately cited here.

### Gaps
- Puget's articles are from January–April 2025. I did not find a newer (2026) Puget roundup with updated Premiere and Resolve versions, or one that includes the 3060 Ti, 3090 or 5070 Ti directly.
- I found no Puget data specific to Element 3D, and no current Video Copilot GPU requirements.
- I did not verify that the AE Cinema 4D renderer is CPU-only from a primary Adobe or Maxon source.

## 4. What is each card's power draw, what PSU suits an i7-13700K, and what about 12VHPWR/12V-2x6?

### Takeaway
NVIDIA's official figures (board power / required system power): 3090 350 W / 750 W; 3090 Ti 450 W / 850 W; 4070 Ti SUPER 285 W / 700 W; 4080 SUPER 320 W / 750 W; 5070 Ti 300 W / 750 W; 5070 250 W / 650 W; 5080 360 W board power; 5090 575 W board power. MSI's PSU table recommends 850 W for the 4080 SUPER and 4070 Ti SUPER with an i7- or i9-class CPU. The 12V-2x6 connector still produces melting reports, mostly on the 575 W 5090 and some 5080s.

### Cited Findings
- **RTX 3090:** 350 W graphics card power, 750 W required system power, 2× PCIe 8-pin (adapter to 1× 12-pin included on the Founders Edition), 24 GB GDDR6X. **RTX 3090 Ti:** 450 W, 850 W required, 3× 8-pin or a 450 W+ PCIe Gen 5 cable — [NVIDIA RTX 3090 family](https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3090-3090ti/)
- **RTX 5070 Ti:** 300 W TGP, 750 W required system power, 2× PCIe 8-pin (adapter) or a 300 W+ PCIe Gen 5 cable, 16 GB GDDR7. **RTX 5070:** 250 W, 650 W, 12 GB GDDR7 — [NVIDIA RTX 5070 family](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5070-family/)
- **RTX 4080 SUPER and 4080:** 320 W TGP, 750 W required system power, 3× PCIe 8-pin (adapter) or a 450 W+ PCIe Gen 5 cable, 16 GB GDDR6X — [NVIDIA RTX 4080 family](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4080-family/)
- **RTX 4070 Ti SUPER:** 285 W TGP; NVIDIA recommends a minimum 700 W system PSU (as reported by a retailer blog). MSI's table lists 750 W for i5/R5 systems and 850 W for i7/R7 and i9/R9 systems. Corsair recommends 850 W for headroom — [evetech](https://evezone.evetech.co.za/quick-bytes/can-a-750w-psu-handle-the-rtx-4070-ti-super-power-requirements-explained); [MSI PSU table](https://www.msi.com/blog/recommended-psu-table); [Corsair](https://corsair.com/explorer/diy-builder/power-supply-units/best-psu-for-rtx-4070ti-super)
- **RTX 4080 SUPER (MSI table):** 750 W for i5/R5, 850 W for i7/R7 and i9/R9, 1,250 W for HEDT — [MSI PSU table](https://www.msi.com/blog/recommended-psu-table)
- **Rated TDPs listed by Puget:** RTX 5080 360 W, RTX 5090 575 W, RTX 4080 SUPER 320 W, RTX 4090 450 W, RTX 3080 Ti 350 W, RX 7900 XTX 355 W — [Puget RTX 5080 review](https://www.pugetsystems.com/labs/articles/nvidia-geforce-rtx-5080-content-creation-review)
- **12V-2x6 melting reports:**
  - Heise reports that the connector's heat problems "do not appear to have been fully resolved" on RTX 5090s — [heise](https://heise.de/-10276861)
  - TweakTown reports a melted MSI RTX 5090 connector, where an ASRock TempGuard PSU failed to cut power — [TweakTown](https://www.tweaktown.com/news/112586/another-rtx-5090-power-connector-melted-and-even-asrock-tempguard-failed-to-save-this-one/index.html)
  - Reports exist of PNY denying a warranty claim because a non-approved cable was used — [The Outerhaven](https://www.theouterhaven.net/rtx-5090-power-connectors-are-melting-and-manufacturers-are-denying-warranty-claims/)
  - There are RTX 5080 cases, including one with damage only on the PSU-side cable — [HotHardware](https://hothardware.com/news/rtx5080-melting-connector); [Club386](https://www.club386.com/gpu-power-supply-woes-continue-even-with-specialist-cables/)
  - One widely reported "5080/5090 melted" case was later traced to an RTX 4090 — [Notebookcheck](https://www.notebookcheck.net/RTX-5080-and-RTX-5090-GPUs-blamed-for-melted-power-connector-but-an-RTX-4090-was-at-fault.955989.0.html)

### Inferences
- With an i7-13700K, whose turbo power limit is about 253 W (Intel spec, general knowledge and not cited here): a quality 750 W unit is NVIDIA's minimum for the 3090, 5070 Ti and 4080 SUPER, and 850 W gold or better is the comfortable recommendation for all of them. For a 3090 in particular, 850 W is prudent because Ampere has transient power spikes (general knowledge, not cited here). The 4070 Ti SUPER fits within 750 W, with 850 W for headroom. A 5090 needs about 1,000 W or more.
- Connector risk scales with current. The 5070 Ti (300 W) and 4070 Ti SUPER (285 W) put far less load on a 12V-2x6 connector than the 575 W 5090. Many 5070 Ti and 4070 Ti SUPER partner cards use the 16-pin connector, but some use 8-pin connectors. The 3090 (most partner cards use 2–3× 8-pin) avoids the issue entirely. Best practice: use a native ATX 3.x / PCIe 5.x cable from the PSU maker, seat it fully, and avoid sharp bends near the plug.

### Gaps
- I did not fetch NVIDIA's official required-system-power figures for the 5080 and 5090. They are commonly cited as 850 W and 1,000 W but are not verified here.
- I found no measured power draw (as opposed to rated TGP) during Cycles renders for these cards.
- I found no data on how often 12V-2x6 failures occur, only individual reports.

## 5. What are the risks of a used GPU (ex-mining 3090s, backside VRAM thermal pads), and how should one be tested?

### Takeaway
The RTX 3090 has GDDR6X modules on both sides of the PCB. The rear modules are cooled only through the backplate, and owners commonly report memory-junction temperatures of 100–110 °C under mining-type or memory-heavy loads. Before buying, check the memory junction temperature in HWiNFO under a sustained load such as a Blender render or an OCCT VRAM test. Sources disagree on the GDDR6X temperature limit (95 °C vs 105 °C), but anything persistently above 100 °C points to dried-out pads.

### Cited Findings
- The 3090 has VRAM modules on the front, with pads to the main heatsink, and on the back, where the backplate acts as the cooler. Pad contact varies by manufacturer — [EVGA forum: "Get that backside VRAM cool"](https://forums.evga.com/3090-Kingpin-others-Get-that-backside-VRAM-cool-m3219773.aspx)
- Reports of 3090 memory junction temperatures above 110 °C when mining. One owner still hit 108 °C after a hybrid kit and new rear pads. Owners report drops such as 110 °C → 88 °C after pad replacement, and about 8.9 °C from adding backplate heatsinks. Commonly cited pad thickness is 2 mm (anecdotal) — [Solent Renegades](https://solent-renegades.co.uk/threads/rtx-3090-high-gddr6x-ram-temperatures-of-110deg-c.42358/); [EVGA forum p19](https://forums.evga.com/3090-Kingpin-amp-others-Get-that-backside-VRAM-cool-m3219773-p19.aspx); [EVGA FTW3 Hybrid mining data](https://forums.evga.com/RTX-3090-EVGA-FTW3-HYBRID-MINING-AND-GAMING-DATA-m3394394.aspx)
- The GDDR6X temperature limit is disputed. A TechPowerUp forum post citing Micron says it is rated up to 105 °C and calls anything over 100 °C a longevity concern — [TechPowerUp forum](https://www.techpowerup.com/forums/goto/post?id=4704429). HWCooling's review methodology instead gives a GDDR6X Tj max of 95 °C, flags concern for long-term mining operation, and measured 74–84 °C in gaming load in a wind tunnel — [HWCooling](https://www.hwcooling.net/doplnene-zahrievanie-vram-a-dalsie-zmeny-v-testoch-grafik/)
- HWiNFO added memory-junction temperature readings for NVIDIA Ampere in version 6.42. The sensor may not reflect the single hottest spot. On Linux, no tool was found that reads it — [HWCooling](https://www.hwcooling.net/doplnene-zahrievanie-vram-a-dalsie-zmeny-v-testoch-grafik/); [HWiNFO forum](https://www.hwinfo.com/forum/threads/rtx-3080-3090-memory-vrm-temperature-sensor.6830/page-3)
- One 3090 owner's reference reading: memory at 78 °C with the GPU at 68 °C during a 6-hour Blender render (anecdotal) — [Igor's Lab community](https://www.igorslab.de/community/threads/auch-die-nvidia-geforce-rtx-3000-serie-besitzt-eine-hotspot-temperatur-erste-messungen-und-der-vergleich-mit-amd.4467/post-118886)

### Inferences
- **Suggested test protocol for a used card,** built from the sources above plus general practice:
  1. Check the card's identity and BIOS in GPU-Z, and compare it against the TechPowerUp database.
  2. Run the Blender Benchmark and compare the score with the 4.5.0 medians above (a 3090 should score about 5,400). A score more than 10% below suggests throttling or degradation.
  3. Run a 20–30 minute OCCT VRAM test, which should show zero errors, and a 3D load such as FurMark or OCCT 3D, while logging HWiNFO GPU temperature, hotspot, memory junction temperature, and fan speed.
  4. For a 3090, memory junction above about 100 °C, or a hotspot-to-core gap above about 20 °C, means it needs pad or paste work.
  5. Look for a yellowed or bent PCB, fan wobble, coil whine, and a modified BIOS (mining cards were often flashed).
  6. Ask for the remaining transferable warranty.
- **Ex-mining risk in context:** mining wears mostly fans and thermal pads, and memory heat stress on GDDR6X is the 3090-specific concern. Re-padding is a known, inexpensive fix, but it voids some warranties.
- A used 3090 trades the 24 GB of VRAM against more heat and power (350 W), its age (2020 launch), no 4:2:2 hardware decode, no AV1 encode, and Cycles speed about equal to a 4070.

### Gaps
- I found no sourced, step-by-step guide to OCCT VRAM test settings or to how many errors are acceptable. The protocol above is general practice, not from a cited source.
- I found no statistics on failure rates of ex-mining cards.
- I could not reach Micron's GDDR6X datasheet to settle whether the limit is 95 °C or 105 °C.

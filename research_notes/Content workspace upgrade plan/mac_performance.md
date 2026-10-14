# Apple Silicon MacBook Pro performance for Blender, After Effects, Premiere Pro and DaVinci Resolve (used secondary laptop for a 3D/2.5D explainer YouTuber)

Research date: 2026-10-14. Blender Open Data medians were pulled live from the opendata.blender.org query API on that date. Medians move as people submit new results, and small sample sizes (n) are noted.

## Q1. Blender Open Data median scores (Metal) for M1 Pro through M5 Max vs RTX 3060 Ti / RTX 3090 (OptiX)

### Takeaway
Comparing the same Blender version (5.1.1, a large recent sample), an M1 Max 32-core GPU gets about 38% of an RTX 3060 Ti. An M3 Max 40-core gets about 89% of an RTX 3090, an M4 Max 40-core about 113% of a 3090, and an M5 Max 40-core about 158% of a 3090 (roughly RTX 4080 level). The jump from M2 to M3, where hardware ray tracing arrived, is the biggest generational step. M1/M2-era Macs are far behind even a 3060 Ti in Cycles.

### Cited Findings
**Blender 5.1.1, Metal (Apple) vs OptiX (NVIDIA), median score, n = number of submitted runs** — [Blender Open Data query, 5.1.1](https://opendata.blender.org/benchmarks/query/?compute_type=METAL&compute_type=OPTIX&blender_version=5.1.1&group_by=device_name)

| Chip (GPU cores) | Median score | n | % of RTX 3060 Ti (2641.5) | % of RTX 3090 (5237.0) |
|---|---|---|---|---|
| M1 Pro (16) | 510.5 | 9 | 19% | 10% |
| M1 Max (24) | 831.6 | 9 | 31% | 16% |
| M1 Max (32) | 1002.7 | 23 | 38% | 19% |
| M2 Pro (16) | 711.1 | 1 | 27% | 14% |
| M2 Pro (19) | 886.6 | 2 | 34% | 17% |
| M2 Max (30) | 1400.5 | 2 | 53% | 27% |
| M2 Max (38) | 1769.7 | 6 | 67% | 34% |
| M3 Pro (14) | 1799.4 | 5 | 68% | 34% |
| M3 Pro (18) | 1952.0 | 7 | 74% | 37% |
| M3 Max (30) | 3726.3 | 10 | 141% | 71% |
| M3 Max (40) | 4658.4 | 10 | 176% | 89% |
| M4 Pro (16) | 2603.8 | 17 | 99% | 50% |
| M4 Pro (20) | 2980.4 | 18 | 113% | 57% |
| M4 Max (32) | 4859.5 | 7 | 184% | 93% |
| M4 Max (40) | 5908.9 | 30 | 224% | 113% |
| M5 (10, base chip) | 2084.4 | 51 | 79% | 40% |
| M5 Pro (16) | 3775.6 | 28 | 143% | 72% |
| M5 Pro (20) | 4352.0 | 47 | 165% | 83% |
| M5 Max (32) | 6506.1 | 25 | 246% | 124% |
| M5 Max (40) | 8251.0 | 106 | 312% | 158% |
| NVIDIA RTX 3060 Ti (OptiX) | 2641.5 | 53 | — | — |
| NVIDIA RTX 3090 (OptiX) | 5237.0 | 80 | — | — |
| NVIDIA RTX 4080 (OptiX) | 8485.3 | 50 | — | — |
| NVIDIA RTX 4090 (OptiX) | 11674.6 | 132 | — | — |
| NVIDIA RTX 5070 (OptiX) | 5966.9 | 260 | — | — |
| NVIDIA RTX 5080 (OptiX) | 9289.5 | 380 | — | — |

**Blender 4.5.0 (LTS, the largest per-device samples)** — [Blender Open Data query, 4.5.0](https://opendata.blender.org/benchmarks/query/?compute_type=METAL&compute_type=OPTIX&blender_version=4.5.0&group_by=device_name)
- M1 Pro 16c 483.4 (n=44); M1 Max 24c 794.0 (n=26); M1 Max 32c 955.5 (n=50); M2 Pro 16c 782.1 / 19c 902.0; M2 Max 30c 1464.3 / 38c 1798.0; M3 Pro 14c 1655.5 / 18c 1756.4; M3 Max 30c 3440.0 (n=29) / 40c 4263.1 (n=41); M4 Pro 16c 2373.0 (n=72) / 20c 2568.4 (n=123); M4 Max 32c 4452.3 (n=67) / 40c 5266.9 (n=124); M5 10c 1734.2; M5 Pro 16c 3161.9 (n=1) / 20c 3673.2 (n=3); M5 Max 32c 5738.2 (n=1) / 40c 7065.0 (n=4).
- NVIDIA OptiX on 4.5.0: RTX 3060 Ti 2764.5 (n=232); RTX 3090 5411.7 (n=629); RTX 3080 4529.2; RTX 4070 5219.0; RTX 4080 8388.1; RTX 4090 11062.1; RTX 5070 6173.5; RTX 5080 9138.2; RTX 5090 14966.0; RTX 4090 Laptop 6845.8; RTX 4080 Laptop 5420.7.
- For comparison, the same cards on CUDA instead of OptiX in 4.5.0: RTX 3060 Ti 1825.0 and RTX 3090 3798.0. OptiX is about 1.4-1.5x faster than CUDA on these cards. — [Blender Open Data, CUDA 4.5.0](https://opendata.blender.org/benchmarks/query/?compute_type=CUDA&blender_version=4.5.0&group_by=device_name)

**Blender 5.2.0 (newest version; smaller samples)** — [Blender Open Data query, 5.2.0](https://opendata.blender.org/benchmarks/query/?compute_type=METAL&compute_type=OPTIX&blender_version=5.2.0&group_by=device_name)
- M1 Max 32c 1083.0; M2 Max 38c 1740.4; M3 Pro 18c 1817.4; M3 Max 30c 3630.5 / 40c 4419.2; M4 Pro 16c 2570.5 / 20c 2894.6; M4 Max 32c 4881.1 (n=38) / 40c 5867.0; M5 Pro 16c 3637.5 / 20c 4232.9; M5 Max 32c 6461.9 / 40c 8156.3 (n=84); M5 Ultra 80c 15328.3 (n=5). RTX 3060 Ti 2594.8; RTX 3090 5087.1; RTX 4080 8284.6; RTX 5080 9129.5.
- Third-party coverage matches: MobiDevices (Sept 22, 2026) puts the M5 Max 40-core at 8,113 on Blender 5.2.0, 47% below the M5 Ultra (15,350) and below the RTX 5080 (9,126). — [MobiDevices](https://mobidevices.com/en/apple-m5-ultra-vs-nvidia-rtx-5080-blender-test); a MacRumors forum post quotes M5 Max 8,112.54 vs RTX 4080 about 8,256 — [MacRumors forums](https://forums.macrumors.com/threads/m5-ultra-and-m6-chip-benchmark-results-reveal-graphics-performance.2489822/page-3)

**Conflicting data point:** Notebookcheck's Blender 3.3 Classroom (Metal) times show the M4 Max 40c at 17.8 s and the M5 Max 40c (MBP 14) at 25.6 s, which makes the M4 Max faster. — [Notebookcheck M5 Pro/Max GPU analysis](https://www.notebookcheck.net/Apple-M5-Pro-M5-Max-GPU-Analysis-M5-Max-GPU-on-par-with-the-GeForce-RTX-5070-and-faster-than-Strix-Halo.1246060.0.html). This contradicts every Open Data version from 4.5 to 5.2, where the M5 Max 40c is about 34-40% faster than the M4 Max 40c.

### Inferences
- The test uses Blender 3.3, which is years old and predates Cycles MetalRT, M3 tuning and M5 support. The test may also have run on the throttling, 97 W-limited 14-inch. Treat the Notebookcheck Blender result as an outlier and use Open Data on Blender 4.5 or newer.
- For this creator's comparison: an RTX 3060 Ti desktop matches roughly an M4 Pro 16-core (99%). An RTX 3090 desktop sits between an M3 Max 40c (89%) / M4 Max 32c (93%) and an M4 Max 40c (113%).
- Any M1 or M2 MacBook Pro, including the M2 Max 38c at 67% of a 3060 Ti, is clearly slower than the creator's 3060 Ti desktop for Cycles. Even the M3 Pro 18c (74%) is.
- Within a generation, binned vs full Max chips differ by about 20-25% in Cycles (M3 Max 30c vs 40c: -20%; M4 Max 32c vs 40c: -18%; M5 Max 32c vs 40c: -21%). The scaling is roughly linear with GPU core count.
- An M3 Max 30c (3726) beats an M4 Pro 20c (2980) by about 25% in Cycles, and costs a similar amount used (pricing not verified).

### Gaps
- M2 Pro and M2 Max samples on 5.x are tiny (n=1-6). Use the 4.5.0 numbers for those chips.
- M5 Pro and Max 4.5.0 medians rest on n=1-4. Use the 5.1.1 or 5.2.0 numbers for M5.
- Blender Open Data does not publish per-chassis results, so 14-inch vs 16-inch cannot be separated in these medians.

## Q2. Hardware ray tracing (M3 and later) impact on Cycles; Eevee Next viewport on Macs

### Takeaway
M3 and later GPUs have hardware ray tracing, which Cycles uses as MetalRT, on by default only on M3 or newer. Combined with dynamic caching, it roughly 2.5x'd per-tier Cycles throughput from M2 to M3 Max. No controlled MetalRT on/off measurements or Eevee Next viewport benchmarks for Macs were found.

### Cited Findings
- Blender PR "Cycles: Apple M3 tuning including hardware raytracing" (#114296) added M3 tuning and hardware RT support. — [projects.blender.org PR 114296](https://projects.blender.org/blender/blender/pulls/114296)
- A follow-up fix makes MetalRT default to off unless the GPU is an M3 or newer. Before the fix, `use_metalrt_by_default` was true for any GPU that wasn't M1/M2-based, which also caused crashes on older AMD GPUs. — [projects.blender.org PR 120299](https://projects.blender.org/blender/blender/pulls/120299)
- A forum user reading Open Data at the time reported the M3 Max 30c at about 2851 vs the M2 Max 30c at about 1443, "about 2 times as fast per core". They noted the HW RT gain was smaller than NVIDIA's gain from OptiX, and another commenter attributed part of the gain to Dynamic Caching. These are opinions, not controlled tests. — [McNeel forum (Rhino)](https://discourse.mcneel.com/t/rhino-8-feature-metal-based-display-on-mac/157839?page=2); [MacRumors forum](https://spy.macrumors.com/threads/3d-rendering-on-apple-silicon-cpu-gpu.2269416/page-87)
- Current Open Data (5.1.1): M2 Max 38c 1769.7 → M3 Max 40c 4658.4, a 2.63x gain; M2 Pro 19c 886.6 → M3 Pro 18c 1952.0, a 2.2x gain. — [Blender Open Data 5.1.1](https://opendata.blender.org/benchmarks/query/?compute_type=METAL&compute_type=OPTIX&blender_version=5.1.1&group_by=device_name)
- OptiX vs CUDA on the same NVIDIA card (hardware RT on vs off) is about 1.42-1.51x in 4.5.0: RTX 3060 Ti 2764 vs 1825, RTX 3090 5412 vs 3798. — [Blender Open Data OptiX 4.5.0](https://opendata.blender.org/benchmarks/query/?compute_type=OPTIX&blender_version=4.5.0&group_by=device_name); [CUDA 4.5.0](https://opendata.blender.org/benchmarks/query/?compute_type=CUDA&blender_version=4.5.0&group_by=device_name)

### Inferences
- The M2 → M3 jump (2.2-2.6x) is much larger than NVIDIA's OptiX-vs-CUDA gain (about 1.45x). So hardware RT alone probably does not explain it; dynamic caching and shader/occupancy changes likely contribute. Either way, M3 is the practical cutoff for a Cycles-capable Mac.
- The viewport ray-traced preview (Cycles rendered viewport) benefits from the same hardware, so M3+ machines should feel much more interactive in Cycles viewport than M1/M2. This is inferred, not measured.

### Gaps
- I found no published MetalRT on/off Cycles benchmark for M3/M4/M5. The PR 114296 page returned HTTP 403, so its internal numbers could not be extracted.
- I found no Eevee Next (Blender 4.2+) viewport FPS or render-time benchmarks for Apple Silicon vs NVIDIA from a reliable source. The creator should test their own scene. Eevee Next on macOS runs on the Metal backend; its relative standing is unverified.
- I found nothing on whether M5's per-core "neural accelerators" are used by Cycles or OIDN.

## Q3. PugetBench results for After Effects and Premiere Pro (and Resolve) on these Macs vs a desktop PC

### Takeaway
Puget's own 2024 testing found an M3 Max MacBook Pro was the overall fastest system in After Effects, about 15% ahead of most PCs. Macs also excel in Premiere with intraframe (ProRes) and H.264/HEVC 8-bit. Desktop RTX PCs win in DaVinci Resolve (50-120% faster), GPU effects/AI and GPU rendering. AE 26.2 (2026) gave Macs about a 3.8x boost in AE's 3D score, though NVIDIA still leads AE 3D. An M5 Max laptop beats an RTX 5090 laptop in Notebookcheck's PugetBench runs for Premiere and Resolve. I found no direct Mac vs "13700K + RTX 3060 Ti/3090" PugetBench comparison.

### Cited Findings
- Puget's "Mac vs PC for Content Creation (2024)" compared an M3 Max MBP (16-core CPU / 40-core GPU / 64GB) and an M2 Ultra against i9-14900K + RTX 4080 SUPER, Ryzen 9 7950X + RTX 4080 SUPER, and Threadripper PRO 7995WX + RTX 4090 systems. — [Puget Systems](https://www.pugetsystems.com/labs/articles/mac-vs-pc-for-content-creation-2024/)
  - **After Effects:** the M3 Max MBP beat every configuration tested, with about a 15% lead over the other PCs and a slight edge over the 7995WX + dual-4090 system. PCs win the multi-frame-rendering multi-core test, where the 7995WX scored nearly 2x the MBP.
  - **Premiere Pro:** PCs generally win overall; the M2 Ultra "only just beat" the PC laptop. Macs are "much faster" on intraframe (ProRes/DNxHR), and the M3 MBP was fastest on H.264/HEVC 4:2:0 8-bit. PCs win on GPU effects and RAW. Intel Quick Sync is far faster for HEVC 4:2:2 10-bit.
  - **DaVinci Resolve Studio:** desktop PCs are about 50% faster at the low end and up to 120% faster at the top. On GPU effects/AI, PCs are 1x to 5x faster. The MBP was worse than PCs in nearly every subtest. Puget saw an anomaly of about 2 fps vs 40 fps on HEVC 50 Mbps 8-bit encode, possibly a bug.
  - **GPU rendering:** NVIDIA starts at about 2x Apple. The M3 Max is roughly half an RTX 4080 SUPER or RTX 4090 Mobile in GPU render tests.
  - Puget estimates about a 10% margin of error from mixed sources.
- **After Effects 26.2 (April 2026):** Puget measured about a 3.8x uplift in "3D Score (Extended)" vs v26.0 on both an M3 Max and an M5 Max MacBook Pro, vs about 1.1x on RTX 3080 and about 1.04x on RTX 5080. Puget says NVIDIA "remains the top choice" for AE 3D, with the M5 Max "right behind". Adobe attributed the change to 3D engine optimizations for AMD, Intel and Mac GPUs. — [Puget Systems blog](https://www.pugetsystems.com/blog/2026/04/16/after-effects-update-26-2-improved-puget-bench-3d-results/)
- **Notebookcheck PugetBench scores (2026):** — [Notebookcheck M5 Pro/Max GPU analysis](https://www.notebookcheck.net/Apple-M5-Pro-M5-Max-GPU-Analysis-M5-Max-GPU-on-par-with-the-GeForce-RTX-5070-and-faster-than-Strix-Halo.1246060.0.html)

| System | Photoshop | Premiere Pro (Standard) | DaVinci Resolve (Standard) |
|---|---|---|---|
| M5 Max (MBP 16) | 15875 | 157049 | 127090 |
| M5 Max (MBP 14) | 15775 | 149151 | 115172 |
| M5 Pro (MBP 16) | 15271 | 105296 | 83560 |
| RTX 5090 Laptop (Asus ProArt P16) | 10096 | 107130 | 85114 |

- PetaPixel's M5 Max review (March 2026) reportedly says the M5 Max beats the M3 Ultra Mac Studio by almost 1,000 points in PugetBench Premiere Pro, mostly from RAW processing. The page returned HTTP 403, so this comes from the search summary only. — [PetaPixel](https://petapixel.com/2026/03/13/macbook-pro-with-m5-max-review-this-is-better-than-your-desktop/)
- Puget notes that PugetBench scoring changes across versions, so scores from different benchmark versions aren't directly comparable. — [Puget Bench for Premiere Pro](https://www.pugetsystems.com/pugetbench/creators/premiere-pro/)

### Inferences
- The creator's main tools for 2.5D explainers are AE plus Premiere/Resolve. A used M3 Max, M4 Pro or M4 Max MBP should match or beat a 13700K + RTX 3060 Ti desktop in AE and in Premiere with ProRes/H.264/HEVC 8-bit. It will likely trail in Resolve GPU/AI effects and in heavy multi-frame-rendering AE comps. This extrapolates from Puget's 14900K/7950X + 4080 SUPER tests; a 13700K + 3060 Ti is weaker than those PCs, so the Mac's relative standing should be better.
- The AE 26.2 3D gain helps any Mac on current AE, including used M3-generation machines.

### Gaps
- I found no PugetBench database figures for M1 Max, M2 Max, M3 Pro, M4 Pro or M4 Max with comparable benchmark versions.
- I found no Puget test of a 13700K + RTX 3060 Ti / RTX 3090 desktop alongside Macs. The PugetBench public results browser could be queried for exact numbers, but I did not access it.
- I found no PugetBench After Effects overall scores for M5-generation MacBooks.

## Q4. Unified memory amount, binned vs full Max chips, and 14-inch vs 16-inch thermals

### Takeaway
For sustained renders, the 16-inch is clearly better with Max chips. Notebookcheck found the 14-inch M5 Max throttles hard, is power-limited to about 97 W, and loses 7-25% in sustained GPU load. The 16-inch M5 Max is about 12-18% faster and stable. Binned Max chips lose about 20% in Cycles and also get less memory bandwidth, for example M5 Max 32c at 460 GB/s vs 40c at 614 GB/s. I found no hard data on 18/24 vs 36/48 vs 64 GB for Blender or AE; sources only offer general guidance favoring 64 GB for heavy 3D work.

### Cited Findings
- **14-inch M5 Max:** Notebookcheck concluded the 14-inch chassis and cooling cannot handle the M5 Max adequately, citing serious thermal throttling and very inconsistent CPU performance even in High Power mode. Its 96 W adapter struggled, and Apple caps power input at 97 W regardless of charger. — [Notebookcheck MBP 14 M5 Max review](https://www.notebookcheck.net/M5-Max-with-inconsistent-performance-and-throttling-issues-Apple-MacBook-Pro-14-Review.1246064.0.html)
- **16-inch vs 14-inch M5 Max:** Cinebench 2024 multi-core scored 2437 vs 2073, and 3DMark Steel Nomad 4392 vs 3924. The 14-inch's sustained GPU performance is 7.4% lower in High Performance mode and 25% lower in Automatic mode. The 16-inch shows stable sustained GPU performance and much quieter fans in Automatic mode. — [Notebookcheck 16 vs 14](https://www.notebookcheck.net/Apple-s-M5-Max-in-the-MacBook-Pro-16-is-around-15-faster-compared-to-the-MacBook-Pro-14.1250872.0.html)
- The M5 Max GPU reached up to 72 W. In the MBP 14 it dropped to 44 W in High Power mode and 60/32 W in Automatic mode. The 14-inch's maximum system power is 97 W, with the battery covering the gap. Cyberpunk system power was 136.7 W on the 16-inch vs 86.4 W on the 14-inch. — [Notebookcheck GPU analysis](https://www.notebookcheck.net/Apple-M5-Pro-M5-Max-GPU-Analysis-M5-Max-GPU-on-par-with-the-GeForce-RTX-5070-and-faster-than-Strix-Halo.1246060.0.html)
- Notebookcheck's 2021 review of the 16-inch M1 Max was titled "Full Performance without Throttling". — [Notebookcheck MBP 16 M1 Max review](https://www.notebookcheck.net/Apple-MacBook-Pro-16-2021-M1-Max-Laptop-Review-Full-Performance-without-Throttling.581437.0.html)
- **M5 Pro / M5 Max memory:** M5 Pro goes up to 64 GB at about 307 GB/s; M5 Max up to 128 GB. The M5 Max has 460 GB/s on the 32-core GPU and 614 GB/s on the 40-core GPU. — [Tom's Guide](https://www.tomsguide.com/computing/macbooks/macbook-pro-m5-pro-and-m5-max-announced-price-release-date-specs-and-more); [Apple support spec page](https://support.apple.com/126319)
- Starting memory reports conflict: Tom's Guide lists 24 GB (M5 Pro) and 36 GB (M5 Max). Croma says the 32c Max starts at 36 GB and the 40c at 48 GB. — [Tom's Guide](https://www.tomsguide.com/computing/macbooks/macbook-pro-m5-pro-and-m5-max-announced-price-release-date-specs-and-more); [Croma](https://www.croma.com/unboxed/apple-macbook-pro-unveiled)
- **Blender memory:** on Apple Silicon, Blender's reported render memory can be about half of what Activity Monitor shows (7.5 GB vs over 14 GB in one report), and maintainers say it depends on the scene. — [Blender tracker T97081](https://developer.blender.org/T97081). Blender devs still list unified-memory optimisations and out-of-core work as planned for Metal. — [devtalk Metal feedback thread](https://devtalk.blender.org/t/cycles-apple-metal-device-feedback/21868?page=11)
- MacRumors recommends 64 GB for creative professionals and large 3D projects. — [MacRumors RAM guide](https://macrumors.com/guide/how-much-mac-ram). A Blender Artists user with a 32 GB Mac Studio says Blender runs "perfectly" but would choose 64 GB next time for running other apps alongside it. — [Blender Artists](https://blenderartists.org/t/m2-max-or-m2-ultra-if-m2-ultra-64gb-or-128gb-ram/1469528)

### Inferences
- Unified memory doubles as VRAM. A 36 GB Mac can already give Cycles more GPU-addressable memory than the creator's 8 GB RTX 3060 Ti; the RTX 3090 has 24 GB. With Blender, AE (RAM preview/disk cache) and Premiere often open together, 18-24 GB is tight. 36-48 GB is the practical sweet spot for explainer-scale scenes, and 64 GB is a nice-to-have for heavy AE RAM previews or large Blender scenes.
- For long renders on a secondary portable, a 16-inch Max avoids the 14-inch's power cap and throttling. A 14-inch Pro-tier chip throttles less because it draws less power. This is inferred; the M5 Pro 16-inch showed no throttling per Notebookcheck.
- A binned Max loses both GPU cores and bandwidth. For Cycles the loss is about 20%. For AE and Premiere it is likely smaller, since those apps are less GPU-bound; this is unverified.

### Gaps
- I found no published benchmark measuring Blender or AE performance at different RAM amounts on the same chip.
- Notebookcheck's 14 vs 16 numbers here are for M5 Max. I found no equivalent sustained-load data for used M3 Max or M4 Max in the 14-inch vs 16-inch in this session; widespread reports describe similar 14-inch Max fan noise and throttling, but that is not verified here.
- Memory bandwidth and configuration options for older chips were not verified this session. Background knowledge, unverified: M3 Pro has 150 GB/s and 18/36 GB options; M4 Pro has 273 GB/s and 24/48/64 GB; the M3 Max 30c has 300 GB/s vs 400 GB/s for the 40c. Check Apple's tech specs pages before relying on these.

## Q5. Compatibility gaps on macOS (AE plugins, Blender add-ons, denoisers, Redshift/Octane)

### Takeaway
After Effects has run natively on Apple Silicon since 22.3 (April 2022). Plug-ins without Apple Silicon builds are unavailable in native mode, and Element 3D has a known crash-troubleshooting article on Adobe's Apple Silicon page. On Mac, OptiX denoising is unavailable (it is NVIDIA-only), but OpenImageDenoise is GPU-accelerated on Apple Silicon (macOS 13+) since Blender 4.1. Redshift and Octane X both run on Metal.

### Cited Findings
- Adobe: After Effects runs natively on Apple Silicon, but third-party plug-ins not ported for Apple Silicon are unavailable in native mode, and a launch dialog lists them. Adobe's page links a troubleshooting article, "How to avoid crashes with Video Copilot Element 3D". — [Adobe: After Effects for Apple Silicon](https://helpx.adobe.com/after-effects/desktop/get-started/technical-requirements/after-effects-apple-silicon.html)
- Native AE arrived with version 22.3. In April 2022 a user said they had to keep AE 22.2 "for Element 3d mainly", which shows Element 3D lagged at first. — [Adobe community](https://community.adobe.com/t5/after-effects-discussions/after-effects-22-3-is-now-live-native-apple-silicon-support-frame-io-integration-and-more/m-p/12888059/highlight/true)
- A Toolfarm post, "Update: Video Copilot M1 Ready", reportedly says Video Copilot updated its plug-ins, including Element 3D, after AE went native. The page returned 403, so this comes from the search snippet only and no version number is known. — [Toolfarm](https://www.toolfarm.com/?p=80809)
- Video Copilot's product page currently lists "Element 3D V2.2" and gives no Apple Silicon or system-requirement details. — [Video Copilot](https://www.videocopilot.net/products/element2/)
- **OIDN on Mac:** Blender 4.1 made OpenImageDenoise GPU-accelerated on supported hardware, including Apple Silicon on macOS 13+. This enables full-quality denoising at interactive rates in the viewport, on by default for GPU viewport rendering. Junkshop denoise took 0.293 s on the M2 Ultra GPU vs 1.035 s on its CPU. — [Blender 4.1 Cycles release notes](https://wiki.blender.org/release_notes/4.1/cycles/). OIDN added a Metal device for Apple Silicon GPUs on macOS Ventura+. — [OIDN releases](https://github.com/OpenImageDenoise/oidn/releases)
- **Redshift:** Maxon announced Redshift for macOS with native M1 and Metal support in April 2021. — [BusinessWire](https://www.businesswire.com/news/home/20210413005903/en)
- **Octane X:** rewritten in Metal. A May 2026 user post on OTOY's forum praises "full Metal support with pixel parity to CUDA" for the Octane X PR1 release; this is user opinion, not an OTOY statement. — [OTOY forum](https://render.otoy.com/forum/viewtopic.php?p=443998); [Maxwell forum quoting OTOY](https://forum.maxwellrender.com/viewtopic.php?p=399254)

### Inferences
- OptiX-only workflows will not carry over to the Mac, but Blender's OIDN path is a direct substitute and GPU-accelerated on Apple Silicon. The creator should set the denoiser to OpenImageDenoise in shared .blend files.
- Red Giant and Trapcode come from Maxon, which ships Apple Silicon builds of its own renderer (Redshift); the Red Giant/Trapcode Apple Silicon status itself was not verified this session.
- Element 3D is the biggest risk. It is an old Video Copilot product (v2.2) with a known crash issue on Apple Silicon. The creator should test it in a trial before relying on it on the Mac. Moving 3D work to Blender or AE's native 3D (improved in 26.2) avoids that dependency.
- Blender add-ons that ship compiled binaries (some physics, retopology or AI tools) may lack arm64 macOS builds. Pure-Python add-ons work. This is inferred; no specific add-on list was verified.

### Gaps
- I could not verify the current Element 3D Apple Silicon build version or the exact crash workaround; the Adobe article content and Video Copilot release notes were not retrievable.
- Red Giant (Maxon One) and Trapcode Apple Silicon and macOS version support were not verified this session.
- Octane X's latest official Cinema 4D/Blender plugin status on Mac was not confirmed from OTOY directly.
- I found no Mac availability or arm64 status for specific popular Blender add-ons.

## Q6. Best-value used models for this workflow; battery, display and ports

### Takeaway
Based on Cycles numbers plus Puget's AE and Premiere findings, the value cutoff is M3 Max or newer, or M4 Pro or newer. M1 Max and M2 Max are good AE/Premiere laptops but far slower than the creator's RTX 3060 Ti in Cycles (38-67%). For a second machine that should roughly match or beat the 3060 Ti desktop in Blender and handle AE well, the strongest candidates are:
- M4 Pro 20c with 48 GB (113% of a 3060 Ti).
- M3 Max 30c or 40c with 36-48 GB (141-176%).
- M4 Max 32c or 40c (184-224%; the 40c is above an RTX 3090).

The M5 Max 40c (158% of an RTX 3090) is the only laptop that clearly beats a 3090, but it costs more even used. Choose the 16-inch if long renders are common.

### Cited Findings
- Cycles relative performance per model is in the Q1 table. — [Blender Open Data 5.1.1](https://opendata.blender.org/benchmarks/query/?compute_type=METAL&compute_type=OPTIX&blender_version=5.1.1&group_by=device_name)
- Puget found the M3 Max MBP the fastest system tested in After Effects overall. — [Puget Systems 2024](https://www.pugetsystems.com/labs/articles/mac-vs-pc-for-content-creation-2024/)
- New M5 Pro/Max pricing as a ceiling for used value: 14-inch M5 Pro from $2,199, 16-inch M5 Pro from $2,699, 14-inch M5 Max from $3,599, 16-inch M5 Max from $3,899. Released March 11, 2026. — [MacStories](https://www.macstories.net/?p=196276); [Tom's Guide](https://www.tomsguide.com/computing/macbooks/macbook-pro-m5-pro-and-m5-max-announced-price-release-date-specs-and-more)
- The M5 Max 14-inch is the most power-efficient in Notebookcheck's fps/W test (0.926), but only because it is power-capped at 97 W. The 16-inch M5 Max is roughly on par with the M5 Pro. — [Notebookcheck GPU analysis](https://www.notebookcheck.net/Apple-M5-Pro-M5-Max-GPU-Analysis-M5-Max-GPU-on-par-with-the-GeForce-RTX-5070-and-faster-than-Strix-Halo.1246060.0.html)

### Inferences
- **Value ranking for this creator** (Cycles parity with the 3060 Ti desktop plus AE/Premiere strength plus enough RAM):
  1. **M4 Pro 20c / 48 GB (14 or 16 inch):** about 3060 Ti-level Cycles, enough RAM, and a cooler, quieter Pro-tier chip that suits a 14-inch.
  2. **M3 Max 30c / 36 GB or 40c / 48-64 GB:** about 1.4-1.8x a 3060 Ti in Cycles, and likely cheaper used than an M4 Max. Prefer the 16-inch for long renders.
  3. **M4 Max 32c / 36 GB or 40c / 48 GB+:** roughly 3090-class Cycles in a laptop, at a higher price.
  4. **M5 Pro 20c / M5 Max:** newest and fastest; the M5 Pro 20c at 165% of a 3060 Ti outperforms the M3 Max 30c and M4 Pro. Used supply may be thin seven months after launch.
- **Avoid for Blender-heavy use:** M1 Pro, M1 Max, M2 Pro, M2 Max and M3 Pro. Each is below the 3060 Ti in Cycles. The M1 Max 32 GB is still a capable AE/Premiere-only laptop.
- **Binned vs full Max:** the about 20% Cycles loss on a binned chip usually comes with lower base RAM. A full 40c Max with 48 GB is often a better buy than a 32c/36 GB if the price gap is small.
- If the Mac is mainly for editing and AE on the go, with final Cycles renders sent to the desktop, an M4 Pro 48 GB 14-inch is the most balanced pick.

### Gaps
- I collected no current used-market prices (eBay, Swappa, Back Market) for any model, so value rankings are relative performance, not performance per dollar. A separate price check is needed.
- Battery life figures (Apple-rated and measured) for each generation were not collected this session.
- Display specs (Liquid Retina XDR mini-LED, 120 Hz ProMotion, peak HDR brightness, nano-texture option on M4+) and ports (Thunderbolt 4 vs Thunderbolt 5 on M4 Pro/Max, HDMI version, SDXC, MagSafe) were not verified with sources this session. Background knowledge, unverified: all 14/16-inch MBPs since 2021 share a mini-LED XDR display with HDMI, SDXC and MagSafe; M4 Pro/Max added Thunderbolt 5 and an optional nano-texture display. Check Apple's tech specs pages.
- Notebookcheck's sustained-load and battery data for the 14-inch M3 Max and M4 Max were not retrieved.

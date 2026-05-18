// ── Data ──────────────────────────────────────────────────────────────────────
//
//  HOW TO ADD YOUR GOOGLE DRIVE LINKS:
//  ─────────────────────────────────────────────────────────────────────────────
//  1. Go to Google Drive → right-click a folder → Share → Copy link
//  2. Paste it in place of the "#" for that folder below
//
//  General folders (Biography, G.K.&G.I., Poem Book, Story Books):
//    → update the  link: "#"  value
//
//  Class folders (Class V–XII) — each has 3 separate links:
//    → update  notes, questionBank, textBook  inside  subs: { ... }
// ─────────────────────────────────────────────────────────────────────────────

const folders = [

  // ── General folders (no subfolders) ────────────────────────────────────────
  {
    id: "biography", label: "Biography", emoji: "📚", color: "#7B2D8B",
    hasSubs: false,
    link: "https://drive.google.com/drive/folders/1EQbe90utG51t5AE4ztJ3VjdkZZv2k0JS?usp=drive_link"   // ← paste Biography Google Drive folder link here
  },

  // ── Class folders (Notes / Question Bank / Text Book) ──────────────────────
  {
    id: "classV", label: "Class V", emoji: "🎒", color: "#D4650A",
    hasSubs: true,
    subs: {
      notes:        "https://drive.google.com/drive/folders/1lSSZbycQpCzH9gRfpDh46ZPfk3NZ58ed?usp=drive_link",   // ← Class V → Notes
      questionBank: "https://drive.google.com/drive/folders/1HN0E94sa3DDQCgDC2TTy4xocl0FtBd04?usp=drive_link",   // ← Class V → Question Bank
      textBook:     "https://drive.google.com/drive/folders/1r8bcxOAl0kJFrzyYkXmxgWYznkxW6mna?usp=drive_link",   // ← Class V → Text Book
    }
  },
  {
    id: "classVI", label: "Class VI", emoji: "📗", color: "#1E8A4C",
    hasSubs: true,
    subs: {
      notes:        "https://drive.google.com/drive/folders/1Jhl-wSvJJbvlpf3uwaZZW-IWn4OkMnP-?usp=drive_link",   // ← Class VI → Notes
      questionBank: "https://drive.google.com/drive/folders/1JmEAEGNf7Apc3N7Pxt-PQHndUex3pslx?usp=drive_link",   // ← Class VI → Question Bank
      textBook:     "https://drive.google.com/drive/folders/1JWxdTL50dxFVvn0qRErhDyH588p5Kdyj?usp=drive_link",   // ← Class VI → Text Book
    }
  },
  {
    id: "classVII", label: "Class VII", emoji: "📘", color: "#1A6EAD",
    hasSubs: true,
    subs: {
      notes:        "https://drive.google.com/drive/folders/1HVyMbsheEODkn-KHICaTZ6pxPuYsx39x?usp=drive_link",   // ← Class VII → Notes
      questionBank: "https://drive.google.com/drive/folders/1HxGOJddKov37tzvzL1bDmxh4Rn2HpmW8?usp=drive_link",   // ← Class VII → Question Bank
      textBook:     "https://drive.google.com/drive/folders/1Hdx3xyAPGxvcf7r_vMq0FccVVbtUMfjP?usp=drive_link",   // ← Class VII → Text Book
    }
  },
  {
    id: "classVIII", label: "Class VIII", emoji: "📙", color: "#7A3BAB",
    hasSubs: true,
    subs: {
      notes:        "https://drive.google.com/drive/folders/1FwGUi-849antZtanirsTRU3nYkmEo8QH?usp=drive_link",   // ← Class VIII → Notes
      questionBank: "https://drive.google.com/drive/folders/1G1GtNFHRcDrekQLDBNKy1vzzrwyvoFYA?usp=drive_link",   // ← Class VIII → Question Bank
      textBook:     "https://drive.google.com/drive/folders/1G-2Me6CCGxavw2Cp2MCNGrbQ4HHSI1Ux?usp=drive_link",   // ← Class VIII → Text Book
    }
  },
  {
    id: "classIX", label: "Class IX", emoji: "📕", color: "#B52A1D",
    hasSubs: true,
    subs: {
      notes:        "https://drive.google.com/drive/folders/1AOxk2BaO4osGjtNOd2IF0iWR5pa4kJGe?usp=drive_link",   // ← Class IX → Notes
      questionBank: "https://drive.google.com/drive/folders/1AYuS-7xPo5-gXov1HhnRVHWbYgoEnUnQ?usp=drive_link",   // ← Class IX → Question Bank
      textBook:     "https://drive.google.com/drive/folders/1AIxN3zxvc-kx6iaUoyjdXBlMOdmu5T1n?usp=drive_link",   // ← Class IX → Text Book
    }
  },
  {
    id: "classX", label: "Class X", emoji: "🔟", color: "#0D8A7A",
    hasSubs: true,
    subs: {
      notes:        "https://drive.google.com/drive/folders/1-95Sj9fAmW0kOS87fbEYEcA0IShM8pak?usp=drive_link",   // ← Class X → Notes
      questionBank: "https://drive.google.com/drive/folders/13SkQe-a4ojjwqAEEs7Hq6aP6Sl0Z0yZA?usp=drive_link",   // ← Class X → Question Bank
      textBook:     "https://drive.google.com/drive/folders/1-983YMj6_UIa7mcLBMVwRI9fvSB8D8bX?usp=drive_link",   // ← Class X → Text Book
    }
  },
  {
    id: "classXI", label: "Class XI", emoji: "🎓", color: "#B84A0A",
    hasSubs: true,
    subs: {
      notes:        "https://drive.google.com/drive/folders/1d3XyFSr0bume7VIXNmRVwiiZzbdeioka?usp=drive_link",   // ← Class XI → Notes
      questionBank: "https://drive.google.com/drive/folders/19yfZlxCSnRIPsBFxSroekbdAhvmsYgP-?usp=drive_link",   // ← Class XI → Question Bank
      textBook:     "https://drive.google.com/drive/folders/10hvoCXzO19dowZD6dJJPZiFT0HHQ3xPg?usp=drive_link",   // ← Class XI → Text Book
    }
  },
  {
    id: "classXII", label: "Class XII", emoji: "🏆", color: "#2C3E50",
    hasSubs: true,
    subs: {
      notes:        "https://drive.google.com/drive/folders/1lff7Y2nqkmpl7mlcKbmfF7HhNqs5Mbqm?usp=drive_link",   // ← Class XII → Notes
      questionBank: "https://drive.google.com/drive/folders/1lgc71F-B_nWw4k1rVbyKdvHwijm6CuHw?usp=drive_link",   // ← Class XII → Question Bank
      textBook:     "https://drive.google.com/drive/folders/1l_7iPL1ifjXFmaR5GL0ClYGfhsGlXbyz?usp=drive_link",   // ← Class XII → Text Book
    }
  },

  // ── More general folders ────────────────────────────────────────────────────
  {
    id: "gkgi", label: "G.K. & G.I.", emoji: "🧠", color: "#0D7A6A",
    hasSubs: false,
    link: "https://drive.google.com/drive/folders/17BWFW0NRe9cOC9TTFrfatukZSrsrl8v8?usp=drive_link"   // ← paste G.K. & G.I. Google Drive folder link here
  },
  {
    id: "poem", label: "Poem Book", emoji: "🖊️", color: "#C0125A",
    hasSubs: false,
    link: "https://drive.google.com/drive/folders/13MUJDKkun0V9vHHURAOqp4tsh7aRZsWz?usp=drive_link"   // ← paste Poem Book Google Drive folder link here
  },
  {
    id: "story", label: "Story Books", emoji: "📖", color: "#6D4C41",
    hasSubs: false,
    link: "https://drive.google.com/drive/folders/13HXX9vd9lCkBUE9uSczBfoaN6dbOTh5i?usp=drive_link"   // ← paste Story Books Google Drive folder link here
  },
];

// Subfolder display config — names, icons, descriptions (same for all classes)
const SUB_META = [
  { key: "notes",        name: "Notes",        emoji: "📝", desc: "Chapter-wise study notes for all topics" },
  { key: "questionBank", name: "Question Bank", emoji: "❓", desc: "Practice questions & previous year answers" },
  { key: "textBook",     name: "Text Book",     emoji: "📚", desc: "Official textbooks & reference materials" },
];

// ── Build home grid ───────────────────────────────────────────────────────────
function buildHome() {
  const grid = document.getElementById("homeGrid");
  grid.innerHTML = "";
  folders.forEach((f, i) => {
    const card = document.createElement("div");
    card.className = "folder-card";
    card.style.setProperty("--card-color", f.color);
    card.style.animationDelay = `${i * 40}ms`;
    card.innerHTML = `
      <div class="card-band">
        <span class="card-emoji">${f.emoji}</span>
        <span class="card-label">${f.label}</span>
      </div>
      <div class="card-body">
        <div class="card-info">${f.hasSubs ? "3 subfolders &nbsp;→" : "Tap to open &nbsp;→"}</div>
        <div class="card-footer-row">
          <span class="card-tag">${f.hasSubs ? "Class Folder" : "General"}</span>
          <span class="card-folder-icon">📂</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => openFolder(f));
    grid.appendChild(card);
  });
}

// ── Open a folder ─────────────────────────────────────────────────────────────
function openFolder(folder) {
  document.getElementById("detailHeader").style.background = folder.color;
  document.getElementById("detailEmoji").textContent = folder.emoji;
  document.getElementById("detailName").textContent  = folder.label;
  document.getElementById("detailSub").textContent   = folder.hasSubs
    ? "Select a subfolder below"
    : "General folder — no subfolders";
  document.getElementById("breadName").textContent   = folder.label;
  document.getElementById("detailFooter").textContent =
    `BHS Digital Library · ${folder.label}${folder.hasSubs ? " · 3 Subfolders" : ""}`;
  document.getElementById("page-detail").style.setProperty("--detail-color", folder.color);

  const subSection = document.getElementById("subSection");
  const genSection = document.getElementById("genSection");

  if (folder.hasSubs) {
    subSection.style.display = "block";
    genSection.style.display  = "none";
    buildSubGrid(folder);
  } else {
    subSection.style.display = "none";
    genSection.style.display  = "flex";
    buildGenCard(folder);
  }

  document.getElementById("page-home").classList.remove("active");
  document.getElementById("page-detail").classList.add("active");
  window.scrollTo(0, 0);
}

// ── Build subfolder grid (uses per-class links) ───────────────────────────────
function buildSubGrid(folder) {
  const grid = document.getElementById("subGrid");
  grid.innerHTML = "";
  SUB_META.forEach((meta, i) => {
    const link = folder.subs[meta.key] || "#";
    const card = document.createElement("div");
    card.className = "sub-card";
    card.style.animationDelay = `${i * 70}ms`;
    card.innerHTML = `
      <div class="sub-card-top">
        <span class="sub-card-emoji">${meta.emoji}</span>
      </div>
      <div class="sub-card-body">
        <div class="sub-card-name">${meta.name}</div>
        <div class="sub-card-desc">${meta.desc}</div>
        <a href="${link}" class="open-btn" target="_blank" rel="noopener">📂 &nbsp;Open Folder</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── Build general card ────────────────────────────────────────────────────────
function buildGenCard(folder) {
  document.getElementById("genEmoji").textContent = folder.emoji;
  document.getElementById("genName").textContent  = folder.label;
  const btn = document.getElementById("genLink");
  btn.href   = folder.link || "#";
  btn.target = "_blank";
  btn.rel    = "noopener";
}

// ── Go home ───────────────────────────────────────────────────────────────────
function goHome() {
  document.getElementById("page-detail").classList.remove("active");
  document.getElementById("page-home").classList.add("active");
  window.scrollTo(0, 0);
}

// ── Init ──────────────────────────────────────────────────────────────────────
buildHome();

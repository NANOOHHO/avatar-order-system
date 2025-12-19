// ===== CENTRALIZED AVATAR DATA CONFIG =====
// Add new bases, hairs, outfits here — HTML will auto-generate!
const avatarData = {
  bases: [
    { id: "Shinano Base", label: "Shinano Base", img: "assets/bases/Shinano.png", price: 300 },
    { id: "Manuka Base", label: "Manuka Base", img: "assets/bases/Manuka.png", price: 300 },
    { id: "Sio Base", label: "Sio Base", img: "assets/bases/Sio.png", price: 300 }
  ],
  hairStyles: [
    { id: "Long", label: "Long Hair" },
    { id: "Short", label: "Short Hair" }
  ],
  // hairs[baseId][styleId] = [ { id, label, img, price }, ... ]
  hairs: {
    "Shinano Base": {
      "Long": [
        { id: "Shinano - Aurora Curl", label: "Aurora Curl", img: "assets/hairs/aurora curl.png", price: 50 },
        { id: "Shinano - Wingflare", label: "Wingflare", img: "assets/hairs/sio wingflare.png", price: 40 },
      ],
      "Short": [
        { id: "Shinano - Enigma Fringe Braid", label: "Enigma Fringe Braid", img: "assets/hairs/Enigma fringe braid.png", price: 50 },
        { id: "Shinano - Stellar Bun Hair", label: "Stellar Bun Hair", img: "assets/hairs/Stellar bun hair.png", price: 50 },
        { id: "Shinano - One Side Up Bob", label: "One Side Up Bob", img: "assets/hairs/One Side Up Bob.png", price: 40 }
      ]
    },
    "Manuka Base": {
      "Long": [
        { id: "Manuka - P♡P.Hair 03", label: "P♡P.Hair 03", img: "assets/hairs/manuka P♡P.Hair 03.png", price: 45 },
        { id: "Manuka - Jellyennui", label: "Jellyennui", img: "assets/hairs/Jellyennui.png", price: 50 },
        { id: "Manuka - Aurora Curl", label: "Aurora Curl", img: "assets/hairs/aurora curl.png", price: 50 },
      ],
      "Short": [
        { id: "Manuka - Stellar Bun Hair", label: "Stellar Bun Hair", img: "assets/hairs/Stellar bun hair.png", price: 50 },
        { id: "Manuka - One Side Up Bob", label: "One Side Up Bob", img: "assets/hairs/One Side Up Bob.png", price: 40 }
      ]
    },
    "Sio Base": {
      "Long": [
        { id: "Sio - P♡P.Hair 03", label: "P♡P.Hair 03", img: "assets/hairs/sio P♡P.Hair 03.png", price: 45 },
        { id: "Sio - Wingflare", label: "Wingflare", img: "assets/hairs/sio wingflare.png", price: 40 },
        { id: "Sio - Aurora Curl", label: "Aurora Curl", img: "assets/hairs/aurora curl.png", price: 50 },
      ],
      "Short": [
        { id: "Sio - Bonnie", label: "Bonnie", img: "assets/hairs/sio bonnie short hair.png", price: 35 },
        { id: "Sio - Hush Cut", label: "Hush Cut", img: "assets/hairs/mamoming hair_002 hush cut.PNG", price: 40 },
        { id: "Sio - Enigma Fringe Braid", label: "Enigma Fringe Braid", img: "assets/hairs/Enigma fringe braid.png", price: 50 },
        { id: "Sio - Stellar Bun Hair", label: "Stellar Bun Hair", img: "assets/hairs/Stellar bun hair.png", price: 50 },
        { id: "Sio - One Side Up Bob", label: "One Side Up Bob", img: "assets/hairs/One Side Up Bob.png", price: 40 }
      ]
    }
  },
  outfitStyles: [
    { id: "Casual", label: "Casual" },
    { id: "Cyber", label: "Cyber" },
    { id: "Fantasy", label: "Fantasy" },
    { id: "Costume", label: "Costume" }
  ],
  // outfits[baseId][styleId] = [ { id, label, img, price }, ... ]
  outfits: {
    "Shinano Base": {
      "Casual": [
        { id: "Shinano - Mallownyan", label: "Mallownyan", img: "assets/clothes/mallownyan.png", price: 100 },
        //{ id: "Shinano - Casual B", label: "Casual B", img: "assets/clothes/shinano/casual2.png", price: 0 }
      ],
      "Fantasy": [
        { id: "Shinano - Ebon Feast", label: "Ebon Feast", img: "assets/clothes/Ebon Feast.png", price: 100 },
        //{ id: "Shinano - Cyber B", label: "Cyber B", img: "assets/clothes/shinano/cyber2.png", price: 0 }
      ],
      "Costume": [
        { id: "Shinano - Neko Jersey Maid", label: "Neko Jersey Maid", img: "assets/clothes/Neko Jersey Maid.png", price: 100 },
        { id: "Shinano - Mizakura ", label: "Mizakura ", img: "assets/clothes/Mizakura.png", price: 100 }
      ]
    },
    "Manuka Base": {
      "Casual": [
        { id: "Manuka - Balloon", label: "Balloon", img: "assets/clothes/balloon.png", price: 100 },
        { id: "Manuka - Mallownyan", label: "Mallownyan", img: "assets/clothes/mallownyan.png", price: 100 }
      ],
      "Fantasy": [
        { id: "Manuka - Ebon Feast", label: "Ebon Feast", img: "assets/clothes/Ebon Feast.png", price: 100 },
        { id: "Manuka - Melty", label: "Melty", img: "assets/clothes/Melty.png", price: 75 }
      ],
      "Costume": [
        { id: "Manuka - Reverse Side Suit", label: "Reverse Side Suit", img: "assets/clothes/reverse side suit.png", price: 100 },
        { id: "Manuka - Mizakura ", label: "Mizakura ", img: "assets/clothes/Mizakura.png", price: 100 },
        { id: "Manuka - Overay bikini 2", label: "overay bikini 2", img: "assets/clothes/overay bikini 2.png", price: 100 },
        { id: "Manuka - Selfish Devil", label: "Selfish Devil", img: "assets/clothes/Selfish Devil.png", price: 100 },
        { id: "Manuka - Neko Jersey Maid", label: "Neko Jersey Maid", img: "assets/clothes/Neko Jersey Maid.png", price: 100 }
      ]
    },
    "Sio Base": {
      "Casual": [
        { id: "Sio - Balloon", label: "Balloon", img: "assets/clothes/balloon.png", price: 100 },
        { id: "Sio - Mallownyan", label: "Mallownyan", img: "assets/clothes/mallownyan.png", price: 100 }
      ],
      "Fantasy": [
        { id: "Sio - Ebon Feast", label: "Ebon Feast", img: "assets/clothes/Ebon Feast.png", price: 100 },
        { id: "Sio - Melty", label: "Melty", img: "assets/clothes/Melty.png", price: 100 }
      ],
      "Costume": [
        { id: "Sio - Reverse Side Suit", label: "Reverse Side Suit", img: "assets/clothes/reverse side suit.png", price: 100 },
        { id: "Sio - Mizakura ", label: "Mizakura ", img: "assets/clothes/Mizakura.png", price: 100 },
        { id: "Sio - Overay bikini 2", label: "overay bikini 2", img: "assets/clothes/overay bikini 2.png", price: 100 },
        { id: "Sio - Selfish Devil", label: "Selfish Devil", img: "assets/clothes/Selfish Devil.png", price: 100 },
        { id: "Sio - Neko Jersey Maid", label: "Neko Jersey Maid", img: "assets/clothes/Neko Jersey Maid.png", price: 100 }
      ]
    }
  }
};

// ===== STATE & PRICING =====
let step = 1;
const totalSteps = 6;

const order = {
  baseModel: null,
  options: [],
  hairStyles: [],
  hairs: [],
  outfitStyles: [],
  estimatedPrice: 0,
  multiSelect: false
};

// ===== INITIALIZE: Generate HTML on page load =====
function initializeUI() {
  renderBases();
  renderHairStyles();
  renderOutfitStyles();
  renderHairGrids();
  renderOutfitGrids();
  updateUI();
}

// Generate base selector cards
function renderBases() {
  const grid = document.querySelector('#step-1 .grid');
  if (!grid) return;
  grid.innerHTML = '';
  avatarData.bases.forEach(base => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-base', base.id);
    card.innerHTML = `<img src="${base.img}" /><p>${base.label}</p>`;
    card.onclick = () => chooseBase(base.id);
    grid.appendChild(card);
  });
}

// Generate hair style cards
function renderHairStyles() {
  const grid = document.querySelector('#step-2 .grid');
  if (!grid) return;
  grid.innerHTML = '';
  avatarData.hairStyles.forEach(style => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-style', style.id);
    card.innerHTML = `<p>${style.label}</p>`;
    card.onclick = () => chooseStyle(style.id);
    grid.appendChild(card);
  });
}

// Generate outfit style cards
function renderOutfitStyles() {
  const grid = document.querySelector('#step-4 .grid');
  if (!grid) return;
  grid.innerHTML = '';
  avatarData.outfitStyles.forEach(style => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-cloth-style', style.id);
    card.innerHTML = `<p>${style.label}</p>`;
    card.onclick = () => chooseOutfitStyle(style.id);
    grid.appendChild(card);
  });
}

// Generate hair grids dynamically
function renderHairGrids() {
  const hairArea = document.getElementById('hairSelectionArea');
  if (!hairArea) return;
  let container = hairArea.querySelector('#hairGridsContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'hairGridsContainer';
    hairArea.appendChild(container);
  }
  container.innerHTML = '';

  Object.entries(avatarData.hairs).forEach(([baseId, styles]) => {
    Object.entries(styles).forEach(([styleId, items]) => {
      const grid = document.createElement('div');
      grid.className = 'hair-grid grid';
      grid.setAttribute('data-base', baseId);
      grid.setAttribute('data-style', styleId);
      grid.style.display = 'none';
      items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-option', item.id);
        card.innerHTML = `<img src="${item.img}" alt="${item.label}"><p>${item.label}</p>`;
        card.onclick = () => chooseHair(item.id);
        grid.appendChild(card);
      });
      container.appendChild(grid);
    });
  });
}

// Generate outfit grids dynamically
function renderOutfitGrids() {
  const outfitArea = document.getElementById('outfitSelectionArea');
  if (!outfitArea) return;
  let container = outfitArea.querySelector('#outfitGridsContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'outfitGridsContainer';
    outfitArea.appendChild(container);
  }
  container.innerHTML = '';

  Object.entries(avatarData.outfits).forEach(([baseId, styles]) => {
    Object.entries(styles).forEach(([styleId, items]) => {
      const grid = document.createElement('div');
      grid.className = 'outfit-grid grid';
      grid.setAttribute('data-base', baseId);
      grid.setAttribute('data-style', styleId);
      grid.style.display = 'none';
      items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-option', item.id);
        card.innerHTML = `<img src="${item.img}" alt="${item.label}"><p>${item.label}</p>`;
        card.onclick = () => chooseOutfit(item.id);
        grid.appendChild(card);
      });
      container.appendChild(grid);
    });
  });
}

// Get price for an item
function getPrice(itemId) {
  // Check bases
  const base = avatarData.bases.find(b => b.id === itemId);
  if (base) return base.price;
  
  // Check hairs
  for (const styles of Object.values(avatarData.hairs)) {
    for (const items of Object.values(styles)) {
      const item = items.find(i => i.id === itemId);
      if (item) return item.price;
    }
  }
  
  // Check outfits
  for (const styles of Object.values(avatarData.outfits)) {
    for (const items of Object.values(styles)) {
      const item = items.find(i => i.id === itemId);
      if (item) return item.price;
    }
  }
  return 0;
}

// ===== CORE LOGIC =====
function calculatePrice() {
  let total = 0;
  if (order.baseModel) total += getPrice(order.baseModel);
  order.hairs.forEach(h => total += getPrice(h));
  order.options.forEach(o => total += getPrice(o));
  order.estimatedPrice = total;
}

function updateUI() {
  calculatePrice();

  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById(`step-${step}`).classList.add('active');
  document.getElementById('progress').innerText = `Step ${step} / ${totalSteps}`;

  const priceEl = document.getElementById('price');
  if (priceEl) priceEl.innerText = ` Estimated Price: ${order.estimatedPrice.toLocaleString()} THB`;

  // Update selected states
  document.querySelectorAll('.card[data-base]').forEach(c => {
    c.classList.toggle('selected', order.baseModel === c.getAttribute('data-base'));
  });

  document.querySelectorAll('.card[data-style]').forEach(c => {
    c.classList.toggle('selected', order.hairStyles.includes(c.getAttribute('data-style')));
  });

  document.querySelectorAll('.hair-grid .card').forEach(c => {
    c.classList.toggle('selected', order.hairs.includes(c.getAttribute('data-option')));
  });

  document.querySelectorAll('.outfit-grid .card').forEach(c => {
    c.classList.toggle('selected', order.options.includes(c.getAttribute('data-option')));
  });

  document.querySelectorAll('.card[data-cloth-style]').forEach(c => {
    c.classList.toggle('selected', order.outfitStyles.includes(c.getAttribute('data-cloth-style')));
  });

  // Show summary
  if (step === 6) {
    document.getElementById('summary').innerHTML = `
      <h3>Order Summary</h3>
      <p><strong>Base:</strong> ${order.baseModel}</p>
      <p><strong>Hair Styles:</strong><ul>${order.hairStyles.map(o => `<li>${o}</li>`).join('')}</ul></p>
      <p><strong>Hairs:</strong><ul>${order.hairs.map(o => `<li>${o}</li>`).join('')}</ul></p>
      <p><strong>Clothes:</strong><ul>${order.options.map(o => `<li>${o}</li>`).join('')}</ul></p>
      <p><strong>Estimated Price:</strong> ${order.estimatedPrice.toLocaleString()} THB</p>
      <small>*ราคานี้เป็นการประเมินเบื้องต้น</small>
    `;
  }

  // Show hair grids
  document.querySelectorAll('.hair-grid').forEach(g => g.style.display = 'none');
  const hairArea = document.getElementById('hairSelectionArea');
  if (order.baseModel && order.hairStyles.length > 0) {
    if (hairArea) hairArea.style.display = 'block';
    order.hairStyles.forEach(style => {
      document.querySelectorAll(`.hair-grid[data-base="${order.baseModel}"][data-style="${style}"]`).forEach(g => g.style.display = 'grid');
    });
  } else if (hairArea) {
    hairArea.style.display = 'none';
  }

  // Show outfit grids
  document.querySelectorAll('.outfit-grid').forEach(g => g.style.display = 'none');
  const outfitArea = document.getElementById('outfitSelectionArea');
  if (order.baseModel && order.outfitStyles.length > 0) {
    if (outfitArea) outfitArea.style.display = 'block';
    order.outfitStyles.forEach(style => {
      document.querySelectorAll(`.outfit-grid[data-base="${order.baseModel}"][data-style="${style}"]`).forEach(g => g.style.display = 'grid');
    });
  } else if (outfitArea) {
    outfitArea.style.display = 'none';
  }
}

// ===== USER ACTIONS =====
function chooseBase(base) {
  order.baseModel = base;
  order.hairStyles = [];
  order.hairs = [];
  step = 2;
  updateUI();
}

function chooseStyle(style) {
  if (order.multiSelect) {
    const i = order.hairStyles.indexOf(style);
    if (i === -1) order.hairStyles.push(style);
    else order.hairStyles.splice(i, 1);
  } else {
    order.hairStyles = [style];
    if (!order.multiSelect) step = 3;
  }
  updateUI();
}

function chooseHair(name) {
  if (order.multiSelect) {
    const i = order.hairs.indexOf(name);
    if (i === -1) order.hairs.push(name);
    else order.hairs.splice(i, 1);
  } else {
    order.hairs = [name];
    if (step < 4) step = 4;
  }
  updateUI();
}

function chooseOutfitStyle(style) {
  if (order.multiSelect) {
    const i = order.outfitStyles.indexOf(style);
    if (i === -1) order.outfitStyles.push(style);
    else order.outfitStyles.splice(i, 1);
  } else {
    order.outfitStyles = [style];
    step = 5;
  }
  updateUI();
}

function chooseOutfit(name) {
  if (order.multiSelect) {
    const i = order.options.indexOf(name);
    if (i === -1) order.options.push(name);
    else order.options.splice(i, 1);
  } else {
    order.options = [name];
    if (step < 6) step = 6;
  }
  updateUI();
}

function prevStep() {
  if (step > 1) {
    step--;
    updateUI();
  }
}

function nextStep() {
  if (step < totalSteps) {
    step++;
    updateUI();
  }
}

function toggleMulti() {
  order.multiSelect = !order.multiSelect;
  const btn = document.getElementById('multiToggle');
  if (btn) {
    btn.innerText = 'Multi-select: ' + (order.multiSelect ? 'On' : 'Off');
    btn.classList.toggle('on', order.multiSelect);
  }
  if (!order.multiSelect && order.options.length > 1) {
    order.options = [order.options[0]];
  }
  updateUI();
}

function downloadOrder() {
  const data = JSON.stringify(order, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'vrchat-avatar-order.json';
  a.click();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeUI);

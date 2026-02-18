const entityData = {
  name: 'Libros Con Segunda Vida',
  description:
    'E-commerce especializado en la compra y venta de libros usados, promoviendo la lectura sostenible y el acceso a conocimiento a bajo costo.',
  identifier: 'UBS-EC-2025',

  contact: {
    email: 'contacto@librosconsegundavida.com',
    phone: '+57 310 883 0434',
        location: 'Bogotá, Colombia'
  },

  // Redes o enlaces de la tienda
  links: [
    { platform: 'Instagram', url: 'https://instagram.com', icon: '📸' },
    { platform: 'Facebook', url: 'https://facebook.com', icon: '📘' },
    { platform: 'WhatsApp', url: 'https://wa.me/573105558899', icon: '💬' }
  ],

  // Libros más destacados en la tienda
  items: [
    { name: 'Cien años de soledad', level: 90, category: 'Novela' },
    { name: '1984', level: 85, category: 'Ciencia ficción' },
    { name: 'El principito', level: 95, category: 'Literatura infantil' },
    { name: 'Don Quijote de la Mancha', level: 80, category: 'Clásico' },
    { name: 'Sapiens', level: 88, category: 'Historia' }
  ]

};

// ============================================
// TODO 2: Referencias al DOM
// ============================================

const entityName = document.getElementById('entity-name');
const entityDescription = document.getElementById('entity-description');
const entityEmail = document.getElementById('entity-email');
const entityLocation = document.getElementById('entity-location');

const itemsList = document.getElementById('items-list');
const statsContainer = document.getElementById('stats');
const linksContainer = document.getElementById('links');

const themeToggle = document.getElementById('theme-toggle');
const copyBtn = document.getElementById('copy-btn');
const toggleItemsBtn = document.getElementById('toggle-items');

const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// ============================================
// TODO 3: Renderizar información básica
// ============================================

const renderBasicInfo = () => {
  const {
    name,
    description,
    contact: { email, location }
  } = entityData;

  entityName.textContent = name;
  entityDescription.textContent = description;
  entityEmail.textContent = email;
  entityLocation.textContent = location;
};

// ============================================
// TODO 4: Renderizar libros (items)
// ============================================

const renderItems = (showAll = false) => {
  const { items } = entityData;
  const itemsToShow = showAll ? items : items.slice(0, 4);

  itemsList.innerHTML = itemsToShow
    .map(({ name, level, category }) => `
      <div class="item">
        <div class="item-name">${name}</div>
        <small>${category}</small>
        <div class="item-level">
          <span>Estado ${level}%</span>
          <div class="level-bar">
            <div class="level-fill" style="width:${level}%"></div>
          </div>
        </div>
      </div>
    `)
    .join('');
};

// ============================================
// TODO 5: Renderizar enlaces
// ============================================

const renderLinks = () => {
  const { links } = entityData;

  linksContainer.innerHTML = links
    .map(({ platform, url, icon }) => `
      <a href="${url}" target="_blank" class="social-link">
        ${icon} ${platform}
      </a>
    `)
    .join('');
};

// ============================================
// TODO 6: Renderizar estadísticas
// ============================================

const renderStats = () => {
  const { stats } = entityData;

  const statsArray = [
    { label: 'Libros disponibles', value: stats.booksAvailable },
    { label: 'Libros vendidos', value: stats.booksSold },
    { label: 'Usuarios activos', value: stats.activeUsers },
    { label: 'Rating', value: stats.rating }
  ];

  statsContainer.innerHTML = statsArray
    .map(stat => `
      <div class="stat-item">
        <span class="stat-value">${stat.value}</span>
        <span class="stat-label">${stat.label}</span>
      </div>
    `)
    .join('');
};

// ============================================
// TODO 7: Tema claro / oscuro
// ============================================

const toggleTheme = () => {
  const currentTheme = document.documentElement.dataset.theme ?? 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.dataset.theme = newTheme;
  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';

  localStorage.setItem('theme', newTheme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme') ?? 'light';
  document.documentElement.dataset.theme = savedTheme;
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
};

// ============================================
// TODO 8: Copiar información
// ============================================

const copyInfo = () => {
  const { name, description, contact } = entityData;

  const infoText = `
${name}
${description}
Email: ${contact.email}
Ubicación: ${contact.location}
  `.trim();

  navigator.clipboard.writeText(infoText);
  showToast('📋 Información copiada al portapapeles');
};

// ============================================
// Toast
// ============================================

const showToast = message => {
  toastMessage.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
};

// ============================================
// TODO 9: Mostrar / ocultar libros
// ============================================

let showingAllItems = false;

const handleToggleItems = () => {
  showingAllItems = !showingAllItems;
  renderItems(showingAllItems);
  toggleItemsBtn.textContent = showingAllItems
    ? 'Mostrar menos'
    : 'Mostrar más';
};

// ============================================
// TODO 10: Event listeners
// ============================================

themeToggle.addEventListener('click', toggleTheme);
copyBtn.addEventListener('click', copyInfo);
toggleItemsBtn.addEventListener('click', handleToggleItems);
 
// ============================================
// TODO 11: Inicializar aplicación
// ============================================

const init = () => {
  loadTheme();
  renderBasicInfo();
  renderItems();
  renderLinks();
  renderStats();
 
  console.log('✅ E-commerce de libros usados inicializado correctamente');
};

init();

 
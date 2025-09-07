// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.getElementById('toggler');
    const navbar = document.querySelector('.navbar');
    const hamburgerLabel = document.querySelector('.hamburger-menu');

    // Test if elements exist
    console.log('Toggler:', toggler);
    console.log('Navbar:', navbar);
    console.log('Hamburger Label:', hamburgerLabel);

    // Ensure mobile menu works properly
    if (toggler && navbar) {
        toggler.addEventListener('change', function() {
            console.log('Toggler changed:', this.checked);
            if (this.checked) {
                navbar.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
                navbar.classList.add('active');
            } else {
                navbar.style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
                navbar.classList.remove('active');
            }
        });
    }

    // Close menu when clicking on links (mobile)
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && toggler) {
                toggler.checked = false;
                if (navbar) {
                    navbar.style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
                    navbar.classList.remove('active');
                }
            }
        });
    });
    
    const homeSection = document.getElementById('home-section');

    const perfumeBtn = document.getElementById('perfume-back-to-top');
    

window.addEventListener('scroll', () => {
    if (!homeSection || !perfumeBtn) return;

    const homeBottom = homeSection.offsetHeight;

    if (window.scrollY > homeBottom) {
        perfumeBtn.style.display = 'block'; // إظهار الزر بعد الخروج من Home
    } else {
        perfumeBtn.style.display = 'none'; // إخفاء الزر داخل Home
    }
});

    perfumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    const bottle = document.getElementById('perfume-bottle');
     bottle.addEventListener('click', () => {
    bottle.classList.toggle('open');
  });


    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            navbar && toggler &&
            !navbar.contains(e.target) && 
            !toggler.contains(e.target) &&
            !hamburgerLabel.contains(e.target)) {
            toggler.checked = false;
            navbar.style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
            navbar.classList.remove('active');
        }
    });

    // ================== وظيفة البحث ==================
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.getElementById('searchInput');
    const mobileSearchIcon = document.querySelector('.mobile-search-icon');
    const searchContainer = document.querySelector('.search-container');
    const searchResultsSection = document.getElementById("search-results");        // يطابق HTML
    const searchResults = document.getElementById("searchResultsContainer");       // يطابق HTML



    // بيانات العطور الكاملة
    const perfumes = [
        {
            id: 1,
            name: 'Chanel No. 5',
            price: 150,
            image: 'assets/Product-008-300x300.jpg',
            category: 'recommended',
            description: 'Classic and elegant feminine fragrance'
        },
        {
            id: 2,
            name: 'Dior Sauvage',
            price: 120,
            image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=300&h=300&fit=crop',
            category: 'popular',
            description: 'Modern and attractive masculine fragrance'
        },
        {
            id: 3,
            name: 'Tom Ford Oud Wood',
            price: 200,
            image: 'assets/Product-006-300x300.jpg',
            category: 'recommended',
            description: 'Luxury fragrance with woody notes'
        },
        {
            id: 4,
            name: 'Creed Aventus',
            price: 280,
            image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&h=300&fit=crop',
            category: 'popular',
            description: 'Distinguished and powerful masculine fragrance'
        },
        {
            id: 5,
            name: 'Yves Saint Laurent Black Opium',
            price: 110,
            image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop',
            category: 'recommended',
            description: 'Attractive and exciting evening fragrance'
        },
        {
            id: 6,
            name: 'Armani Code',
            price: 90,
            image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=300&h=300&fit=crop',
            category: 'popular',
            description: 'Elegant fragrance for daily use'
        },
        {
            id: 7,
            name: 'Versace Eros',
            price: 85,
            image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=300&h=300&fit=crop',
            category: 'recommended',
            description: 'Fresh and vibrant youthful fragrance'
        },
        {
            id: 8,
            name: 'Hugo Boss',
            price: 75,
            image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop',
            category: 'popular',
            description: 'Classic fragrance for the modern man'
        },
        {
            id: 9,
            name: 'Givenchy Gentleman',
            price: 140,
            image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&h=300&fit=crop',
            category: 'recommended',
            description: 'Luxury masculine fragrance with wood and spice notes'
        },
        {
            id: 10,
            name: 'Lancome La Vie Est Belle',
            price: 95,
            image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300&h=300&fit=crop',
            category: 'popular',
            description: 'Romantic feminine fragrance with vanilla notes'
        },
        {
            id: 11,
            name: 'Bulgari Aqua',
            price: 105,
            image: 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=300&h=300&fit=crop',
            category: 'recommended',
            description: 'Fresh fragrance inspired by the Mediterranean Sea'
        },
        {
            id: 12,
            name: 'Marc Jacobs Daisy',
            price: 88,
            image: 'assets/perfume-003.jpg',
            category: 'popular',
            description: 'Soft and fresh feminine floral fragrance'
        },
        {
            id: 13,
            name: 'Burberry Her',
            price: 130,
            image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&h=300&fit=crop',
            category: 'recommended',
            description: 'Elegant and refined British feminine fragrance'
        },
        {
            id: 14,
            name: 'Calvin Klein CK One',
            price: 65,
            image: 'assets/Product-008-300x300.jpg',
            category: 'popular',
            description: 'Modern unisex fragrance suitable for everyone'
        },
        {
            id: 15,
            name: 'Mont Blanc Legend',
            price: 95,
            image: 'assets/Product-004-300x300.jpg',
            category: 'recommended',
            description: 'Strong and attractive masculine fragrance for special occasions'
        },
        {
            id: 16,
            name: 'Elizabeth Arden Red Door',
            price: 70,
            image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=300&h=300&fit=crop',
            category: 'popular',
            description: 'Classic feminine fragrance from the famous lipstick brand'
        },
        {
            id: 17,
            name: 'Ted Baker',
            price: 80,
            image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=300&h=300&fit=crop',
            category: 'recommended',
            description: 'Elegant British fragrance with citrus notes'
        },
        {
            id: 18,
            name: 'Jean Paul Gaultier Le Male',
            price: 115,
            image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop',
            category: 'popular',
            description: 'Bold and distinctive masculine fragrance with unique design'
        },
        {
            id: 19,
            name: 'Issey Miyake',
            price: 125,
            image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&h=300&fit=crop',
            category: 'recommended',
            description: 'Clean and fresh Japanese fragrance inspired by nature'
        },
        
    ];

    // وظيفة البحث
   // وظيفة البحث
   function performSearch(searchTerm) {
    if (!searchTerm.trim()) {
      alert('⚠️ من فضلك أدخل كلمة للبحث');
      return;
    }
  
    const results = perfumes.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const homeSection = document.getElementById("home-section");
    const productsSection = document.getElementById("products-section");
    // مافي about-section في HTML، لذلك لا نستخدمه
  
    if (results.length > 0) {
      if (homeSection) homeSection.style.display = "none";
      if (productsSection) productsSection.style.display = "none";
  
      if (searchResultsSection && searchResults) {
        searchResultsSection.style.display = "block";
        searchResults.innerHTML = "";
        results.forEach(product => {
          const card = createProductCard(product);
          searchResults.appendChild(card);
        });
      }
    } else {
      alert('ℹ️ لم يتم العثور على نتائج مطابقة');
  
      if (homeSection) homeSection.style.display = "";
      if (productsSection) productsSection.style.display = "";
      if (searchResultsSection && searchResults) {
        searchResultsSection.style.display = "none";
        searchResults.innerHTML = "";
      }
  
      displayAllProducts();
    }
  
    if (searchInput) searchInput.value = "";
  }
  // ✅ الرجوع للصفحة الرئيسية عند الضغط على Home
const homeLink = document.querySelector('a[href="#home"]');
if (homeLink) {
  homeLink.addEventListener('click', function(e) {
    e.preventDefault(); // منع السلوك الافتراضي
    
    const homeSection = document.getElementById("home-section");
    const productsSection = document.getElementById("products-section");
    const searchResultsSection = document.getElementById("search-results");
    const searchResults = document.getElementById("searchResultsContainer");
    
    if (homeSection) homeSection.style.display = "";
    if (productsSection) productsSection.style.display = "";
    if (searchResultsSection && searchResults) {
      searchResultsSection.style.display = "none";
      searchResults.innerHTML = "";
    }

    // رجوع لأعلى الصفحة
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

    

    function showSearchMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `search-message ${type}`;
        messageDiv.textContent = message;
        searchContainer.appendChild(messageDiv);

        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 5000);
    }

    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            performSearch(searchInput.value.trim());
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value.trim());
            }
        });
        searchInput.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        searchInput.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    }

    if (mobileSearchIcon && searchContainer) {
        mobileSearchIcon.addEventListener('click', function(e) {
            e.preventDefault();
            if (searchContainer.style.display === 'none' || !searchContainer.style.display) {
                searchContainer.style.display = 'block';
                searchContainer.style.position = 'fixed';
                searchContainer.style.top = '8rem';
                searchContainer.style.left = '1rem';
                searchContainer.style.right = '1rem';
                searchContainer.style.zIndex = '1001';
                searchContainer.style.background = '#fff';
                searchContainer.style.padding = '1rem';
                searchContainer.style.borderRadius = '1rem';
                searchContainer.style.boxShadow = '0 0.5rem 2rem rgba(0,0,0,0.2)';
                setTimeout(() => searchInput.focus(), 100);
            } else {
                searchContainer.style.display = 'none';
            }
        });

        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 && 
                !searchContainer.contains(e.target) && 
                !mobileSearchIcon.contains(e.target)) {
                searchContainer.style.display = 'none';
            }
        });
    }

    // ================== السلة ==================
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }

    function displayProducts(products, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';
        products.forEach(product => {
            const productElement = createProductCard(product);
            container.appendChild(productElement);
        });
    }

    function createProductCard(product) {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-card';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    إضافة للسلة
                </button>
            </div>
        `;
        return productDiv;
    }

  
    function displayAllProducts() {
        // عرض أول 4 منتجات فقط في قسم Recommended
        const recommendedProducts = perfumes
            .filter(p => p.category === 'recommended')
            .slice(0, 3); // هنا أخذ أول 4 عناصر فقط
    
        const popularProducts = perfumes.filter(p => p.category === 'popular');
    
        displayProducts(recommendedProducts, 'recommended');
        displayProducts(popularProducts, 'popular');
    }
    

    function displayFilteredProducts(filteredProducts) {
        displayProducts(filteredProducts.filter(p => p.category === 'recommended'), 'recommended');
        displayProducts(filteredProducts.filter(p => p.category === 'popular'), 'popular');
    }

    window.addToCart = function(productId) {
        const product = perfumes.find(p => p.id === productId);
        if (!product) return;
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({...product, quantity: 1});
        }
        updateCartCount();
        updateCartDisplay();
        saveCartToLocalStorage();
        showCartMessage('تم إضافة المنتج للسلة!');
    };

    window.increaseQuantity = function(productId) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity += 1;
            updateCartCount();
            updateCartDisplay();
            saveCartToLocalStorage();
        }
    };

    window.decreaseQuantity = function(productId) {
        const item = cart.find(item => item.id === productId);
        if (item && item.quantity > 1) {
            item.quantity -= 1;
            updateCartCount();
            updateCartDisplay();
            saveCartToLocalStorage();
        }
    };

    window.removeFromCart = function(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartCount();
        updateCartDisplay();
        saveCartToLocalStorage();
    };

    window.clearCart = function() {
        cart = [];
        updateCartCount();
        updateCartDisplay();
        saveCartToLocalStorage();
    };

    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateCartDisplay() {
        const cartItems = document.getElementById('cartItems');
        const totalPrice = document.getElementById('totalPrice');
        if (!cartItems || !totalPrice) return;

        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            cartItemDiv.innerHTML = `
                <div class="cart-item-info">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>$${item.price}</p>
                    </div>
                </div>
                <div class="cart-item-controls">
                    <button onclick="decreaseQuantity(${item.id})" class="quantity-btn">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})" class="quantity-btn">+</button>
                    <button onclick="removeFromCart(${item.id})" class="remove-btn">حذف</button>
                </div>
            `;
            cartItems.appendChild(cartItemDiv);
        });

        totalPrice.textContent = total.toFixed(2);
    }

    function toggleCartSidebar() {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartOverlay = document.getElementById('cartOverlay');
    
        if (cartSidebar) {
            cartSidebar.classList.toggle('active');
            if (cartOverlay) {
                cartOverlay.classList.toggle('active');
            }
            updateCartDisplay();
        }
    }
    window.toggleCartSidebar = toggleCartSidebar;
    
    // ✅ إغلاق السلة عند الضغط على الـ Overlay
    const cartOverlay = document.getElementById("cartOverlay");
    if (cartOverlay) {
        cartOverlay.addEventListener("click", function () {
            const cartSidebar = document.getElementById("cartSidebar");
            cartSidebar.classList.remove("active");
            cartOverlay.classList.remove("active");
        });
    }
    
    const cartIcon = document.querySelector('.cart-wrapper');
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            toggleCartSidebar();
        });
    }

    function showCartMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'cart-message';
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 1rem;
            border-radius: 5px;
            z-index: 9999;
            animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(messageDiv);
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 3000);
    }

    // تحديث السنة في التذييل
    function updateFooterYear() {
        const yearSpan = document.getElementById('footerYear');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    // تهيئة الموقع
    function initializeWebsite() {
        displayAllProducts();
        updateCartCount();
        updateCartDisplay();
        updateFooterYear();
    }

    initializeWebsite();
});

  document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll("header .icons .icon-link");

    icons.forEach(icon => {
      icon.addEventListener("click", function (e) {
        e.preventDefault(); // يمنع الانتقال للرابط لو كان href="#"
        
        // إزالة التفعيل من باقي الأيقونات
        icons.forEach(i => i.classList.remove("active"));
        
        // تفعيل الأيقونة المضغوط عليها
        this.classList.add("active");
      });
    });
  });
  


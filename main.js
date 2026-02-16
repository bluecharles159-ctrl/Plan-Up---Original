const menuBtn = document.getElementById('menuBtn');
const menuPage = document.getElementById('menuPage');
const menuOverlay = document.getElementById('menuOverlay');

menuBtn.addEventListener('click', () => {
    menuPage.classList.add('show');
    menuOverlay.classList.add('show');
})
menuOverlay.addEventListener('click', () => {
    menuPage.classList.remove('show');
    menuOverlay.classList.remove('show');
})

const toGetListBtn = document.getElementById('toGetListBtn');
const toGetListPage = document.getElementById('toGetListPage');
//const backFromNotifications = document.getElementById('backFromNotifications');
const backFromPage = document.querySelectorAll('.back-btn');

function closePage() {
    notificationPage.classList.remove('show');
    toGetListPage.classList.remove('show');
}


toGetListBtn.addEventListener('click', () => {
    toGetListPage.classList.add('show');
    menuPage.classList.remove('show');
    menuOverlay.classList.remove('show');
})

backFromPage.forEach(arrow => {
    arrow.addEventListener('click', closePage);
})

const fab = document.getElementById("fab");
const fabMenu = document.getElementById("fabMenu");
const overlay = document.getElementById("fabOverlay");
const fabCamera = document.getElementById('fabCamera');

fab.addEventListener("click", () => {
    fab.classList.toggle("expanded");
    fabMenu.classList.toggle("expanded");
    fabCamera.classList.toggle('visible');
    overlay.classList.toggle("show");
});

/* Click outside closes */
overlay.addEventListener("click", () => {
    fab.classList.remove("expanded");
    fabMenu.classList.remove("expanded");
    overlay.classList.remove("show");
    fabCamera.classList.remove('visible');
});

fabCamera.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log(`Camera clicked`);
})

//Add item modal
/*const addItemModal = document.getElementById('addItemModal');
const closeAddItemModal = document.getElementById(
    'closeAddItemModal');
const cancelBtn = document.getElementById('cancelBtn');
const saveItemBtn = document.getElementById('saveItemBtn');
const addItem = document.getElementById('addItemBtn');

// You can trigger this from your FAB button
// For example, if you have an add button:
function openAddItemModal() {
    addItemModal.classList.add('show');
    fab.classList.remove("expanded");
    fabMenu.classList.remove("expanded");
    overlay.classList.remove("show");
    fabCamera.classList.remove('visible');
}

function closeModal() {
    addItemModal.classList.remove('show');
}

closeAddItemModal.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
addItemModal.addEventListener('click', (e) => {
    if (e.target === addItemModal) {
        closeModal();
    }
});

addItem.addEventListener('click', openAddItemModal);

// Save item (you'll implement the actual save logic)
saveItemBtn.addEventListener('click', () => {
    const itemName = document.getElementById('itemNameInput')
        .value;
    const category = document.getElementById('categorySelect')
        .value;
    const quantity = document.getElementById('quantityInput')
        .value;
    const price = document.getElementById('priceInput').value;
    
    console.log('Item added:', {
        itemName,
        category,
        quantity,
        price
    });
    
    // Clear inputs
    document.getElementById('itemNameInput').value = '';
    document.getElementById('quantityInput').value = '';
    document.getElementById('priceInput').value = '';
    
    //closeModal();
});

const itemHTML = `
  <div class="indie-item-info">
    <div class="item-times">
      <h3>Qty: ${quantity}</h3>
    </div>
    <div class="list-item-price">
      <h3>• $${price}</h3>
    </div>
  </div>
`;

// Find all category cards
const categoryCards = document.querySelectorAll('.category-card');

// Loop through them to find the matching category
categoryCards.forEach(card => {
  const categoryName = card.querySelector('.card-header').textContent.trim();
  
  if (categoryName.toLowerCase() === category.toLowerCase()) {
    // Found the right category!
    // Now find the item-list inside this card
    const itemList = card.querySelector('.item-list');
    
    // Add the new item to the list
    itemList.innerHTML += itemHTML;
  }
});*/

// Find all item cards
const cards = document.querySelectorAll('.item-card');

// Add click listener to each
cards.forEach(card => {
    card.addEventListener('click', function() {
        // Toggle the 'expanded' class on/off
        this.classList.toggle('expanded');
    });
});

/*function updateBudgetProgress() {
    const budgetCard = document.getElementById('budgetCard');
    const progressFill = document.getElementById('progressFill');
    const progressPercentage = document.getElementById(
        'progressPercentage');
    const progressStatus = document.getElementById('progressStatus');
    
    // Get values (you can replace these with actual calculations)
    const budget = parseFloat(document.getElementById('budgetValue')
        .textContent.replace('$', ''));
    const estimated = parseFloat(document.getElementById(
        'estimatesValue').textContent.replace('$', ''));
    
    // Calculate percentage spent
    const percentage = (estimated / budget) * 100;
    
    // Update progress bar width
    progressFill.style.width = `${Math.min(percentage, 100)}%`;
    
    // Update percentage text
    progressPercentage.textContent = `${Math.round(percentage)}%`;
    
    // Update status and card class based on percentage
    if (percentage < 70) {
        budgetCard.className = 'budget-card normal';
        progressStatus.textContent = 'On Track';
    } else if (percentage >= 70 && percentage < 100) {
        budgetCard.className = 'budget-card warning';
        progressStatus.textContent = 'Watch Spending';
    } else {
        budgetCard.className = 'budget-card over';
        progressStatus.textContent = 'Over Budget!';
    }
}

// Call on page load
updateBudgetProgress();*/

const addItemModal = document.getElementById('addItemModal');
const closeAddItemModal = document.getElementById(
    'closeAddItemModal');
const cancelBtn = document.getElementById('cancelBtn');
const saveItemBtn = document.getElementById('saveItemBtn');
const addItemBtn = document.getElementById('addItemBtn');

// Open modal
function openAddItemModal() {
    addItemModal.classList.add('show');
    
    // Close FAB menu
    if (typeof fab !== 'undefined') {
        fab.classList.remove("expanded");
        fabMenu.classList.remove("expanded");
        overlay.classList.remove("show");
        if (typeof fabCamera !== 'undefined') {
            fabCamera.classList.remove('visible');
        }
    }
}

// Close modal
function closeModal() {
    addItemModal.classList.remove('show');
}

closeAddItemModal.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);

// Close when clicking outside
addItemModal.addEventListener('click', (e) => {
    if (e.target === addItemModal) {
        closeModal();
    }
});

// Open modal when clicking add button
addItemBtn.addEventListener('click', openAddItemModal);

// ✅ SAVE ITEM - This is where the magic happens!
saveItemBtn.addEventListener('click', () => {
    // 1. Get values from the form
    const itemName = document.getElementById('itemNameInput')
        .value.trim();
    const category = document.getElementById('categorySelect')
        .value;
    const quantity = document.getElementById('quantityInput')
        .value;
    const price = parseFloat(document.getElementById(
        'priceInput').value);
    
    // 2. Validate inputs (make sure user filled everything)
    if (!itemName || !quantity || !price) {
        alert('Fill in all fields!');
        return;
        
        //document.getElementById('itemNameInput').value = '';
        document.getElementById('quantityInput').value = '';
    }
    
    // 3. Create the HTML for the new item
    const newItemHTML = `
        <div class="indie-item-info">
            <div class="item-times">
                <h3>Qty: ${quantity}</h3>
            </div>
            <div class="list-item-price">
                <h3>• $${price.toFixed(2)}</h3>
            </div>
        </div>
    `;
    
    // 4. Find the correct category card
    const categoryCards = document.querySelectorAll(
        '.category-card');
    let itemAdded = false;
    
    categoryCards.forEach(card => {
        // Get the category name from the card header
        const cardHeader = card.querySelector(
            '.card-header');
        const categoryNameElement = cardHeader
            .childNodes[
            2]; // The text node after the divs
        const categoryName = categoryNameElement
            .textContent.trim();
        
        // Check if this is the right category
        if (categoryName.toLowerCase() ===
            getCategoryDisplayName(category)
            .toLowerCase()) {
            // Find the item-list within this category
            const itemList = card.querySelector(
                '.item-list');
            
            if (itemList) {
                // Add the new item to the list
                itemList.insertAdjacentHTML(
                    'beforeend', newItemHTML);
                itemAdded = true;
                
                // Update the item count and total
                updateCategoryTotals(card);
            }
        }
    });
    
    // 5. If category doesn't exist, create a new category card
    if (!itemAdded) {
        createNewCategoryCard(category, itemName, quantity,
            price);
    }
    
    // 6. Update budget card
    updateBudgetProgress();
    
    // 7. Clear the form
    document.getElementById('itemNameInput').value = '';
    document.getElementById('quantityInput').value = '';
    document.getElementById('priceInput').value = '';
    
    // 8. Close the modal
    closeModal();
    
    console.log('✅ Item added successfully!');
});

// Helper function: Convert category value to display name
function getCategoryDisplayName(categoryValue) {
    const categoryMap = {
        // 'vegetables': 'Produce',
        // 'fruits': 'Produce',
        //   'protein': 'Meat',
        //'grains': 'Grains'
    };
    return categoryMap[categoryValue] || categoryValue;
}

// Helper function: Update totals in a category card
function updateCategoryTotals(card) {
    const itemList = card.querySelector('.item-list');
    const allPrices = itemList.querySelectorAll(
        '.list-item-price h3');
    
    let totalPrice = 0;
    let itemCount = 0;
    
    allPrices.forEach(priceElement => {
        // Extract price (remove "• $" and convert to number)
        const priceText = priceElement.textContent.replace(
            '• $', '');
        const price = parseFloat(priceText);
        totalPrice += price;
        itemCount++;
    });
    
    // Update the display
    const numOfItems = card.querySelector('#numOfItems');
    const totalItemPrice = card.querySelector('#totalItemPrice');
    
    if (numOfItems) numOfItems.textContent = `${itemCount} items`;
    if (totalItemPrice) totalItemPrice.textContent =
        `$${totalPrice.toFixed(2)}`;
}

// Helper function: Create a new category card if it doesn't exist
function createNewCategoryCard(category, itemName, quantity, price) {
    const categoryDisplayName = getCategoryDisplayName(category);
    
    const newCategoryHTML = `
        <div class="category-card">
            <div class="card-header">
                <div class="category-name"></div>
                ${categoryDisplayName}
                <div class="category-card-sort-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 48 48">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" 
                              stroke-linejoin="round" stroke-width="4"
                              d="M19 6v36M7 17.9l12-12m10 36.2v-36m0 36l12-12" />
                    </svg>
                </div>
            </div>
            <div class="item-card">
                <div class="item-image-card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256">
                        <path fill="currentColor" d="M82 56V24a6 6 0 0 1 12 0v32a6 6 0 0 1-12 0m38 6a6 6 0 0 0 6-6V24a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 0a6 6 0 0 0 6-6V24a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m94 58v8a38 38 0 0 1-36.94 38a94.55 94.55 0 0 1-31.13 44H208a6 6 0 0 1 0 12H32a6 6 0 0 1 0-12h30.07A94.34 94.34 0 0 1 26 136V88a6 6 0 0 1 6-6h176a38 38 0 0 1 38 38m-44 16V94H38v42a82.27 82.27 0 0 0 46.67 74h70.66A82.27 82.27 0 0 0 202 136m32-16a26 26 0 0 0-20-25.29V136a93 93 0 0 1-1.69 17.64A26 26 0 0 0 234 128Z" />
                    </svg>
                </div>
                <div class="item-info">
                    <div class="item-left">
                        <div class="item-name">
                            <h2>${itemName}</h2>
                            <div class="item-list">
                                <div class="indie-item-info">
                                    <div class="item-times">
                                        <h3>Qty: ${quantity}</h3>
                                    </div>
                                    <div class="list-item-price">
                                        <h3>• $${price.toFixed(2)}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-right">
                        <div class="item-details">
                            <h3 class="indie-item-details" id="numOfItems">1 items</h3>
                            <h3 class="indie-item-details" id="totalItemPrice">$${price.toFixed(2)}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add to the card container
    const cardContainer = document.querySelector('.card-container');
    cardContainer.insertAdjacentHTML('beforeend', newCategoryHTML);
    
    // Add click listener to the new card
    const newCard = cardContainer.lastElementChild.querySelector(
        '.item-card');
    newCard.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
}

const notificationBtn = document.getElementById('notificationBtn');
const notificationPage = document.getElementById('notificationPage');


notificationBtn.addEventListener('click', () => {
    notificationPage.classList.add('show');
});

backFromNotifications.addEventListener('click', closePage);

//Navigation
const homePage = document.getElementById("homePage");
const insightsPage = document.getElementById("insightsPage");
const profilePage = document.getElementById("profilePage");

document.getElementById("navInsights").onclick = () => {
    /* homePage.style.display = "none";*/
    insightsPage.style.display = "block";
    /*profilePage.style.display = "none";*/
    
    fab.classList.add('hide');
    
    insightsPage.classList.add('show');
    navInsights.classList.add('active');
    navMyItems.classList.remove('active');
    homePage.classList.add('hide');
    navProfiles.classList.remove('active');
    profilePage.classList.remove('show');
    
    closeModal();
};

document.getElementById("navProfiles").onclick = () => {
    homePage.style.display = "none";
    insightsPage.style.display = "none";
    profilePage.style.display = "block";
    
    fab.classList.add('hide');
    
    navProfiles.classList.add('active');
    profilePage.classList.add('show');
    navMyItems.classList.remove('active');
    homePage.classList.add('hide');
    navInsights.classList.remove('active');
    insightsPage.classList.remove('show');
    
    closeModal();
};

document.getElementById("navMyItems").onclick = () => {
    homePage.style.display = "block";
    /* insightsPage.style.display = "none";
     profilePage.style.display = "none";*/
    
    fab.classList.remove('hide');
    
    navMyItems.classList.add('active');
    homePage.classList.remove('hide');
    navInsights.classList.remove('active');
    insightsPage.classList.remove('show');
    navProfiles.classList.remove('active');
    profilePage.classList.remove('show');
};

/* Account */
const accountToggle = document.getElementById('accountToggle');
const accWrapper = document.querySelector('.acc-wrapper');

accountToggle.addEventListener('click', () => {
    accountToggle.classList.toggle('expanded');
    accWrapper.classList.toggle(
        'expanded'); // Toggle the wrapper, not userAccount
});
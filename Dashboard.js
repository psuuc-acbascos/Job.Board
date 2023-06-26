// Get references to the necessary elements
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const filterSelect = document.getElementById('filterSelect');
const tagsBar = document.getElementById('tagsBar');
const jobCount = document.getElementById('jobCount');
const viewAllLink = document.getElementById('viewAllLink');

// Event listeners
searchInput.addEventListener('input', handleSearch);
categorySelect.addEventListener('change', handleCategoryFilter);
filterSelect.addEventListener('change', handleFilter);
viewAllLink.addEventListener('click', handleViewAll);

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase(); // Convert search term to lowercase for case-insensitive comparison
    const jobCards = document.querySelectorAll('.job_card');
  
    jobCards.forEach((jobCard) => {
      const title = jobCard.querySelector('h2').textContent.toLowerCase();
      const company = jobCard.querySelector('.text span').textContent.toLowerCase();
  
      if (title.includes(searchTerm) || company.includes(searchTerm)) {
        jobCard.style.display = 'block'; // Show job card if it matches the search term
      } else {
        jobCard.style.display = 'none'; // Hide job card if it doesn't match the search term
      }
    });
  }
  
  function handleCategoryFilter(event) {
    const selectedCategory = document.getElementById('categorySelect').value;
    const jobCards = document.querySelectorAll('.job_card');
  
    jobCards.forEach((jobCard) => {
      const cardCategories = jobCard.getAttribute('data-category').split(' ');
  
      if (selectedCategory === 'Category' || cardCategories.includes(selectedCategory)) {
        jobCard.style.display = 'block'; // Show job card if it matches the selected category or "Category" is selected
      } else {
        jobCard.style.display = 'none'; // Hide job card if it doesn't match the selected category
      }
    });
  }
 

   function showJobCards(category) {
    // Hide all job cards initially
    var jobCards = document.getElementsByClassName('job_card');
    for (var i = 0; i < jobCards.length; i++) {
        jobCards[i].style.display = 'none';
    }

    // Show job cards with the specified category
    var selectedJobCards = document.querySelectorAll('[data-category="' + category + '"]');
    for (var j = 0; j < selectedJobCards.length; j++) {
        selectedJobCards[j].style.display = 'block';
    }
}
  

function handleFilter(event) {
  const filter = event.target.value;
  // Apply additional filter to job listings
  console.log('Selected filter:', filter);
}

function handleViewAll(event) {
  event.preventDefault();
  // Redirect to a page with all job listings
  console.log('View all jobs');
}
// Get all job cards
const jobCards = document.querySelectorAll(".job_card");



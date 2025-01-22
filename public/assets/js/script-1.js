document.addEventListener("DOMContentLoaded", function () {
  // Initialize FullCalendar
  const calendarEl = document.getElementById("calendar");
  if (calendarEl) {
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth", // 'dayGridMonth' view is default
      events: [
        { title: "Workout", start: "2025-01-20" },
        { title: "Meeting", start: "2025-01-21" },
      ],
    });
    calendar.render();
  } else {
    console.error("Calendar element not found");
  }

  // Initialize Chart.js
  const trendCtx = document.getElementById("trendChart");
  if (trendCtx) {
    new Chart(trendCtx.getContext("2d"), {
      type: "bar",
      data: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            label: "Calories (kcal)",
            data: [2000, 1900, 2100, 2200, 2300, 2000, 1950],
            borderColor: "#4CAF50",
            backgroundColor: "rgba(195, 25, 230, 0.2)",
            fill: true,
          },
          {
            label: "Proteins (g)",
            data: [150, 160, 145, 170, 180, 155, 165],
            borderColor: "#2196F3",
            backgroundColor: "rgba(117, 243, 14, 0.2)",
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  } else {
    console.error("Trend Chart element not found");
  }
});
// Array of meals to dynamically generate meal cards
const meals = [
  {
    name: "Greek Green Salad",
    image: "/public/assets/images/nutrition-blogs/food3.png",
    calories: "330Kal",
    protein: "60 g",
    fat: "100 g",
  },
  {
    name: "Grilled Chicken",
    image: "/public/assets/images/nutrition-blogs/food4.png",
    calories: "450Kal",
    protein: "80 g",
    fat: "120 g",
  },
  {
    name: "Veggie Delight",
    image: "/public/assets/images/nutrition-blogs/food5.png",
    calories: "280Kal",
    protein: "30 g",
    fat: "70 g",
  },
];

// Function to render meal cards dynamically with animation
function renderMealCards() {
  const mealCardsContainer = document.getElementById("meal-cards-container");

  // Add fade-out animation before switching content
  mealCardsContainer.classList.add("fade-out");
  setTimeout(() => {
    mealCardsContainer.innerHTML = ""; // Clear any existing cards

    meals.forEach((meal) => {
      const card = document.createElement("div");
      card.className =
        "meal-card bg-[#f1f4fd] rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105";
      card.innerHTML = `
        <img class="w-full h-[147px] object-cover rounded-t-lg" src="${meal.image}" alt="Meal Image" />
        <div class="p-4 text-center">
          <h3 class="text-lg font-semibold text-[#23272e]">${meal.name}</h3>
          <div class="bg-white p-3 mt-4 rounded-lg border border-[#f1f4fd]">
            <div class="flex justify-between py-2 border-b border-[#d8dded]/40">
              <span class="text-sm text-[#23272e]/80">Calories</span>
              <span class="px-2 rounded-md border border-[#553fde] text-[#553fde] text-sm">${meal.calories}</span>
            </div>
            <div class="flex justify-between py-2 border-b border-[#d8dded]/40">
              <span class="text-sm text-[#23272e]/80">Protein</span>
              <span class="px-2 rounded-md border border-[#de3fd7] text-[#de3fd7] text-sm">${meal.protein}</span>
            </div>
            <div class="flex justify-between py-2">
              <span class="text-sm text-[#23272e]/80">Fat</span>
              <span class="px-2 rounded-md border border-[#df166a] text-[#df166a] text-sm">${meal.fat}</span>
            </div>
          </div>
        </div>
      `;
      mealCardsContainer.appendChild(card);

      // Add click animation for individual meal cards
      card.addEventListener("click", () => {
        card.classList.add("clicked");
        setTimeout(() => card.classList.remove("clicked"), 300);
      });
    });

    // Add fade-in animation after new cards are rendered
    mealCardsContainer.classList.remove("fade-out");
    mealCardsContainer.classList.add("fade-in");
  }, 300); // Match this timeout to the fade-out animation duration
}

// Attach event listeners to tabs
document.querySelectorAll("[uk-tab] a").forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    renderMealCards(); // Render cards when a tab is clicked
  });
});

// Initial render on page load
renderMealCards();

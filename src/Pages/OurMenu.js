// src/components/OurMenu.js
import React from "react";
import MenuItem from "../components/MenuItem";
import proteinBowlImage1 from "../images/HOTHONEYCHICKEN.jpg";
import proteinBowlImage2 from "../images/Shroomami.jpg";
import proteinBowlImage3 from "../images/HarvestBowlAlmonds.jpg";
import proteinBowlImage4 from "../images/Crispy-Rice-Bowl.jpg";
import proteinBowlImage5 from "../images/CickenAvocadoRanch.jpg";
import saladImage1 from "../images/SuperGreenGoddess.jpg";
import saladImage2 from "../images/HummusCrunch.jpg";
import saladImage3 from "../images/GuacGreens.jpg";
import saladImage4 from "../images/GardenCobb.jpg";
import wrapImage1 from "../images/the-greek-wrap.webp";
import wrapImage2 from "../images/santa-fe-wrap.webp";
import wrapImage3 from "../images/crispy-chicken-ranch-wrap.webp";
import wrapImage4 from "../images/sesame-ginger-chicken-wrap.webp";
import iceCreamImage1 from "../images/chocolateIceCream.webp";
import iceCreamImage2 from "../images/bluberryIceCream.png";
import iceCreamImage3 from "../images/myproteinIcecream.jpg";
import shakeImage1 from "../images/Acai-protein-smoothie.png";
import shakeImage2 from "../images/avacado-protein-smoothie.png";
import shakeImage3 from "../images/Choc-PntBtr-shake.png";

const OurMenu = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Menu</h2>

      {/* Protein Bowls Section */}

      <section className="mb-12">
        <h3 className="text-3xl font-bold mb-8 mt-4">Protein Bowls</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <MenuItem
            name="SHROOMAMI"
            image={proteinBowlImage2}
            description="Roasted tofu, warm portobello mix, cucumbers, basil, shredded cabbage, roasted almonds, wild rice, shredded kale, miso sesame ginger dressing."
            nutritionInfo={{ calories: 600, protein: 21, carbs: 49, fat: 27 }}
          />
          <MenuItem
            name="HARVEST BOWL"
            image={proteinBowlImage3}
            description="Roasted tofu, roasted sweet potatoes, apples, goat cheese, roasted almonds, wild rice, shredded kale, balsamic vinaigrette."
            nutritionInfo={{ calories: 685, protein: 38, carbs: 63, fat: 32 }}
          />
          <MenuItem
            name="Grilled Chicken Bowl"
            image={proteinBowlImage1}
            description="Herb roasted chicken, warm roasted sweet potatoes, veg slaw, crispy onions, herbed quinoa, hot honey mustard sauce."
            nutritionInfo={{ calories: 855, protein: 49, carbs: 72, fat: 36 }}
          />
          <MenuItem
            name="CRISPY RICE BOWL"
            image={proteinBowlImage5}
            description="Crispy chicken, raw carrots, shredded cabbage, cucumbers, cilantro, roasted almonds, crispy rice, wild rice, arugula, lime squeeze, spicy cashew."
            nutritionInfo={{ calories: 600, protein: 31, carbs: 60, fat: 24 }}
          />
          <MenuItem
            name="CHICKEN AVOCADO RANCH"
            image={proteinBowlImage4}
            description="Roasted chicken, avocado, pickled onions, apples, tortilla chips, white rice, chopped romaine, green goddess ranch."
            nutritionInfo={{ calories: 690, protein: 32, carbs: 60, fat: 29 }}
          />
          {/* Add more MenuItem components for other protein bowls */}
        </div>
      </section>

      {/* Salads Section */}

      <section className="mb-12">
        <h3 className="text-3xl font-bold mb-8">Salads</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <MenuItem
            name="SUPER GREEN GODDESS"
            image={saladImage1}
            description="Chickpeas, roasted sweet potatoes, raw carrots, spicy broccoli, shredded cabbage, roasted almonds, baby spinach, shredded kale, green goddess ranch."
            nutritionInfo={{ calories: 415, protein: 12, carbs: 37, fat: 24 }}
          />
          <MenuItem
            name="AVOCADO GUACAMOLE SALAD"
            image={saladImage3}
            description="Roasted chicken, avocado, tomatoes, red onions, shredded cabbage, tortilla chips, spring mix, chopped romaine, lime squeeze, lime cilantro jalapeño vinaigrette."
            nutritionInfo={{ calories: 515, protein: 28, carbs: 27, fat: 29 }}
          />{" "}
          <MenuItem
            name="GARDEN COBB"
            image={saladImage4}
            description="Avocado, hard boiled egg, roasted sweet potatoes, tomatoes, red onions, blue cheese, roasted almonds, spring mix, chopped romaine, balsamic vinaigrette."
            nutritionInfo={{ calories: 675, protein: 24, carbs: 37, fat: 45 }}
          />
          <MenuItem
            name="HUMMUS CRUNCH"
            image={saladImage2}
            description="Hummus, olives, chickpeas, tomatoes, cucumbers, shredded cabbage, red onions, basil, za’atar breadcrumbs, chopped romaine, shredded kale, pesto vinaigrette."
            nutritionInfo={{ calories: 380, protein: 13, carbs: 38, fat: 21 }}
          />
          {/* Add more MenuItem components for other salads */}
        </div>
      </section>

      {/* Wraps Section */}

      <section className="mb-12">
        <h3 className="text-3xl font-bold mb-8">Wraps</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <MenuItem
            name="The Greek Wrap"
            image={wrapImage1}
            description="Romaine, Chickpeas, English Cucumber, Grape Tomatoes, SIMPLi Olives, Feta, Pita Chips."
            nutritionInfo={{ calories: 430, protein: 18, carbs: 22, fat: 15 }}
          />
          <MenuItem
            name="Santa Fe Wrap"
            image={wrapImage2}
            description="Romaine, Avocado, Corn, Grape Tomatoes, Pepper Jack Cheese, Crispy Shallots."
            nutritionInfo={{ calories: 455, protein: 15, carbs: 20, fat: 12 }}
          />
          <MenuItem
            name="Crispy Chicken Ranch Wrap"
            image={wrapImage3}
            description="Romaine, Fried Chicken, Carrots, Corn, Grape Tomatoes, Pickled Red Onion, Pepper Jack Cheese."
            nutritionInfo={{ calories: 690, protein: 24, carbs: 36, fat: 14 }}
          />
          <MenuItem
            name="SESAME GINGER CHICKEN WRAP"
            image={wrapImage4}
            description="Romaine, Spinach, Grilled Chicken, Carrots, Pickled Red Onion, Roasted Broccoli, Roasted Almonds."
            nutritionInfo={{ calories: 645, protein: 27, carbs: 38, fat: 12 }}
          />
        </div>
      </section>

      {/* Smoothies Section */}
      <section className="mb-12">
        <h3 className="text-3xl font-bold mb-8">Protein Shakes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <MenuItem
            name="Acai Protein Smoothie"
            image={shakeImage1}
            description="Indulge in the rich flavor of chocolate with our signature smoothie."
            nutritionInfo={{ calories: 200, protein: 25, carbs: 15, fat: 8 }}
          />
          <MenuItem
            name="Berry Burst Shake"
            image={shakeImage2}
            description="A delightful blend of avocados to give you a refreshing protein boost."
            nutritionInfo={{ calories: 180, protein: 22, carbs: 18, fat: 7 }}
          />
          <MenuItem
            name="Peanut Butter Banana Smoothie"
            image={shakeImage3}
            description="Indulge in the rich flavor of chocolate with our signature smoothie."
            nutritionInfo={{ calories: 200, protein: 25, carbs: 15, fat: 8 }}
          />
        </div>
      </section>

      {/* Ice Cream Section */}
      <section className="mb-12">
        <h3 className="text-3xl font-bold mb-8">Protein Ice Creams</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <MenuItem
            name="Protein Ice-cream"
            image={iceCreamImage3}
            description="Fulfil your cravings with this nutritious high protein salted caramel ice-cream."
            nutritionInfo={{ calories: 220, protein: 10, carbs: 9, fat: 12 }}
          />
          <MenuItem
            name="Protein Ice-cream"
            image={iceCreamImage2}
            description="Fuel your hunger with this nutritious sugar-free blueberry ice-cream."
            nutritionInfo={{ calories: 180, protein: 7, carbs: 4, fat: 9 }}
          />
          <MenuItem
            name="Protein Ice-cream"
            image={iceCreamImage1}
            description="Indulge with this nutritious sugar and gluten free choclate ice-cream."
            nutritionInfo={{ calories: 210, protein: 10, carbs: 7, fat: 10 }}
          />
        </div>
      </section>
    </div>
  );
};

export default OurMenu;

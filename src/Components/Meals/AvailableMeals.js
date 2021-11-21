import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Chicken Biryani',
    description: 'A spiced mix of chicken and rice, traditionally cooked over an open fire in a leather pot',
    price: 200,
  },
  {
    id: 'm2',
    name: 'Chicken Butter Masala',
    description: 'An amalgamation of Punjabi dishes with spices and flavor',
    price: 300,
  },
  {
    id: 'm3',
    name: 'Paneer Butter Masala',
    description: 'Creamy and spicy paneer dish',
    price: 250,
  },
  {
    id: 'm4',
    name: 'Naan',
    description: 'A leavened flat bread originating from northern India',
    price: 40,
  },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  
    return (
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    );
  };
  
  export default AvailableMeals;
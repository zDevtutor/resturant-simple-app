import React, { useState, useReducer, useEffect } from "react";

const initialOrderState = {
  category: null,
  meal: null,
  quantity: 0,
  combo: false,
  spicy: false,
  totalPrice: 0
}

function orderReducer(state, action) {
  switch (action.type) {
    case 'CATEGORY_CHANGE':
      return {...state, category: action.payload };
    case 'MEAL_CHANGE': 
      return {...state, meal: action.payload };
    case 'QUANTITY_CHANGE':
      return {...state, quantity: +action.payload };
    case 'COMBO_CHANGE':
      return {...state, combo: action.payload };
    case 'SPICY_CHANGE':
      return {...state, spicy: action.payload };
    case 'TOTAL_PRICE_CHANGE':
      return {...state, totalPrice: action.payload }
    case 'CLEAR_FORM':
      return {...state, initialOrderState }
    default:
      return state;
  }
}



const categoriesData = [{id: '1', name: 'Foods'}, {id: '2', name: 'Burger'}, {id: '3', name: 'Pizza'}]
const mealsData = [{id: '11', categoryId: '1', name: 'Meat', price: '100'}, 
{id: '12', categoryId: '1', name: 'Cheese', price: '200'},
 {id: '13', categoryId: '2', name: 'Tuna', price: '300'},{id: '14', categoryId: '2', name: 'Mushroom', price: '400'},
 {id: '15', categoryId: '3', name: 'BBQ Sauce', price: '500'},{id: '16', categoryId: '3', name: 'Chicken', price: '600'}]

const  Order = () =>  {
  const [orderData, orderDispatch] = useReducer(orderReducer, initialOrderState);
  console.log('orderData', orderData)
  const [categories, setCategories] = useState(categoriesData);
  const [meals, setMeals] = useState(mealsData);
  const [filteredMeals, setFilteredMeals] = useState([]);


  useEffect(()=> {
    handleCalculateTotalPrice();
  }, [orderData.meal, orderData.quantity, orderData.combo, orderData.spicy ]);
 
  const handleOrderCategoryChange = (e) => {
    console.log('handleOrderCategoryChange', e?.target.value);
    orderDispatch({ type: 'CATEGORY_CHANGE', payload: e?.target.value });
    const filteredMeals = meals.filter((meal) => meal?.categoryId === e?.target.value);
    console.log('filteredMeals', filteredMeals);
    setFilteredMeals(filteredMeals);
  }

  const handleOrderMealChange = (e) => {
    console.log('handleOrderCategoryChange', e?.target.value);
    orderDispatch({ type: 'MEAL_CHANGE', payload: e?.target.value });
  }

  const handleOrderQuantityChange = (e) => {
    console.log('handleOrderCategoryChange', e?.target.value);
    orderDispatch({ type: 'QUANTITY_CHANGE', payload: e?.target.value });
  }

  const handleOrderCumboChange = (e) => {
    console.log('handleOrderCategoryChange', e?.target);
    orderDispatch({ type: 'COMBO_CHANGE', payload: !orderData.combo });
  }

  const handleOrderSpicyChange = (e) => {
    console.log('handleOrderCategoryChange', e?.target.value);
    orderDispatch({ type: 'SPICY_CHANGE', payload: !orderData.spicy });
  }

  const handleCalculateTotalPrice = () => {
    const selectedMeal = meals.find((meal) => meal.id === orderData.meal);
    console.log('selectedMeal', selectedMeal);
    let totalPrice = 0;
    if(orderData.quantity > 0 ){
      console.log('quantity', selectedMeal?.price * orderData.quantity);
      totalPrice = selectedMeal?.price * orderData.quantity;
    }
    else{
      totalPrice = selectedMeal?.price ;
    }

    if(orderData.combo){
      totalPrice += 2 ;
    }

    if(orderData.spicy){
      totalPrice += 1 ;
    }

    orderDispatch({ type: 'TOTAL_PRICE_CHANGE', payload: totalPrice });

  }

    return (
      <form className="py-4">
        <div className="row gx-5 border p-4">
          <div className="col-md-4">
            <div className="mb-3">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e)=> handleOrderCategoryChange(e)}
              >
                <option selected disabled>
                  Choose Meal Category
                </option>
                {categories.map((category, index) => {
                  return (
                    <option key={index+category?.id} value={category?.id}>{category?.name}</option>
                  )
                })}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                aria-label="Default select example"
                disabled={orderData?.category ? false : true}
                onChange={(e)=> handleOrderMealChange(e)}
              >
                <option selected disabled>
                  Choose Meal
                </option>
                {filteredMeals.map((meal, index) => {
                  return (
                    <option value={meal?.id} key={index+meal?.id}>{meal?.name}</option>
                  )
                })}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="mealName" className="form-label">
                Q
              </label>
              <input type="number" className="form-control" id="mealName" onChange={(e)=> handleOrderQuantityChange(e)}/>
            </div>
          </div>
          <div className="col-md-4 align-self-center">
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="combo"
                  onChange={(e)=> handleOrderCumboChange(e)}
                />
                <label className="form-check-label" htmlFor="combo">
                  Combo - add 2LE
                </label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="spicy"
                  onChange={(e)=> handleOrderSpicyChange(e)}
                />
                <label className="form-check-label" htmlFor="spicy">
                  Spicy - add 1LE
                </label>
              </div>
            </div>
            <h2>{orderData?.totalPrice + ' '}Price LE</h2>
          </div>
          <div className="col-md-4 align-self-end">
            <button type="submit" className="btn w-100 btn-lg btn-primary">
              Save
            </button>
          </div>
        </div>
      </form>
    );
  }

export default Order;

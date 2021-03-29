import React, { useState, useReducer, useEffect } from "react";
import axios from "axios";

const initialMailState = {
  name: "",
  price: 0,
  description: "",
  category: "",
  photo: "no-photo.png",
};

function mealReducer(state, action) {
  switch (action.type) {
    case "NAME_CHANGE":
      return { ...state, name: action.payload };
    case "PRICE_CHANGE":
      return { ...state, price: +action.payload };
    case "DESCRIPTION_CHANGE":
      return { ...state, description: action.payload };
    case "CATEGORY_CHANGE":
      return { ...state, category: action.payload };
    case "IMAGE_CHANGE":
      return { ...state, photo: action.payload };
    default:
      return state;
  }
}

const Meal = () => {
  const [mealData, mealDispatch] = useReducer(mealReducer, initialMailState);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/categories").then((response) => {
      console.log("categories response", response);
      setCategories(response.data.data);
    });
  }, []);

  const handleMailNameChange = (e) => {
    console.log("handleMailNameChange", e?.target.value);
    mealDispatch({ type: "NAME_CHANGE", payload: e?.target.value });
  };

  const handleMailPriceChange = (e) => {
    console.log("handleMailNameChange", e?.target.value);
    mealDispatch({ type: "PRICE_CHANGE", payload: e?.target.value });
  };

  const handleDescriptionChange = (e) => {
    console.log("handleMailNameChange", e?.target.value);
    mealDispatch({ type: "DESCRIPTION_CHANGE", payload: e?.target.value });
  };

  const handleMailCategoryChange = (e) => {
    mealDispatch({ type: "CATEGORY_CHANGE", payload: e?.target.value });
  };

  const handleCreateMailSubmit = async (e) => {
    e.preventDefault();
    console.log("mealData", mealData);

    const headers = {
      "Content-Type": "application/json",
    };

    axios.post(
      "http://localhost:5000/api/v1/meals",
      {
        category: "60621d7ae170c22f5853cbfb",
        photo: "photo1.jpg",
        name: "meal 133333333",
        price: 10,
        description: "meal 1 desc",
      },
      {
        headers: headers,
      }
    );
  };

  return (
    <form className="py-4" onSubmit={handleCreateMailSubmit}>
      <div className="row gx-5">
        <div className="col-lg-8 col-md-7">
          <div className="mb-3">
            <label htmlFor="mealName" className="form-label required">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="mealName"
              onChange={(e) => handleMailNameChange(e)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mealName" className="form-label required">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="mealPrice"
              onChange={(e) => handleMailPriceChange(e)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mealDescription" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              name="desc"
              id="mealDescription"
              cols="30"
              rows="10"
              required
              onChange={(e) => handleDescriptionChange(e)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label required">Category</label>
            <select
              className="form-select"
              aria-label="Default select example"
              required
              onChange={(e) => handleMailCategoryChange(e)}
            >
              <option selected disabled>
                Choose Meal Category
              </option>
              {categories.map((category, index) => {
                return (
                  <option key={index + category?._id} value={category?._id}>
                    {category?.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="col-lg-4 col-md-5">
          <div className="img-box mb-3">
            <img src="../.././img/no-photo.png" alt="meal placeholder" />
          </div>
          <div className="mb-3">
            <input type="file" className="form-control" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <button type="submit" className="btn w-25 btn-lg btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Meal;

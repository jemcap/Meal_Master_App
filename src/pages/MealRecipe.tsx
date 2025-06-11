import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchRecipeInstructions } from '@/lib/api';

const MealRecipe = () => {
    const { id } = useParams();
    const location = useLocation()
    const meal = location.state
    console.log(id);
    console.log(meal)

    const { data: meals, isLoading, error } = useQuery({
      queryKey: ["recipe", id],
      queryFn: () => fetchRecipeInstructions(id as string),
      enabled: !!id
    })

    console.log(meals)

    if (isLoading) return <p>Loading recipe...</p>
    if (error) return <p>Error: {error.message}</p>


    return (
      <div className='mt-24 align-elements'>{meal.title}</div>
    );
}

export default MealRecipe
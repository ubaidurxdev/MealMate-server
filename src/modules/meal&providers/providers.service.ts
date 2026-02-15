import { prisma } from "../../lib/prisma"

const getAllMeals = async()=>{
    return await prisma.meal.findMany()
}

const getMealsById = async(id:string)=>{
    return await prisma.meal.findMany({
        where : {
            id
        }
    })
}

export const providerService = {
    getAllMeals,
    getMealsById
}
import { prisma } from "../../lib/prisma"

const createMeals = async(data : Record<string,any>)=>{
    await prisma.meal.create({
        data 
    })
}
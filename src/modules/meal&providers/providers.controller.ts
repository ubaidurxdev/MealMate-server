import { NextFunction, Request, Response } from "express";
import { providerService } from "./providers.service";

const getAllMeals = async(req:Request,res:Response,next:NextFunction)=>{
    try {
      const result = await providerService.getAllMeals()  
      res.status(200).json({
        success : true,
        message : "Fetched all meals",
        data : result
      })
    } catch (error) {
        next(error)
    }
}

export const providerController = {
    getAllMeals
}
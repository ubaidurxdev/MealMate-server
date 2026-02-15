import { NextFunction, Request, Response } from "express";
import { ordersService } from "./orders.service";


const getAllOrders = async(req:Request,res:Response,next : NextFunction)=>{
  try {
    const result = await ordersService.getAllOrders()
    res.status(200).json({
      success : true,
      message : "Fetched all orders",
      data : result
    })
  } catch (error) {
    next(error)
  }
}

const getOrderById = async(req:Request,res:Response,next : NextFunction)=>{
  const {id} = req.params
  try {
    const result = await ordersService.getOrderById(id as string)
    res.status(200).json({
      success : true,
      message : "Fetched order by id",
      data  :result
    })
  } catch (error) {
    next(error)
  }
}

const createOrders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id as string;
    console.log(userId);
    const result = await ordersService.createOrders(userId, req.body);
    res.status(201).json({
      success: true,
      message: "Order created successfully ",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ordersController = {
  createOrders,
  getAllOrders,
  getOrderById
};

/*
  Warnings:

  - A unique constraint covering the columns `[cartId,mealId]` on the table `CartItem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderId,mealId]` on the table `OrderItem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CartItem_cartId_mealId_key" ON "CartItem"("cartId", "mealId");

-- CreateIndex
CREATE UNIQUE INDEX "OrderItem_orderId_mealId_key" ON "OrderItem"("orderId", "mealId");

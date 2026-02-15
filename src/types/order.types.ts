export interface orderDTO {
  userId: string;
  totalAmount: number;
  paymentMethod: string;
  deliveryNote?: string;
}

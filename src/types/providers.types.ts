export interface providerDTO {
  userId: string;
  restaurant: string;
  description?: string;
  logoUrl?: string;
  address: string;
  isOpen: ProviderRestaurantStats;
}

enum ProviderRestaurantStats {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}
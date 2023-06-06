export class OrderDetais {
  public number: string;
  public data: Date;
  public status: string;
  public total: number;
  public discount: number;
  public deliveryFree: number;
  public customer: {
    name: string;
  };
  public items: [
    {
      code: string;
      title: string;
      price: number;
    }
  ];
}

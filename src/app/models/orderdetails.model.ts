export class OrderDetais {
  public number: string;
  public date: Date;
  public status: string;
  public total: number;
  public discount: number;
  public deliveryFee: number;
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

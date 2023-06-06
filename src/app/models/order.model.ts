export class Order {
  public number: string;
  public date: string;
  public status: string;
  public total: number;
  public customer: {
    name: string;
  };
}

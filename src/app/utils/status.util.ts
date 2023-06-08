export class StatusUtil {
  public static convert(status: string): string {
    switch (status) {
      case 'confirmed':
        return 'Confirmada';
      case 'canceled':
        return 'Cancelada';
      case 'waiting_payment':
        return 'Aguardando Pagamento';
      case 'in_transit':
        return 'E, Trânsito';
      case 'completed':
        return 'Finalizada';
      default:
        return 'Confirmada';
    }
  }
}

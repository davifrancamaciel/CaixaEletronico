export class Alert {
  constructor(
    public readonly aletType: AlertType,
    public readonly message: string
  ) { }


}
export enum AlertType {
  SUCCESS,
  WARNING,
  DANGER,
  INFO
}

export class Config {
  goback: boolean;
  size: number;
  showpage: boolean;

  constructor(data: any) {
    data = data || {};
    this.goback = data.back;
    this.size = data.size;
    this.showpage = data.page;
  }
}

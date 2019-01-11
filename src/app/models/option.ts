export class Option {
  id: number;
  name: string;
  isAnswer: string;
  selected: boolean;

  constructor(data: any) {
    data = data || {};
    this.id = data.id;
    this.name = data.label;
    this.isAnswer = data.validity;
    console.log("the answer is" + this.isAnswer);
  }
  parse(response) {
    if (response === "valid") {
      return true;
    } else return false;
  }
}

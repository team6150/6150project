export class Contact {

  constructor(
    public id: number,
    public name: string,
    public email: string,
    public address: string,
    public comments: string
  ) {  }

}

export class comment {
  constructor(name: string, comments: string) {}
}

class Machine {
  static readonly power: number = 200;
// static readonly power

  GetPower(): string {
    // `Machine.` , not `this.`
    return Machine.power + "A"
  }
}

// Static properties available only via the `classname.staticProperty` construction.

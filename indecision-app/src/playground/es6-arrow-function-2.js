const add = (a, b) => {
  return a + b;
}

console.log(add(55, 1));

const user = {
  name: "Andrew",
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    const cityMessages = this.cities.map((city) => this.name + ' has lived in ' + city);
    return cityMessages;
  }
}

console.log(user.printPlacesLived());

const multiplier = {
  // numbers - array of numbers
  numbers: [10, 20, 30],
  // multiplyBy - single number
  multiplyBy: 10,
  // multiply - return new array where numbers have been multipled
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  }
}

console.log(multiplier.multiply());

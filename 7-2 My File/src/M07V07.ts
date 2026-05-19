//! static: kono akta class er kono property or method k different jyaga theke niye ak serial a rakha k static kora bole

//* Example : 01 This is a dynamic count

class Counter0 {
    count: number = 0;
    increment() {
        return (this.count = this.count + 1);
    }
    decrement() {
        return (this.count = this.count - 1);
    }
}
// const instance1 = new Counter0(); // ekta memory
// console.log(instance1.increment()); // 1
// console.log(instance1.increment()); // 1 >> 2
// console.log(instance1.increment()); // 2 >>> 3

// const instance2 = new Counter0(); // rekta different
// console.log(instance2.increment()); //1
// console.log(instance2.increment()); // 2

//* Example : 02 This is a static count

class Counter {
    static count: number = 0; // static

    static increment() {
        return (Counter.count = Counter.count + 1);
    }
    static decrement() {
        return (Counter.count = Counter.count - 1);
    }
}

// const instance1 = new Counter(); // ekta memory
// console.log(instance1.increment()); // 1
// console.log(instance1.increment()); // 1 >> 2
// console.log(instance1.increment()); // 2 >>> 3

// const instance2 = new Counter(); // rekta different
// console.log(instance2.increment()); //1
// console.log(instance2.increment()); // 2

// const instance3 = new Counter();
// console.log(instance3.increment());
// console.log(instance3.increment());
// console.log(instance3.increment());
// console.log(instance3.increment());
// console.log(instance3.increment());

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.decrement());
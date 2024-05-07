{


    //! static when it is used it works as premium of the class


    class Counter {
        //~ count1: number = 0;
        static count: number = 0;


    static increment() {
        //~ return (this.count1 = this.count1 + 1);
        return (Counter.count = Counter.count + 1);
    }

    decrement() {
        //~ return (this.count1 = this.count1 - 1);
        return (Counter.count = Counter.count - 1);
    }
}

const instance1 = new Counter();
// console.log(instance1.increment()) ///^-----------> different memory;
// console.log(instance1.increment()) //& works without using static in before of increment() method.

const instance2 = new Counter();
// console.log(instance2.increment())  ///^-----------> different memory;
// console.log(instance2.increment())  //& works without using static in before of increment() method.


// * as static is use before increment() method, so increment() method is not more individual property. it becomes class Counter's own method so it can access by it's class name
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());














    // 
}
class Goose {

    //Arrays of Objects
    #deviceList = [];
    #subscriptionList = [];
    #taskList = [];

    // constructor(deviceList, subscriptionList) {
    //     this.#deviceList = deviceList;
    //     this.#subscriptionList = subscriptionList;
    // }

    constructor() {
        console.log('GOOSE Message system has been initialized!');
    }

    get devices() {
        return this.#deviceList;
    }

    get subscriptions() {
        return this.#subscriptionList;
    }

    get tasks() {
        return this.#taskList;
    }

    static createTask(taskId, subtasksList) {
        let newTask = {
            taskId: taskId,
            subtasksList: subtasksList
        }
        this.#taskList.push(newTask);
    }

    static newDevice(deviceId) {
        let newDevice = {
            deviceId: deviceId
        }
        this.#deviceList.push(newDevice);
    }

    /*
        Func:
            static subscribe(params) { ... }

        Params:
            SubscriptionId : ID
            Output: ID
            Input: ID

        Description:
            Subscribes one output device to another input device,
            returning in result a new message
    */
    static subscribe(subscriptionId, output, input) {
        let subscription = {
            subscriptionId: subscriptionId,
            output: output,
            input: input
        }
        this.#subscriptionList.push(subscription);
    }

    static checkSubscription(subscriptionId) {

    }
}


module.exports = class Task 
{   
    static STATUS_PENDING() {
        return 0
    }

    static STATUS_IN_PROGRESS() {
        return 1
    }

    static STATUS_DONE() {
        return 2
    }


    constructor(){
        this.description = ''
        this.status = 0
        this.createdAt = new Date
    }

    setStatus (e) {
        this.status = e
    }

    is (status) {
        return this.status === status
    }



}


const Node = require('./node');

class LinkedList {
    constructor() {
        this.length=0;
        this._head=null;
        this._tail=null;
    }

    append(data) {

        var node = new Node(data);

        if(this.length){
            this._tail.next=node;
            node.prev=this._tail;
            this._tail=node;
        }
        else{
            this._tail=node;
            this._head=node;
        }

        this.length++;

        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var i = 1;
        var current = this._head;

        while(i++ <= index){
            current=current.next;
        }

        return current.data;
    }

    insertAt(index, data) {

        var node = new Node(data);
        var i = 1;
        var current = this._head;


        while(i++ <= index){
            current = current.next;
            current.prev.next = node;
            node.prev = current.prev;
            node.prev = node;
            node.next = current;
        }

        return this;
    }

    isEmpty() {
        return !this.length;
    }

    clear() {
        this.length=0;
        this._head.data=null;
        this._tail.data=null;

        return this;
    }

    deleteAt(index) {

        if(this.length <= 1)
            return this;

        var i = 1;
        var current = this._head;

        while(i++ <= index){
            current = current.next;
        }

        var prev = current.prev;
        var next = current.next;
        prev.next = next;
        next.prev = prev;

        return this;
    }

    reverse() {

        var current = this._tail;
        this._head = current;

        for(var i = 0; i < this.length; i++){

            var next = current.next;
            current.next = current.prev;
            current.prev = next;

            if(current.next){
                current = current.next;
            }
        }

        this._tail = current;

        return this;

    }

    indexOf(data) {

        var current = this._head;


        for(var i = 0; i < this.length; i++){

            if(current.data === data){
                return i;
            }
            current = current.next;
        }

        return -1;
    }
}

module.exports = LinkedList;


function Node(value){
    this.value = value;
    this.next = null;
}
function SLList() {
    this.head = null;
    this.display = function () {
        var current = this.head;
        var string = "Node values: ";
        while (current.next) {
          string += current.value + ", ";
          current = current.next;
        }
        string += current.value;
        console.log(string);
        return this;
    }
}

SLList.prototype.splitOnValue = function(value){
    var back = this.head;
    var prev = this.head;
    var front = prev.next;
    if(!this.head || this.head.value == value){
        return this;
    }
    while(front != null || front != value){
        front = front.next;
        back = back.next;
    }
    if(front.value == value){
        var temp = this.head;
        temp.head = front;
        back.next = null;
        return temp;
    }else{
        return this;
    }
}
var list1 = new SLList();
var node1 = new Node(6);
var node2 = new Node(7);
var node3 = new Node(8);
var node4 = new Node(3.4);
list1.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log("--------Before--------");
list1.display();
console.log("--------After--------");
list1.splitOnValue(8);
list1.display();
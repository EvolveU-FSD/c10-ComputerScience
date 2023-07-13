var list = {value: 'you?', next: null}
list = {value: 'are', next: list}
list = {value: 'Who', next: list}

function WriteALinkedList(linkedListHead){
    if (linkedListHead == null)
        return console.log('null')

    console.log(linkedListHead.value, '->')
    WriteALinkedList(linkedListHead.next)
}

WriteALinkedList(list);
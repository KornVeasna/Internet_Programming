class Color {
    colorType = '';

     constructor(type) {
        this.colorType = type; //hex
    }

    generate() {
        let index;
        var obj = [{}];
        var data = JSON.parse(localStorage.getItem('color'));
        if (!data) {
            index = 0;
        } else {
            obj = Object.assign([{}], data);
            index = data.length;
        }
        console.log(index);
        // colorData = getRandom();

        for (let i = 0; i < 6; i++) {
            const random = Math.random(); //random 0-1
            const bit = (random * 16) | 0;
            this.colorType += (bit).toString(16);
        };

        obj[index] = Object.assign({}, {
            'color': `${this.colorType}`
        });
        console.log(obj);
        this.colorType = '#';

        localStorage.setItem('color', JSON.stringify(obj));
        document.getElementsByClassName('items')[0].innerHTML += `<div class="items-color">
        <span>${obj[index].color}</span><div class="box"><div></div>`;
        document.getElementsByClassName('box')[index].style.backgroundColor = `${obj[index].color}`;
        document.getElementsByClassName('result')[0].innerHTML = `${obj[index].color}`;
        document.getElementsByClassName('color')[0].style.backgroundColor = `${obj[index].color}`;
        document.getElementsByClassName('bottom')[0].style.backgroundColor = `${obj[index].color}`;
        document.getElementsByClassName('button')[0].style.backgroundColor = `${obj[index].color}`;

        return this.obj;
    }

    getRecords() {
        this.records = JSON.parse(localStorage.getItem('color'));

        return this.records;
    }

    reset() {
        localStorage.removeItem('color');
    }

}

let HEX = '#';
var co = new Color(HEX);
var records = co.getRecords();
console.log(records)
if (!records) {
    console.log(co.getRecords());
} else {
    for (record in records) {
        document.getElementsByClassName('items')[0].innerHTML += `<div class="items-color">
        <span>${records[record].color}</span><div class="box"><div></div>`;
        document.getElementsByClassName('box')[record].style.backgroundColor = `${records[record].color}`;
    }
}

window.addEventListener('click', function(event) {
    if (event.target.id == 'generate-Btn') {
        co.generate();
    } else if (event.target.id == 'reset-Btn') {
        co.reset();
        document.getElementsByClassName('items')[0].innerHTML = '';
        document.getElementsByClassName('result')[0].innerHTML = '';
        document.getElementsByClassName('color')[0].style.backgroundColor = '';
        document.getElementsByClassName('bottom')[0].style.backgroundColor = '';
        document.getElementsByClassName('button')[0].style.backgroundColor = '';
    }
});
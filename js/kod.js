document.getElementById('param-1').oninput = function () {
    document.getElementById('password-length').innerHTML = this.value;
}
let
piri,
clear1 =document.getElementById('close2') ,
generate1 =document.getElementById('generatePass');
function generate() {
    const
        y = document.getElementsByName('name1')[0].value,
        m = document.getElementsByName('name2')[0].value,
        z = document.getElementsByName('name3')[0].value,
        k = document.getElementsByName('name4')[0].value,
        c = document.getElementsByName('name5')[0].value;
    let passLength = parseInt(document.getElementById('param-1').value),
        rs = ``,
        rk = ``,
        rj = ``,
        ry = ``,
        ru = ``,
        l = 0;
    if ( c.length === 3 && m.length > 2 && z.length > 2 && k.length > 2 && y.length !==0) {
        if (passLength === 6) {
            rs = y[8] + m[0] + m[1] + m[2] + c[0] + c[1];
            rk = m[0] + m[1] + m[2] + z[0] + z[1] + z[2];
            rj = y[5] + z[0] + z[1] + z[2] + c[0] + c[1];
            ry = y[8] + y[9] + c[0] + c[1] + c[2] + m[0];
            ru = m[0] + m[1] + m[2] + k[0] + k[1] + k[2];
        }
        if (passLength === 7) {
            rs = y[8] + y[9] + m[0] + m[1] + m[2] + c[0] + c[1];
            rk = m[0] + m[1] + m[2] + z[0] + z[1] + z[2] + y[3];
            rj = y[5] + y[6] + z[0] + z[1] + z[2] + c[0] + c[1];
            ry = y[8] + y[9] + c[0] + c[1] + c [2] + m[0] + m[1];
            ru = m[0] + m[1] + m[2] + k[0] + k[1] + k[2] + c[0];
        }
        if (passLength === 8) {
            rs = y[8] + y[9] + m[0] + m[1] + m[2] + c[0] + c[1] + c[2];
            rk = m[0] + m[1] + m[2] + z[0] + z[1] + z[2] + y[3] + k[0];
            rj = y[5] + y[6] + z[0] + z[1] + z[2] + c[0] + c[1] + c[2];
            ry = y[0] + y[1] + c[0] + c[1] + c [2] + m[0] + m[1] + m[2];
            ru = m[0] + m[1] + m[2] + k[0] + k[1] + k[2] + c[0] + c[1];
        }
        if (passLength === 9) {
            rs = y[8] + y[9] + m[0] + m[1] + m[2] + c[0] + c[1] + c[2] + z[0];
            rk = m[0] + m[1] + m[2] + z[0] + z[1] + z[2] + y[3] + k[0] + k[1];
            rj = y[5] + y[6] + z[0] + z[1] + z[2] + c[0] + c[1] + c[2] + m[0];
            ry = y[8] + y[9] + c[0] + c[1] + c[2] + m[0] + m[1] + m[2] + k[0];
            ru = m[0] + m[1] + m[2] + k[0] + k[1] + k[2] + c[0] + c[1] + c[2];
        }
        if (passLength === 10) {
            rs = y[8] + y[9] + m[0] + m[1] + m[2] + c[0] + c[1] + c[2] + z[0] + z[1];
            rk = m[0] + m[1] + m[2] + z[0] + z[1] + z[2] + y[3] + k[0] + k[1] + k[2];
            rj = y[5] + y[6] + z[0] + z[1] + z[2] + c[0] + c[1] + c[2] + m[0] + m[1];
            ry = y[8] + y[9] + c[0] + c[1] + c[2] + m[0] + m[1] + m[2] + k[0] + k[1];
            ru = m[0] + m[1] + m[2] + k[0] + k[1] + k[2] + c[0] + c[1] + c[2] + z[0];
        }
        if (passLength === 11) {
            rs = y[8] + y[9] + m[0] + m[1] + m[2] + c[0] + c[1] + c[2] + z[0] + z[1] + z[2];
            rk = m[0] + m[1] + m[2] + z[0] + z[1] + z[2] + y[3] + k[0] + k[1] + k[2] + y[8];
            rj = y[5] + y[6] + z[0] + z[1] + z[2] + c[0] + c[1] + c[2] + m[0] + m[1] + m[2];
            ry = y[8] + y[9] + c[0] + c[1] + c[2] + m[0] + m[1] + m[2] + k[0] + k[1] + k[2];
            ru = m[0] + m[1] + m[2] + k[0] + k[1] + k[2] + c[0] + c[1] + c[2] + z[0] + z[1];
        }
        if (passLength === 12) {
            rs = y[8] + y[9] + m[0] + m[1] + m[2] + c[0] + c[1] + c[2] + z[0] + z[1] + z[2] + y[3];
            rk = m[0] + m[1] + m[2] + z[0] + z[1] + z[2] + y[3] + k[0] + k[1] + k[2] + y[8] + y[9];
            rj = y[5] + y[6] + z[0] + z[1] + z[2] + c[0] + c[1] + c[2] + m[0] + m[1] + m[2] + y[3];
            ry = y[8] + y[9] + c[0] + c[1] + c[2] + m[0] + m[1] + m[2] + k[0] + k[1] + k[2] + k[3];
            ru = m[0] + m[1] + m[2] + k[0] + k[1] + k[2] + c[0] + c[1] + c[2] + z[0] + z[1] + z[2];
        }
        document.getElementById('out').innerHTML += '<p>' + rs + '</p>';
        document.getElementById('out').innerHTML += '<p>' + rk + '</p>';
        document.getElementById('out').innerHTML += '<p>' + rj + '</p>';
        document.getElementById('out').innerHTML += '<p>' + ry + '</p>';
        document.getElementById('out').innerHTML += '<p>' + ru + '</p>';

    }
    if (y.length <=0){
        if (l ===0) {
            piri += document.getElementById('out').innerHTML += '<p>' + 'Возникла ошибка при заполнении полей' + '</p>';
            l+=1;
        }
        piri += document.getElementById('out').innerHTML += '<p>' + '(первая строка)' + '</p>';
    }
    if (m.length < 2) {
        if (l===0) {
            piri += document.getElementById('out').innerHTML += '<p>' + 'Возникла ошибка при заполнении полей' + '</p>';
            l+=1;
        }
        piri += document.getElementById('out').innerHTML += '<p>' + '(вторая строка, минимум 3 символа)' + '</p>';
    }
    if (z.length < 2) {
        if (l === 0){
            l+=1;
            piri += document.getElementById('out').innerHTML += '<p>' + 'Возникла ошибка при заполнении полей' + '</p>';
        }
        piri += document.getElementById('out').innerHTML += '<p>' + '(третья строка, минимум 3 символа)' + '</p>';
    }
    if (k.length < 2) {
        if (l === 0){
            l+=1;
            piri += document.getElementById('out').innerHTML += '<p>' + 'Возникла ошибка при заполнении полей' + '</p>';
        }
        piri += document.getElementById('out').innerHTML += '<p>' + '(четвертая строка, минимум 3 символа)' + '</p>';
    }
    if (c.length !== 3) {
        if (l === 0) {
            piri += document.getElementById('out').innerHTML += '<p>' + 'Возникла ошибка при заполнении полей' + '</p>';
        }
        piri += document.getElementById('out').innerHTML += '<p>' + '(пятая строка)' + '</p>';
    }
}
function clear() {
    if (document.getElementById(`out`).textContent.length !== 0){
        document.getElementById(`out`).innerText = "";
    }
}
generate1.addEventListener("click", ()=> generate()) ;
clear1.addEventListener("click", ()=> clear()) ;
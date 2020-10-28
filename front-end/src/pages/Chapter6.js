import React from 'react';

function Chapter6() {
    return (
        <div className='chapter6'>
            <p3>บทที่ 6 Root-finding</p3><br/>
            <p3 class="f2">หาคำตอบโดยใช้ Incremental Search Method</p3><br/>
            <p3 class="f2">เมื่อโจทย์กำหนด f(x1) และ f(x2) มีค่าที่เป็นบวกหรือลบต่างกัน เราอาจจะเดาได้ว่าระหว่างค่า (x1,x2) จะมีค่า xi ที่ทำให้ f(xi)=0</p3><br/>
            <p3 class="f2">ดังนั้นวิธีการค้นหา xi จึงเกิดจากการหาค่า f(xi) ไปเรื่อยจนกว่าจะเจอ โดยให้ xi=x1+i∗Δ โดยจะต้องกำหนด Δ ให้มีขนาดเล็กพอที่จะค้นหา root เจอ</p3><br/>
            <p3 class="f2">สูตร (f(x0+0*h) + 4*f(x0+1*h) + 2*f(x0+2*h) + 4*f(x0+3*h) + f(x0+4*h))*h/3 เมื่อ n=4 , x0 = a ,h = (b-a)/n</p3><br/>
            <p3 class="f2">A</p3><br/>
            <input type='text' id="aa" name='input'></input><br/>
            <p3 class="f2">B</p3><br/>
            <input type='text' id="aa" name='input'></input><br/>
            <p3 class="f2">dx</p3><br/>
            <input type='text' id="aa" name='input'></input><br/>
            <button class="button button1">Submit</button><br></br>
            <p3>Target Result</p3><br/>
            <textarea id='area' rows='5'cols='150'></textarea>
        </div>
    );
}

export default Chapter6;

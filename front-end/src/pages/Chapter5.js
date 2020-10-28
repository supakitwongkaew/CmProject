import React from 'react';

function Chapter5() {
    return (
        <div className='chapter5'>
            <p3>บทที่ 5 Integration</p3><br/>
            <p3 class="f2">คำนวณหาพื้นที่ใต้กราฟ f(x) จากในช่วง x∈[a,b] โดยปกติแล้วจะใช้วิธีประมาณค่าโดยการแบ่งพื้นที่ออกเป็นช่วงๆ</p3><br/>
            <p3 class="f2">หาพื้นที่ใต้กราฟโดยใช้ Simpson's rule</p3><br/>
            <p3 class="f2">สูตร (f(x0+0*h) + 4*f(x0+1*h) + 2*f(x0+2*h) + 4*f(x0+3*h) + f(x0+4*h))*h/3 เมื่อ n=4 , x0 = a ,h = (b-a)/n</p3><br/>
            <p3 class="f2">A</p3><br/>
            <input type='text' id="aa" name='input'></input><br/>
            <p3 class="f2">B</p3><br/>
            <input type='text' id="aa" name='input'></input><br/>
            <button class="button button2">Submit</button><br></br>
            <p3>Target Result</p3><br/>
            <textarea id='area' rows='5'cols='150'></textarea>
        </div>
    );
}

export default Chapter5;

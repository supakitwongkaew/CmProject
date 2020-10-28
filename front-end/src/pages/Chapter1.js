import React from 'react';

function Chapter1() {
    return (
        <div className='chapter1'>
            <p3 class="f1">บทที่ 1 Basic Computing</p3><br/>
            <p3 class="f2">แปลงเลขฐาน 2 โดยใช้ IEEE single precision format</p3><br/>
            <input type='text' id="aa" name='input'></input><br/>
            <button class="button button5">Submit</button><br></br>
            <p3 class="f1">Target Result</p3><br/>
            <textarea id='area' rows='5'cols='150'></textarea>
        </div>
    );
}

export default Chapter1;

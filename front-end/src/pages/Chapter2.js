import React from 'react';

function Chapter2() {
    return (
        <div className='chapter2'>
            <p3>บทที่ 2 Linear Equations</p3><br/>
            <p3 class="f2">Elimination Phase คำนวณเพื่อหาคำตอบของ Ax=b</p3><br/>
            <p3 class="f2">A column 1</p3><br/>
            <input type='text' id="aa" name='input'></input><br/>
            <p3 class="f2">A column 2</p3><br/>
            <input type='text' id="aa" name='input'></input><br/>
            <p3 class="f2">A column 3</p3><br/>
            <input type='text' id="aa" name='input'></input><br/>
            <button class="button button6">Submit</button><br></br>
            <p3>Target Result</p3><br/>
            <textarea id='area' rows='5'cols='150'></textarea>
        </div>
    );
}

export default Chapter2;

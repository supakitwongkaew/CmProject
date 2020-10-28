import React from 'react';

function Chapter4() {
    return (
        <div className='chapter4'>
            <p3>บทที่ 4 Differentiation</p3><br/>
            <p3 class="f2">หาค่า Central Difference Approximations: CDA โดยใช้ Richardson Extrapolation</p3><br/>
            <p3 class="f2">สูตร ((2**p)* g(h/2)- g(h))/(2**p - 1)</p3><br/>
            <p3 class="f2">h</p3><br/>
            <input type='text' id="aa" name='input'></input><br/>
            <p3 class="f2">p</p3><br/>
            <input type='text' id="aa" name='input'></input><br/>
            <button class="button button3">Submit</button><br></br>
            <p3>Target Result</p3><br/>
            <textarea id='area' rows='5'cols='150'></textarea>
        </div>
    );
}

export default Chapter4;

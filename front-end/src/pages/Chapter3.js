import React from 'react';

function Chapter3() {
    return (
        <div className='chapter3'>
            <p3>บทที่ 3 Interpolation</p3><br/>
            <p3 class="f2">เมื่อให้เวลาคือ t (วินาที) , ความเร็วคือ v (เมตร/วินาที)</p3><br/>
            <p3 class="f2">t เป็นเวลาตามแนวนอนหรือแกน x , v เป็นความเร็วตามแนวตั้งหรือแกน y</p3><br/>
            <p3 class="f2">T</p3><br/>
            <input type='text' id="aa" name='input'></input><br/>
            <p3 class="f2">xi</p3><br/>
            <input type='text' id="aa" name='input'></input><br/>
            <p3 class="f2">yi</p3><br/>
            <input type='text' id="aa" name='input'></input><br/>
            <button class="button button4">Submit</button><br></br>
            <p3>Target Result</p3><br/>
            <textarea id='area' rows='5'cols='150'></textarea>
        </div>
    );
}

export default Chapter3;

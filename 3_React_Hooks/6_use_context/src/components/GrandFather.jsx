import React from 'react'
import { FamilyContext } from '../context/FamilyContext';
import Father from './Father';

// GF -> Child한테 어떤 정보를 알려줘서 Child가 그 내용을 출력하도록.!!

function GrandFather() {
    const houseName = '스파르타';
    const pocketMoney = 10000;
    return (
        // Father의 props는 더이상 필요가 없다. 이 props를 통해서 값을 내려주는 게 아니라
        // context만든 것을 통해서 외부로 접근하는 거니까.
    <FamilyContext.Provider 
        value={{
        houseName,
        pocketMoney: pocketMoney,
    }}> 
        <Father/>
        {/* houseName={houseName} pocketMoney={pocketMoney} */}
    </FamilyContext.Provider>
  );
}

export default GrandFather
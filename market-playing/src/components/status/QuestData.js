import React, { useState, useRef, useEffect } from "react";


const QuestData = (props) => { 

    const [selectTab, setSelectTab] = useState("A");

    const questData = [ 
      // id 
      // , type // 일반 N/ 인던 I
      // , status // 퀘스트 완료 여부 - 진행전 / 완료 S/ 포기 F
      // , name // 퀘스트 명 
      // , contents // 퀘스트 내용
      // , fromId // 요청 주민 id
      // , fromName // 요청 주민 name
      // , fromImg // 요청 주민 Img
      // , missions // 퀘스트 요구사항
      // , reword // 퀘스트 보상  
    {
      id: 'q1'
      , type: 'I'  
      , status: ''  
      , name: '마을을 어지럽히는 늑대 사냥 '  
      , contents: '요즘 늑대가 우리 집 양들을 자꾸 잡아먹어서 난리야. 어제도 세 마리나 손해 봤다니까! 어떻게 해결할 방법 없을까?' 
      , fromId: 'onion'  
      , fromName: '양파 쿵야'
      , fromImg: require("../../img/neighbor/onion.png")
      , missions: [{item:'늑대', amount:50, count:4}]  
      , reword: [{name:'초급 체력 물약 x 10', item:'초급 체력 물약', amount:10, img:require('../../img/liquid.jpeg')}
                  ,{name:'기본 짚신 ', item:'짚신', amount:1, img:''} 
                  ,{name:'5300M', item:'M', amount:5300, img:require('../../img/coin.png')}]  
    }
    ,{
      id: 'q2'
      , type: 'N'  
      , status: 'S'  
      , name: '모그호크 고기는 맛있어'  
      , contents: '모그호크 고기가 별미라더라. 어디가서 찾아야지? ' 
      , fromId: 'riceball'  
      , fromName: '주먹밥 쿵야'
      , fromImg: require("../../img/neighbor/riceBall.jpeg")
      , missions: [{item:'모그호크 고기', amount:10, count:10}]  
      , reword: [{name:'초급 체력 물약 x 10', item:'초급 체력 물약', amount:10, img:require('../../img/liquid.jpeg')}
                  ,{name:'530M', item:'M', amount:530, img:require('../../img/coin.png')}
                  ,{name:'황금가위', item:'황금가위', amount:1, img:require('../../img/gold_scissor.jpeg')} 
                  ,{name:'아이템1 x 3', item:'아이템1', amount:3, img:''}] 
    }
    ,{
      id: 'q3'
      , type: 'N'  
      , status: ''  
      , name: '그리무츠는 사실 착한 몬스터? '  
      , contents: '착한 몬스터가 맞는지 확인 부탁해' 
      , fromId: 'celery'  
      , fromName: '셀러리 쿵야'
      , fromImg: require("../../img/neighbor/celery.jpeg")
      , missions: [{item:'그리무츠와 우정반지', amount:1, count:0}]  
      , reword: [{name:'초급 체력 물약', item:'초급 체력 물약', amount:10, img:require('../../img/liquid.jpeg')}
                  ,{name:'경험치', item:'경험치', amount:13000, img:''}
                  ,{name:'5300M', item:'M', amount:5300, img:require('../../img/coin.png')}]  
    }
    ];

    const [questList, setQuestList] = useState(questData); 
    const [detailData, setdetailData] = useState(false); 

    const listFilter = (keyword) => {
      setSelectTab(keyword);
      let list = [];
      if( keyword && keyword == 'A' ){
        list = questData; 
      } else { 
        list = questData.filter(q => q.type == keyword);  
      } 
      setQuestList(list);
    };


    const questDetail = (qId) => { 
      let list = questData.filter(q => q.id == qId); 
      if(list.length < 1){
        setdetailData(false);
      } else {
        setdetailData(list[0]); 
      }
    };

    // useEffect(() => {
    //   console.log(detailData);
    // }, [detailData]);


  return ( 

  <div className="quest">
    <div className="quest_list">
      <div className="tablist"> 
        <div className={"quest_tab"+(selectTab=="A"?" on":"")}
            onClick={() => listFilter("A")}
        > 
        <span>{"전체"}</span>
        </div>
        <div className={"quest_tab"+(selectTab=="N"?" on":"")}
            onClick={() => listFilter("N")}
        > 
        <span>{"일반"}</span>
        </div>
        <div className={"quest_tab"+(selectTab=="I"?" on":"")}
            onClick={() => listFilter("I")}
        > 
        <span>{"인던"}</span>
        </div>
      </div>
      <div className="list">
        <table className="list_table">
          <tbody>
            <colgroup>
              <col style={{width: '20px'}}/>
              <col />
            </colgroup>
            {questList.map((el, ind) => ( 
              <>
              <tr
              key={"tr_"+el.id}
              onClick={() => questDetail(el.id)}
              >
                <td align="center">
                {el.status=="S"?"완료":""}
                </td>
                <td>
                <span>{el.name}</span> 
                </td>
              </tr>
              </>
            ))}
          </tbody>
        </table>
      </div> 
    </div>
    <div className="quest_detail"> 
      <div className="quest_contents">  
      {detailData?
      <> 
      <div className="quest_header">
        <div className="quest_from">
          <img className="neighbor" src={detailData?.fromImg} />
        </div>
        <div className="quest_title">
        {detailData?.name}
        </div>
      </div>
      <div className="quest_detail">
        {detailData?.contents}  
      </div> 
      <div className="quest_mission">
      <table>
          <colgroup>
            <col />
            <col style={{width: '100px'}}/>
          </colgroup>
      {detailData?.missions?.map((el, ind) => ( 
        <tr>
          <td>{el.item}</td>
          <td>{el.count}/{el.amount}</td>
        </tr>
      ))}
      </table> 
      </div> 
      </>:<></>}
      </div>
      <div className="quest_reward"> 
      {detailData?
      <>
      <div className="reword_title"> 
      <span>{"퀘스트 보상"}</span>
      </div>
      <div className="reword_list">  
        <table>
          {detailData?.reword?.map((el, ind) => (  
            <tr className="reword_item">
              <td className="reword_img">
              <img src={el.img} />
              </td>
              <td className="reword_detail">
                <span>{el.name}</span> 
              </td>
            </tr>
          ))} 
        </table>
      </div>  
      </>:<></>}
      </div>
    </div>
  </div>
  );
};

export default QuestData;

import React, { Component } from 'react';
import axios from 'axios';

class MemberInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            subject: {title: '네이버 가입현황'},
            members: []
        }
    }

    componentWillMount (){
        axios({
            method: 'post',
            url: 'http://localhost:6611/account/memberList',
            data: '{"data":""}',
            headers: {'Content-Type': 'application/json' }
        }).then(function (response) {
           this.setState({members:response.data.data});
        }.bind(this)).catch(function(){

        });
    }

  render() {

    var lists = [];
    var data = this.state.members;

    let i = 0;
    while(i<data.length) {
      lists.push(
        <tr key={i+1}>
          <td>{i+1}</td>
          <td>{data[i].memberId}</td>
          <td>{data[i].memberName}</td>
          <td>{data[i].memberBirthYear+data[i].memberBirthMonth+data[i].memberBirthDay}</td>
          <td>{data[i].memberGender}</td>
          <td>{data[i].memberMobile}</td>
        </tr>
      )
      i = i+1;
    }
    return (
        <div id="member_info" className="section_wrapper">
          <div className="subject_wrap">
            <h1>{this.state.subject.title}</h1>
          </div>
          <div className="list_wrap">
            <div className="info_row">
              <table>
                <colgroup>
                  <col width="10%"/>
                  <col width="15%"/>
                  <col width="15%"/>
                  <col width="15%"/>
                  <col width="10%"/>
                  <col width="15%"/>
                </colgroup>
                <thead>
                <tr>
                  <th>번호</th>
                  <th>아이디</th>
                  <th>이름</th>
                  <th>생년월일</th>
                  <th>성별</th>
                  <th>휴대전화</th>
                </tr>
                </thead>
                <tbody>
                  {lists}
                </tbody>
              </table>
            </div>
          </div>
          <div className="btn_wrap">
            <button type="button" id="closeBtn">닫기</button>
          </div>
        </div>
    );
  }
}

export default MemberInfo;

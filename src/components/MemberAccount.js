import React, { Component } from 'react';
import axios from 'axios';

function jsAccountMember() {

    var url = "http://localhost:6611/api/memberList";
    var formData = {"testData1":"test1","testData2":"test2"};

    axios({
        method: 'post',
        url: url,
        data: JSON.stringify({
            "data": formData
        }),
        headers: {'Content-Type': 'application/json' }
    }).then(function (response) {
        //handle success
        if(response.data.resultCode === "OK"){
            alert("success join!")
        }else{
            alert("error join!")
        }
    }.bind(this)).catch(function (response) {
        //handle error
        alert('error!');
        console.log(response);
    });
}

class MemberAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: {title:'네이버 가입하기'}
        }
    }
    render() {
        return (
            <div id="account_info" className="section_wrapper">
              <div className="subject_wrap">
                <h1>{this.state.subject.title}</h1>
              </div>
              <form onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(
                    e.target.id.value,
                  e.target.pwd1.value
                );
              }.bind(this)}>
              <div className="join_wrap">
                <div className="join_row">
                  <h3 className="join_title"><label htmlFor="id">아이디</label></h3>
                  <input type="text" id="id" name="id" maxLength="20"/>
                </div>
                <div className="join_row">
                  <h3 className="join_title"><label htmlFor="pwd1">비밀번호</label></h3>
                  <input type="password" id="pwd1" name="pwd1" maxLength="20"/>
                </div>
                <div className="join_row">
                  <h3 className="join_title"><label htmlFor="pwd2">비밀번호 재확인</label></h3>
                  <input type="password" id="pwd2" name="pwd2" maxLength="20"/>
                </div>
              </div>
              <div className="join_wrap">
                <div className="join_row">
                  <h3 className="join_title"><label htmlFor="name">이름</label></h3>
                  <input type="text" id="name" name="name" maxLength="20"/>
                </div>
                <div className="join_row">
                  <h3 className="join_title"><label htmlFor="yyyy">생년월일</label></h3>
                  <input type="text" id="yyyy" name="yyyy" maxLength="4"/>
                  <select name="mm" id="mm">
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <input type="text" id="dd" name="dd" maxLength="2"/>
                </div>
                <div className="join_row">
                  <h3 className="join_title"><label htmlFor="gender">성별</label></h3>
                  <select name="gender" id="gender">
                    <option value="M">남자</option>
                    <option value="F">여자</option>
                  </select>
                </div>
                <div className="join_row">
                  <h3 className="join_title"><label htmlFor="email">본인 확인 메일(선택)</label></h3>
                  <input type="text" id="email" name="email" maxLength="100"/>
                </div>
              </div>
              <div className="join_wrap">
                <div className="join_row">
                  <h3 className="join_title"><label htmlFor="memberMobile">휴대전화</label></h3>
                  <select name="countryCode" id="countryCode" defaultValue="82">
                    <option value="82">대한민국 +82</option>
                    <option value="1">미국/캐나다 +1</option>
                    <option value="81">일본 +81</option>
                    <option value="86">중국 +86</option>
                  </select>
                  <input type="text" id="memberMobile" name="memberMobile" maxLength="20"/><button type="button" onClick={function(e){
                    e.preventDefault();
                    //apiCall();
                }.bind(this)}>인증번호 받기</button>
                </div>
              </div>
              <div className="join_wrap">
                <div className="join_row">
                  <h3 className="join_title"><label htmlFor="authNo">인증번호</label></h3>
                  <input type="text" id="authNo" name="authNo" maxLength="6"/>
                </div>
              </div>
              <div className="btn_wrap">
                <button type="submit">가입하기</button>
              </div>
              </form>
            </div>
        );
    }
}

export default MemberAccount;

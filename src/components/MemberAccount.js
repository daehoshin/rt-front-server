import React, { Component } from 'react';
import axios from 'axios';

class MemberAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: {title:'네이버 가입하기'},
            id : this.props.id,
            pwd1 : this.props.pwd1,
            pwd2 : this.props.pwd2,
            name : this.props.name,
            yyyy : this.props.yyyy,
            mm : this.props.mm,
            dd : this.props.dd,
            gender : this.props.gender,
            email : this.props.email,
            countryCode : '82',
            memberMobile : this.props.memberMobile,
            authNo : this.props.authNo
        }
        this.inputValidateHandler = this.inputValidateHandler.bind(this);
        this.callSmsAuthNum = this.callSmsAuthNum.bind(this);
    }
    inputValidateHandler(e) {
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value});
        if(e.target.name=="id") {
            if(!(e.target.value.length >= 5 && e.target.value.length <= 20)) {
                alert("아이디는 5~20자 사이 문자여야 합니다.");
                return;
            }
        } else if(e.target.name=="pwd2") {
            if(e.target.value!=this.state.pwd1) {
                alert("비밀번호가 일치하지 않습니다.");
                return;
            }
        } else if(e.target.name=="countryCode"){
            if(e.target.value!="82") {
                alert("대한민국을 선택해 주세요.");
                return;
            }
        }
    }
    callSmsAuthNum(e) {
        e.preventDefault();
        var url = "http://localhost:6611/api/smsAuth";
        var to = [this.state.memberMobile];
        console.log(to[0])
        var formData = {"type":"SMS","contentType":"COMM","countryCode":this.state.countryCode,"to":to};

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
    render() {
        return (
            <div id="account_info" className="section_wrapper">
              <div className="subject_wrap">
                <h1>{this.state.subject.title}</h1>
              </div>
              <form onSubmit={function(e){}.bind(this)}>
              <div className="join_wrap">
                <div className="join_row">
                  <h3 className="join_title"><label htmlFor="id">아이디</label></h3>
                  <input type="text" id="id" name="id" maxLength="20" onBlur={this.inputValidateHandler}/>
                </div>
                <div className="join_row">
                  <h3 className="join_title"><label htmlFor="pwd1">비밀번호</label></h3>
                  <input type="password" id="pwd1" name="pwd1" maxLength="20" onBlur={this.inputValidateHandler}/>
                </div>
                <div className="join_row">
                  <h3 className="join_title"><label htmlFor="pwd2">비밀번호 재확인</label></h3>
                  <input type="password" id="pwd2" name="pwd2" maxLength="20" onBlur={this.inputValidateHandler}/>
                </div>
              </div>
              <div className="join_wrap">
                <div className="join_row">
                  <h3 className="join_title"><label htmlFor="name">이름</label></h3>
                  <input type="text" id="name" name="name" maxLength="20" onBlur={this.inputValidateHandler}/>
                </div>
                <div className="join_row">
                  <h3 className="join_title"><label htmlFor="yyyy">생년월일</label></h3>
                  <input type="text" id="yyyy" name="yyyy" maxLength="4" onBlur={this.inputValidateHandler}/>
                  <select name="mm" id="mm" onChange={this.inputValidateHandler}>
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
                  <input type="text" id="dd" name="dd" maxLength="2" onBlur={this.inputValidateHandler}/>
                </div>
                <div className="join_row">
                  <h3 className="join_title"><label htmlFor="gender">성별</label></h3>
                  <select name="gender" id="gender" onChange={this.inputValidateHandler}>
                    <option value="M">남자</option>
                    <option value="F">여자</option>
                  </select>
                </div>
                <div className="join_row">
                  <h3 className="join_title"><label htmlFor="email">본인 확인 메일(선택)</label></h3>
                  <input type="text" id="email" name="email" maxLength="100" onBlur={this.inputValidateHandler}/>
                </div>
              </div>
              <div className="join_wrap">
                <div className="join_row">
                  <h3 className="join_title"><label htmlFor="memberMobile">휴대전화</label></h3>
                  <select name="countryCode" id="countryCode" defaultValue="82" onChange={this.inputValidateHandler}>
                    <option value="82">대한민국 +82</option>
                    <option value="1">미국/캐나다 +1</option>
                    <option value="81">일본 +81</option>
                    <option value="86">중국 +86</option>
                  </select>
                  <input type="text" id="memberMobile" name="memberMobile" maxLength="20" onBlur={this.inputValidateHandler}/><button type="button" onClick={this.callSmsAuthNum}>인증번호 받기</button>
                </div>
              </div>
              <div className="join_wrap">
                <div className="join_row">
                  <h3 className="join_title"><label htmlFor="authNo">인증번호</label></h3>
                  <input type="text" id="authNo" name="authNo" maxLength="6" onBlur={this.inputValidateHandler}/>
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

import React, { Component } from 'react';

class MemberInfo extends Component {
  render() {
    return (
        <div id="member_info" className="section_wrapper">
          <div className="subject_wrap">
            <h1>네이버 가입현황</h1>
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
                <tr>
                  <td>1</td>
                  <td>daehoshin87@naver.com</td>
                  <td>신대호</td>
                  <td>1987.02.07</td>
                  <td>남자</td>
                  <td>01025436611</td>
                </tr>
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

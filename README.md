# 나만의 메인 페이지 만들기

<br/><br/>

노마드코더의 바닐라 JS로 크롬 앱 만들기 강의를 듣고 응용하여 만들어 본 메인 페이지<br/>
현재 github-pages에서 볼 수 있는 페이지는 version2 브랜치의 코드들이다.<br/>
주소 : https://dpqls0356.github.io/WebMainPage/

<br/><br/>

### version
version1<br/>
&nbsp;&nbsp;- 강의 1회 시청 후 단순히 이름이 일치하는 경우에 TodoList를 불러오고 기능을 사용할 수 있도록 함<br/><br/>
version2<br/>
&nbsp;&nbsp;- DB를 사용하지않고 LocalStorage를 이용해 계정 생성 및 로그인, 로그아웃 기능을 구현<br/>
&nbsp;&nbsp;- 더보기 창 추가 ( 현재 날씨, shortcut, Todolist )

<br/><br/><br/>

### **메인화면**
![gif](https://user-images.githubusercontent.com/83651122/232409983-210ca98c-2020-468c-84e5-968f36508104.png)



<br/>
<br/>


### 사용법 및 기능

#### 사용법
&nbsp;&nbsp; 1) 계정이 없을 경우 : new 버튼을 눌러 요구하는 값을 넣어 계정 생성하기<br/><br/>
<img width="1440" alt="스크린샷 2023-04-17 오후 4 15 21" src="https://user-images.githubusercontent.com/83651122/232414671-6ca57c52-58fa-4063-b6cf-932051e78132.png">

<br/><br/><br/>

&nbsp;&nbsp; 2) 계정이 있는 경우 : 자신의 계정에 로그인 하기<br/><br/>
&nbsp;&nbsp;&nbsp;&nbsp; 2-1) 존재하지않는 아이디를 입력하는 경우 유저를 찾을 수 없다는 문구가 나타나며 로그인 관련 입력칸 초기화<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->다시 로그인을 시도하거나 계정을 새로 생성<br/><br/>
<img width="1440" alt="유저없음" src="https://user-images.githubusercontent.com/83651122/232415705-23dc0e5e-00ab-4fab-a34e-577c7ef23110.png">

<br/><br/><br/>

&nbsp;&nbsp;&nbsp;&nbsp; 2-2) 아이디는 맞지만 올바르지않는 비밀번호를 입력 시 알맞지 않는 비밀번호라는 문구가 나타나며 로그인 관련 입력칸 초기화<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -> 다시 로그인을 시도<br/><br/>
<img width="1440" alt="비번틀림" src="https://user-images.githubusercontent.com/83651122/232415998-24ebb1be-fe66-4b7e-84a1-278e423e2892.png">

<br/><br/><br/>

&nbsp;&nbsp; 3) 로그인 성공 후 <br/>
&nbsp;&nbsp;&nbsp;&nbsp; + 계정 로그인 후 자신의 이름이 들어간 환영 인사가 나온다.<br/>
&nbsp;&nbsp;&nbsp;&nbsp; + 로그아웃을 하기 전까진 로그인 상태가 유지된다.<br/>
&nbsp;&nbsp;&nbsp;&nbsp; + Click to see more information!를 클릭하면 더보기 창이 열려 사용 가능하다.<br/><br/>
<img width="1440" alt="로그인성공" src="https://user-images.githubusercontent.com/83651122/232417668-bb73f17d-f974-492e-9d9e-40ce2bd98399.png">


<br/><br/><br/>
#### 기본 기능<br/>
&nbsp;&nbsp; +&nbsp;현재 시각을 알려준다.<br/>
&nbsp;&nbsp; +&nbsp;다양한 명언을 보여준다. ( 자동으로 변경 )
#### 더보기 창 기능<br/>
&nbsp;&nbsp; +&nbsp;현재 위치의 날씨를 알 수 있다.<br/>
&nbsp;&nbsp; +&nbsp;shortcut : 링크 즐겨찾기<br/>
&nbsp;&nbsp; +&nbsp;로그인을 통해 계정마다 자신의 Todo List를 사용할 수 있다.<br/>
&nbsp;&nbsp;&nbsp;&nbsp; - todo 추가 및 삭제가 가능하다.<br/>
&nbsp;&nbsp;&nbsp;&nbsp; - todo 완료 후엔 하트 버튼을 눌러 해야할 일과 완료한 일을 구분할 수 있다.<br/>
&nbsp;&nbsp; +&nbsp;하단에 로그아웃 버튼 존재<br/><br/>
<img width="1440" alt="스크린샷 2023-04-17 오후 4 41 24" src="https://user-images.githubusercontent.com/83651122/232417920-d960e035-5083-4aa5-84d0-e5e6791e621e.png">

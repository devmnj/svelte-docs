<section class="terminal">
    <p>404 Error!</p>
      <p>Page not found</p>
      <p class="msg">We are sorry, the page you are looking for doesn't exist.</p>
      <p class="msg">Click here to return to <a href="https://www.codepen.io">homepage.</a>
      <span>|</span></p>
    </section>
    <div class="icons"></div>

    <style>

body{
  background: url("https://9to5mac.files.wordpress.com/2014/08/yosemite.jpg") center top fixed;
}
section{
  padding-top:10px;
  margin:100px;
  width:600px;
  height:300px;
  background-color:#000;
}
section::before{
  content:"";
  background-color:lightgrey;
  width:600px;
  height:20px;
  position:absolute;
  margin-top:-20px;
}
.icons{
  width:14px;
  height:14px;
  border-radius:50%;
  background-color:orange;
  position:absolute;
  margin-top:-417px;
  margin-left: 122px;
}
.icons::before{
  content:"";
  width:14px;
  height:14px;
  border-radius:50%;
  background-color:red;
  position:absolute;
  margin-left: -18px;
}
.icons::after{
  content:"";
  width:14px;
  height:14px;
  border-radius:50%;
  background-color:green;
  position:absolute;
  margin-left: 18px;
}
p{
  font-family: "Lucida Console", "Courier";
  font-size:18px;
  color:white;
  white-space:nowrap;
  overflow:hidden;
  width:35em;
  padding-top:5px;
  margin:0px 20px;
  margin-top:4px;
  line-height:20px;
  animation: type 4s steps(60, end);

}
p:nth-child(2){
  animation: type2 5s steps(60,end);
}
p:nth-child(3){
  animation: type3 8s steps(60,end);
}
p:nth-child(4){
  animation: type4 17s steps(60,end);
}
span{
  animation: blink 1s infinite;
}

@keyframes type2{
  0% {width:0;}
  50% {width:0;}
  100% {width:100;}
}
@keyframes type3{
  0% {width:0;}
  50% {width:0;}
  100% {width:100;}
}
@keyframes type{
  from {width:0}
}
@keyframes type4{
  0% {width:0;}
  50% {width:0;}
  100% {width:100;}
}
@keyframes blink{
  to{opacity:0;}
}
p>a{
  text-decoration:none;
  color:blue;
}
.msg{
  font-size:12px;
}
    </style>
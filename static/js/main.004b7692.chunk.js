(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},21:function(e,t,i){},22:function(e,t,i){},23:function(e,t,i){},25:function(e,t,i){},26:function(e,t,i){"use strict";i.r(t);var a=i(9),r=i.n(a),n=(i(20),i(14)),l=i(10),c=i(11),s=i(15),o=i(13),m=i(1),d=i.n(m),b=(i(21),i(3)),j=(i(22),i(23),i(0)),u=function(e){var t=e.title,i=e.description,a=e.imgUrl,r=e.imdbUrl;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("figure",{className:"image is-4by3",children:Object(j.jsx)("img",{src:a,alt:"Film logo"})})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsxs)("div",{className:"media",children:[Object(j.jsx)("div",{className:"media-left",children:Object(j.jsx)("figure",{className:"image is-48x48",children:Object(j.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(j.jsx)("div",{className:"media-content",children:Object(j.jsx)("p",{className:"title is-8",children:t})})]}),Object(j.jsxs)("div",{className:"content",children:[i,Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:r,children:"IMDB"})]})]})]})},h=function(e){var t=e.movies;return Object(j.jsx)("div",{className:"movies",children:t.map((function(e){return Object(j.jsx)(u,Object(b.a)({},e),e.imdbId)}))})},p=i(5),O=i(2),g=i(6),f=i.n(g),v=(i(25),function(e){var t=e.onAdd,i=Object(m.useState)(""),a=Object(O.a)(i,2),r=a[0],n=a[1],l=Object(m.useState)(""),c=Object(O.a)(l,2),s=c[0],o=c[1],d=Object(m.useState)(""),u=Object(O.a)(d,2),h=u[0],g=u[1],v=Object(m.useState)(""),x=Object(O.a)(v,2),w=x[0],U=x[1],N=Object(m.useState)(""),M=Object(O.a)(N,2),I=M[0],_=M[1],y=Object(m.useState)((function(){return{title:"",imdbId:"",imdbUrl:"",imgUrl:""}})),T=Object(O.a)(y,2),B=T[0],k=T[1],z={title:_,description:n,imdbId:U,imdbUrl:o,imgUrl:g},A=function(e,t){var i=t.trim(),a=("imdbUrl"===e||"imgUrl"===e)&&!/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/.test(i.trim())||0===i.length;switch(e){case"title":case"imdbId":k((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(p.a)({},e,a?"This field is required":""))}));break;case"imdbUrl":case"imgUrl":k((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(p.a)({},e,a?"Incorrect URL":""))}))}return a},S=function(e){var t=e.target,i=t.name,a=t.value;A(i,a)},F=function(e){var t=e.target,i=t.name,a=t.value;Object.prototype.hasOwnProperty.call(z,i)&&z[i](a)};return Object(j.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),function(){var e={title:I,imdbId:w,imdbUrl:s,imgUrl:h};return Object.entries(e).reduce((function(e,t){var i=Object(O.a)(t,2),a=i[0],r=i[1];return A(a,r)||e}),!1)}()||(t({title:I.trim(),description:r.trim(),imdbId:w.trim(),imdbUrl:s.trim(),imgUrl:h.trim()}),Object.keys(z).forEach((function(e){return z[e]("")})))},children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{htmlFor:"title",className:"form__label",children:["Title",B.title&&Object(j.jsx)("span",{className:"errorText",children:"  ".concat(B.title,"!")}),Object(j.jsx)("input",{onBlur:S,value:I,name:"title",onChange:F,id:"title",type:"text",className:f()("input","input--outline",{"input--error":!!B.title}),placeholder:"title"})]}),Object(j.jsxs)("label",{htmlFor:"description",className:"form__label",children:["Description",Object(j.jsx)("textarea",{onBlur:S,value:r,onChange:F,name:"description",id:"description",className:"input input--outline input--textarea",placeholder:"description"})]}),Object(j.jsxs)("label",{htmlFor:"imgUrl",className:"form__label",children:["ImgUrl",B.imgUrl&&Object(j.jsx)("span",{className:"errorText",children:"  ".concat(B.imgUrl,"!")}),Object(j.jsx)("input",{onBlur:S,value:h,name:"imgUrl",onChange:F,id:"imgUrl",type:"text",className:f()("input","input--outline",{"input--error":!!B.imgUrl}),placeholder:"imgUrl"})]}),Object(j.jsxs)("label",{htmlFor:"imdbUrl",className:"form__label",children:["ImdbUrl",B.imdbUrl&&Object(j.jsx)("span",{className:"errorText",children:"  ".concat(B.imdbUrl,"!")}),Object(j.jsx)("input",{onBlur:S,value:s,onChange:F,name:"imdbUrl",id:"imdbUrl",type:"text",className:f()("input","input--outline",{"input--error":!!B.imdbUrl}),placeholder:"imdbUrl"})]}),Object(j.jsxs)("label",{htmlFor:"imdbId",className:"form__label",children:["ImdbId",B.imdbId&&Object(j.jsx)("span",{className:"errorText",children:"  ".concat(B.imdbId,"!")}),Object(j.jsx)("input",{onBlur:S,onChange:F,value:w,name:"imdbId",id:"imdbId",type:"text",className:f()("input","input--outline",{"input--error":!!B.imdbId}),placeholder:"imdbId"})]})]}),Object(j.jsx)("button",{type:"submit",className:"button button--size--full",children:"Add"})]})}),x=i(12),w=function(e){Object(s.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(l.a)(this,i);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movies:x},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(n.a)(e.movies),[t])}}))},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("div",{className:"page-content",children:Object(j.jsx)(h,{movies:e})}),Object(j.jsx)("div",{className:"sidebar",children:Object(j.jsx)(v,{onAdd:this.addMovie})})]})}}]),i}(d.a.Component);r.a.render(Object(j.jsx)(w,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.004b7692.chunk.js.map
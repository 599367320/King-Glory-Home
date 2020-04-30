//菜单区域切换

var menuUl = document.querySelector(".header .menu");
var menusLi = document.querySelectorAll(".header .sub-nav .menus li");

//绑定事件 - 鼠标移入
menuUl.onmouseover = function(e) {
    e.stopPropagation(); //取消事件冒泡
    if (e.target.tagName != "A") {
        console.log(2);
        return;
    }

    console.log(1);
    //清除之前的active
    var before = document.querySelector(".header .menu .active");
    // console.log(before)
    before.className = "";
}

menusLi.forEach(function(ele, index) {
    ele.onmouseout = function() {
        console.log(menuUl.children[1])
        menuUl.children[1].className = "active";
    }
})
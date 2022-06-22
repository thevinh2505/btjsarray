
//bt1
function b1() {
	var so = 0;
	for (var i = 1; i <= 10; i++) {
		for (var j = i; j <= 100; j += 10) {
			so += j + " ";
		}
		so += "\n";
	}
	console.log(so);
}
b1();

//bt2

function checkNT(n) {
	var check = 1;
	if (n < 2) {
		return (check = 0);
	}
	for (var i = 2; i < n; i++) {
		if (n % i == 0) {
			check = 0;
			break;
		}
	}
	return check;
}
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray = [];
for (var i = 0; i < array.length; i++) {
	if (checkNT(array[i]) == 1) {
		newArray.push(array[i]);
	}
}
console.log(newArray);

//bt3
function bt3(m) {
	var tong = 2 * m;
	var S = 0;
	for (var i = 2; i <= m; i++) {
		S = S + i;
	}
	console.log((tong += S));
	return (tong += S);
}
bt3(3);

//bt4
function bt4(n) {
	var dem = 0;
	for (var i = 1; i <= n; i++) {
		if (n % i == 0) {
			dem++;
		}
	}
	return dem;
}
//bt5
function bt5(n) {
	var str = n + "";
	var newStr = "";
	for (var i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	console.log(newStr);
}
bt5(12345);

//bt6
function bt6() {
	var S = 0;
	var x = 1;
	while (S + x < 100) {
		S = S + x;
		x++;
	}
	console.log(x - 1);
	return x - 1;
}
bt6();

//bt7
function bangcuuchuong(n) {
	for (var i = 0; i <= 10; i++) {
		console.log(`${n}x${i}=${n * i}`);
	}
}
bangcuuchuong(3);

//bt9
function bt9(m,n){
    var dog=0;
    var ga=0;
    ga=ga+(4*m-n)/2;
    dog=m-ga;
    console.log("so ga: ",ga," so cho: ",dog)
}
bt9(3,8)

//bt10
function bt10(h,m){
    var gockimh=0.5*(h*60+m);
    var gockimm=m*6;
    var goclech;
    if(gockimh>gockimm){
        goclech=gockimh-gockimm;
    }else{
        goclech=gockimm-gockimh;
    }
    console.log(goclech);
    return goclech;
}
bt10(12,59)
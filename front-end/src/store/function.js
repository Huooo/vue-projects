// 创建一个常量，用来封装web storage的常用方法
const storageEvent = function (item) {
	this.get = function () {
		return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : '';
	}
	this.set = function (obj) {
		localStorage.setItem(item, JSON.stringify(obj));
	}
	this.clear = function () {
		localStorage.removeItem(item);
	}
}

export const note_storage = new storageEvent('note');
export const theme_storage = new storageEvent('theme');
export const getDate = function(){
	const date = new Date(),
		  month = parseInt(date.getMonth()) + 1;
	return date.getFullYear() + '-' + month + '-' + date.getDate();
}
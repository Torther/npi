async function iwakeup() {
	return new Promise((resolve, reject) => {
        console.log("我醒了！")
	    setTimeout(resolve, 3000)
	})
}


function isleepagain() {
	return new Promise((resolve, reject) => {
        console.log("我又睡回笼觉了")
	    setTimeout(resolve, 3000)
	})
}

function ieatbreakfast() {
	return new Promise((resolve, reject) => {
        console.log("我吃早饭")
	    setTimeout(resolve, 3000)
	})
}


function igotoclasstocode() {
	return new Promise((resolve, reject) => {
        console.log("我要上课打代码了")
	    setTimeout(resolve, 3000)
	})
}

function iseefilm() {
	return new Promise((resolve, reject) => {
        console.log("我得追剧了")
	    setTimeout(resolve, 3000)
	})
}



const idoInTheMorning=async function(){
    await iwakeup();
    await isleepagain();
    await igotoclasstocode();
	console.log("请问我在什么时候执行A");
}

//TODO 补上傍晚跑步的返回Promise的iRun函数，并添加下午iDoInAfternoon异步函数



const oneDayOfMine=async function(){
	await idoInTheMorning();
	console.log("请问我在什么时候执行B");
	await iseefilm();
	console.log("请问 我在什么时候执行？");
}



oneDayOfMine();








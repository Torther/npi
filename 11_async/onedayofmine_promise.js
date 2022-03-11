function iwakeup() {
	return new Promise((resolve, reject) => {
        console.log("我醒了！")
	    setTimeout(resolve, 3000)
		console.log("请问我在什么时候执行！")
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

//TODO 补上其他活动的函数定义:傍晚跑步

iwakeup()
.then(()=>isleepagain())
.then(()=>ieatbreakfast())
.then(()=>igotoclasstocode())
.then(()=>iseefilm())
//TODO 补上其他活动的执行：傍晚跑步


console.log("请问 我在什么时候执行？");


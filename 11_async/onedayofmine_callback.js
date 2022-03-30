window.setTimeout(()=>{
    console.log("我醒了！");
    window.setTimeout(()=>{ 
        console.log("我又睡回笼觉了");
        window.setTimeout(()=>{
            console.log("我吃早饭");
            window.setTimeout(()=>{
                console.log("我要上课打代码了"); 
                window.setTimeout(()=>{
                    console.log("我得追剧了"); 
                    window.setTimeout(()=>{
                        console.log("游戏又要打我了"); 
                        window.setTimeout(()=>{
                            console.log("我跑步塑形"); 
                            window.setTimeout(()=>{
                                console.log("我洗澡睡觉觉"); 
                            },3000);
                        },3000);
                    },3000);
                },3000);
            },3000);
        },3000);
        console.log("啥时候会执行我B");
    },3000);
    console.log("啥时候会执行我A");
},3000);
console.log("啥时候会执行我");




//回调地狱 callback hell
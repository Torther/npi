window.setTimeout(()=>{
    console.log("我醒了！");
    window.setTimeout(()=>{ 
        console.log("我又睡回笼觉了");
        window.setTimeout(()=>{
            function findRoute(graph, from, to) {
                let work = [{at: from, route: []}];
                for (let i = 0; i < work.length; i++) {
                  let {at, route} = work[i];
                  for (let place of graph[at]) {
                    if (place == to) return route.concat(place);
                    if (!work.some(w => w.at == place)) {
                      work.push({at: place, route: route.concat(place)});
                    }
                  }
                }
                window.setTimeout(()=>{
                    console.log(work);
                },3000)
              }
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
    },3000)
},3000)

//回调地狱 callback hell
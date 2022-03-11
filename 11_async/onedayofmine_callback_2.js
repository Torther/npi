window.setTimeout(()=>{
    console.log("我醒了！");
    window.setTimeout(()=>{ 
        console.log("我又睡回笼觉了");
        window.setTimeout(()=>{
            console.log("我吃早饭");
            window.setTimeout(()=>{
                console.log("我要上课打代码了"); 
                window.setTimeout(()=>{
                    function buildGraph(edges) {
                        let graph = Object.create(null);
                        function addEdge(from, to) {
                          if (graph[from] == null) {
                            graph[from] = [to];
                          } else {
                            graph[from].push(to);
                          }
                        }
                        for (let [from, to] of edges.map(r => r.split("-"))) {
                          addEdge(from, to);
                          addEdge(to, from);
                        }
                        window.setTimeout(()=>{
                            console.log("我要跑个邮递员机器人的例子"); 
                        },3000);
                        return graph;

                    }
                    buildGraph([])

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
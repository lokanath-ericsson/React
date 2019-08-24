// js code
let str = "";
const data = fetch('https://restcountries.eu/rest/v2/all').then(res => res.json())
                                                            .then(function(result){
                                                                //console.log(result)
                                                                for (const [key, value] of Object.entries(result)) {
                                                                    //console.log(value.name,value.flag);
                                                                    str += '<span class="sp_name">'+value.name+'</span><span sp_flag><a href="'+ value.flag+'" target="_blank">'+ value.flag+'</a></span><br>';
                                                                    //console.log(str)
                                                                    document.getElementById("fetch_container").innerHTML = str;
                                                                }
                                                            });
                                                            
                                                            
//console.log(data);
//console.log(typeof(data))

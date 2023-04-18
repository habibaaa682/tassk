import express from 'express';

const app =express();
const s=["aya","laila","sara","malak"];
const fun =(rsq,res) => {
  let   output="<ul>";
    for(let i=0 ;i < s.length ;i++){
        const student =s[i];
        output+="<li>"+student+"</li>";

    }
       output+="</ul>";
    res.send(output);
};
app.get("/students",fun);
app.listen(5000);
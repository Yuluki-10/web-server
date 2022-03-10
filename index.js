const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false })); // req.bodyが使えるようになる
app.use(express.static(path.join(__dirname, "public"))); // __dirnameで本ファイルindex.jsの位置がわかるので、同じ階層のpublicディレクトリを、pathライブラリを使用して指定する

// app.get("/", function (req, res) {
//     console.log(req);
//     res.send("<h1>Hello World</h1>");
// });

app.post("/api/v1/quiz", function (req, res) {
    const answer = req.body.answer; 
    //文字列を受け取るので、""で囲う必要がある
    if (answer === "2") {
        // res.send("正解！");
        res.redirect("/correct.html");
    }else {
        // res.send("不正解…");
        res.redirect("/wrong.html");
    };
});


app.get("/api/v1/users", function (req, res) {
    res.send({
        name: "Mike",
        age: 30,
        gender: "male"
    });
});

app.listen(3000, function () {
    console.log("I am running!");
});

console.log("最終行");

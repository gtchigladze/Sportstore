// async function lesgo() {
//     try {
//       let res = await fetch("https://gorest.co.in/public/v2/users");
//       let data = await res.json();
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   lesgo();

async function lesgo() {
    try {
      let res = await fetch("https://gorest.co.in/public/v2/users").then(response => response.json())
      .then(data => console.log(data));
    } catch (err) {
      console.log(err);
    }
  }
  lesgo();
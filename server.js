const App = require("./app");



//DATABASE CONECTION
// dbConnect();

// app.listen(process.env.PORT,()=>{
//     console.log(`server is listening on ${process.env.PORT}`)
// })
(() => {
    App.startServer().then(
      () => {console.log("Server is running")},
      (e) => {
        // eslint-disable-next-line no-console
        console.error(e);
        
      },
    );
  })();
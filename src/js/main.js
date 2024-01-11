// import './styles/global.css';


// const app = document.querySelector('#app')!;

// app.innerHTML = `
//   <div class="container">
   
//   </div>
// `

document.querySelector('#carousel-items')
?.addEventListener("whell", event => {
  // console.log(event)
  if (event.deltaY > 0) {
    // console.log("up")
    event.target.scrollBy(300, 0)
  } else {
    // console.log("down")
    event.target.scrollBy(-300, 0)
  }
})



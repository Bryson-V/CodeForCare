import './style.css'

document.querySelector('#app').innerHTML = `

<header class="header">
  <h1>CSS Containers Practice</h1>
  <p>Learning how to build layouts with HTML and CSS</p>
</header>

<main class="container">

  <section class="box">
    <h2>Container 1</h2>
    <p>
      This is a simple container. Change the background color,
      border, padding, or margin to see what happens.
    </p>
  </section>



  <section class="row" >
    <div class="card"  style="background-color: lightblue; color: green;">>
      <h3>Card 1</h3>
      <p>Practice changing colors.</p>
    </div>

    <div class="card" >
      <h3>Card 2</h3>
      <p>Change spacing and alignment.</p>
    </div>

    <div class="card" ">
      <h3>Card 3</h3>
      <p>Experiment with text size.</p>
    </div>
  </section>

  <section class="box">
    <h2>Challenge</h2>
    <p>
      Create another row of cards, center everything,
      and make the page responsive.
    </p>
  </section>

</main>
`
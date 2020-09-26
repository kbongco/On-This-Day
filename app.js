todaysDate = () => {
  document.getElementById('date').innerHTML = Date()
}

todaysDate()

const randomFact = (facts) => {
  facts.forEach((fact) => {
    let newDiv = document.createElement('div')
    let year = document.createElement('h4')
    year.innerText = year.year 
    newDiv.classList.add('todaysevents')
    newDiv.appendChild(year)
    let description = document.createElement('p')
    
  })
}

eventURL = 'https://cors-anywhere.herokuapp.com/http://history.muffinlabs.com/date'


const todayEvent = async () => {
  const todaysEvent = eventURL
  try {
    const response = await axios.get(eventURL)
    console.log(response.data)
    console.log(response.data.data.Events)
  } catch (error) {
    console.error(`You got an ${error}, which enraged your father and punished you severely `)
    //oversimplified references haha 
  }
} 
todayEvent();






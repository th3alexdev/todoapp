function susffix(date) {
  let day = date.getDate()

  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }

}

function setFullDate(date, day, month, year, longDate, wDay) {

    const now = new Date()
    const dayOfWeek = (date, option) => date.toLocaleDateString("en", option)

    // let fullDate = `${dayOfWeek(now, {weekday: "long"})}, ` +
    //                `${dayOfWeek(now, {day: "numeric"})}` + susffix(now) +
    //                ` ${dayOfWeek(now, {month: "long"})}`
                
    
    day.innerText = dayOfWeek(now, {weekday: "long"})
    month.innerText = dayOfWeek(now, {month: "short"})
    year.innerText = dayOfWeek(now, {year: "numeric"})
    date.innerText = dayOfWeek(now, {day: "numeric"})


    wDay.innerText = `${dayOfWeek(now, {weekday: "long"})},` 
    longDate.innerText = `${dayOfWeek(now, {day: "numeric"})}${susffix(now)} ${dayOfWeek(now, {month: "long"})}` 
}

export default setFullDate
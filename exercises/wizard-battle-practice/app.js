var wizards = [  
    {
      name: "Edwin Odesseiron",
      age: 37,
      alignment: "lawful evil"
    },
    {
      name: "Harry Potter",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Hermony Granger",
      age: 21,
      alignment: "lawful good"
    },
    {
      name: "Ronny the Bear",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Gandalf",
      age: 100,
      alignment: "neutral good"
    }
  ]
  
  let lawfulGood = [];
  
  wizards.forEach((wiz) => console.log(wiz.name))
  
  wizards.forEach((wiz) => { wiz['isAlive'] = true })
  
  wizards.forEach((wiz) => { (wiz.alignment === 'lawful good') ? lawfulGood.push(wiz) : ''})
  
  wizards.findIndex((wiz) => { return wiz.alignment === 'lawful good' } )
  
  wizards.every((wiz) => { return wiz.isAlive })
  
  wizards.forEach((wiz) => { (wiz.alignment === 'neutral good') ? wiz.isAlive = false : ''})
  
  wizards.every((wiz) => { return wiz.alignment === 'neutral good' })
  
  wizards.every((wiz) => { return wiz.isAlive })
  
  wizards.some((wiz) => { return wiz.isAlive })
  
  console.log(wizards)
  console.log(lawfulGood)
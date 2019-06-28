// Write your solution in this file!

const driver =  {}


function  updateDriverWithKeyAndValue(driver,key,value){//does not mutate the original object
return Object.assign({},driver,{[key]:value})

}


function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){//DOES mutate the original object

  driver[key]=value

  return driver
}


function deleteFromDriverByKey(driver,key){//non-destructive

  const newObj=Object.assign({},driver)

  delete newObj[key]

  return newObj

}

function destructivelyDeleteFromDriverByKey(driver,key){//does modifes the object

  delete driver[key]

  return driver


}

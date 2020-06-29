const items = ['a','b','c','d'];

;(async function () {
  const promiseFunction = async (element) => {
    return new Promise( (resolve, reject) => {
      return resolve(`${element} - promise`)
    })
  }
  //const itemMapped = promiseFunction("x");
  const itemsMappedPromisse = items.map(promiseFunction) ;
  const itemsMapped = await Promise.all(itemsMappedPromisse);
  console.log(itemsMapped);
})()

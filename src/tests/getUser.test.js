import getUser from "../tools/getUser";

describe('archivo: getUser.js',() => { 
  test('probando funcion getUser()', ()=>{
    
    const paramName= 'matias';

    const responseOk={
      id: 1,
      name: paramName
    }
    const modelo= getUser(paramName);

    expect(modelo).toStrictEqual(responseOk)
  })
})
export default function Res(props) {
  const {x,y,operation} = props

    let answer = null
    const plus = () => x + y
    const minus = () => x - y
    const divide = () => x / y
    const multiply = () => x * y
    const degree = () => Math.pow(x, y)
    
    switch(operation){
      case "plus":{
        answer = plus(x,y)
        break
      }
      case "minus":{
        answer = minus(x,y)
        break
      }
      case "divide":{
        answer = divide(x,y)
        break
      }
      case "multiply":{
        answer = multiply(x,y)
        break
      }
      case "degree":{
        answer = degree(x,y)
        break
      }
    }
    return(
      <div>
         Result: {answer}
      </div>
    );
  }
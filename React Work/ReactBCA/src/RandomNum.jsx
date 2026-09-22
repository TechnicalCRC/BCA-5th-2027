const RandomNum = () => {

    let num = Math.floor(Math.random() * 10000)+999;

    return (
    <div className="bg-dark" style={{color:'red'}}>Random Number : {num}</div>
  )
}

export default RandomNum
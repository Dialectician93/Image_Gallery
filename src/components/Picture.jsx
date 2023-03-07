import { data } from "./../helper/data"


const Picture = () => {
  return (
    <div className="images">
      {data.map(({ name, img }) => {
        return (
          <div>
            <div className="container">
              <img src={img} />
            </div>
            <div>
              <p>{name}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Picture

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Scenario = () => {
  const [statusNum, setStatusNum] = useState(4)
  const [statusVisible, setStatusVisible] = useState(true)
  const [location, setLocation] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (statusVisible === true)
        setStatusVisible(false)
      else
        setStatusVisible(true)

      setStatus()
      location.slice(0).reverse().map((item, index) => {
        if (index === 0)
          if (item.status === '대기중')
            setStatusNum(4)
          else if (item.status === '이동중')
            setStatusNum(0)
          else if (item.status === '충전완료')
            setStatusNum(1)
          else if (item.status === '배송완료')
            setStatusNum(2)
      })
    }, 1000)
    return () => clearTimeout(timer)
  })

  const arrowStyle = {
    width: "4vh",
    height: "4vh"
  }

  const gasimageStyle = {
    width: "10vh",
    height: "10vh"
  };

  const producerImageStyle = {
    width: "9vh",
    height: "9vh"
  };

  const truckStyle = {
    width: "14vh",
    height: "14vh"
  };

  const setStatus = async () => {
    try {
      const config = {
        url: '/location',
        method: 'GET',
      }

      await axios(config)
        .then((result) => {
          if (result.data.code === 200) {
            setLocation(result.data.result)
          }
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="col-lg-8">
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Delivery Status</h6>
        </div>
        <div className="card-body m-1">
          <div className="chart-area">
            <div className="ml-5 mr-5 text-center d-flex flex-row align-items-center justify-content-between">
              {statusNum === 0 ?
                <>
                  {statusNum === 0 && statusVisible === true ?
                    <img style={truckStyle} className="rounded" src="/assets/truck.png" alt="gas vehicle" /> :
                    <img style={truckStyle} className="rounded" src="/assets/transparent.png" />}
                </> : null}
              {statusNum === 1 ?
                <img style={truckStyle} className="rounded" src="/assets/truck.png" alt="gas vehicle" /> : null}
              {statusNum === 1 ?
                <>
                  {statusNum === 1 && statusVisible === true ?
                    <>
                      <img style={arrowStyle} className="rounded" src="/assets/right-arrow.png" alt="arrow" />
                      <img style={producerImageStyle} className="rounded" src="/assets/building1.png" alt="gas producer" />
                    </> :
                    <>
                      <img style={arrowStyle} className="rounded" src="/assets/transparent.png" alt="arrow" />
                      <img style={producerImageStyle} className="rounded" src="/assets/transparent.png" alt="gas producer" />
                    </>}
                  <img style={arrowStyle} className="rounded" src="/assets/transparent.png" alt="arrow" />
                  <img style={gasimageStyle} className="rounded" src="/assets/transparent.png" alt="gas station" />
                  <img style={arrowStyle} className="rounded" src="/assets/transparent.png" alt="arrow" />
                  <img style={gasimageStyle} className="rounded" src="/assets/transparent.png" alt="pay" />
                  <img style={arrowStyle} className="rounded" src="/assets/transparent.png" alt="arrow" />
                  <img style={producerImageStyle} className="rounded" src="/assets/transparent.png" alt="gas delivery" />
                </> : null}
              {statusNum === 2 ?
                <>
                  <img style={truckStyle} className="rounded" src="/assets/truck.png" alt="gas vehicle" />
                  <img style={arrowStyle} className="rounded" src="/assets/right-arrow.png" alt="arrow" />
                  <img style={producerImageStyle} className="rounded" src="/assets/building1.png" alt="gas producer" />
                </> : null}
              {statusNum === 2 ?
                <>
                  {statusNum === 2 && statusVisible === true ?
                    <>
                      <img style={arrowStyle} className="rounded" src="/assets/right-arrow.png" alt="arrow" />
                      <img style={gasimageStyle} className="rounded" src="/assets/gas.png" alt="gas station" />
                    </> :
                    <>
                      <img style={arrowStyle} className="rounded" src="/assets/transparent.png" alt="arrow" />
                      <img style={gasimageStyle} className="rounded" src="/assets/transparent.png" alt="gas station" />
                    </>}
                  <img style={arrowStyle} className="rounded" src="/assets/transparent.png" alt="arrow" />
                  <img style={gasimageStyle} className="rounded" src="/assets/transparent.png" alt="pay" />
                  <img style={arrowStyle} className="rounded" src="/assets/transparent.png" alt="arrow" />
                  <img style={producerImageStyle} className="rounded" src="/assets/transparent.png" alt="gas delivery" />
                </> : null}
              {statusNum === 3 ?
                <>
                  <img style={truckStyle} className="rounded" src="/assets/truck.png" alt="gas vehicle" />
                  <img style={arrowStyle} className="rounded" src="/assets/right-arrow.png" alt="arrow" />
                  <img style={producerImageStyle} className="rounded" src="/assets/building1.png" alt="gas producer" />
                  <img style={arrowStyle} className="rounded" src="/assets/right-arrow.png" alt="arrow" />
                  <img style={gasimageStyle} className="rounded" src="/assets/gas.png" alt="gas station" />
                </> : null}
              {statusNum === 3 ?
                <>
                  {statusNum === 3 && statusVisible === true ?
                    <>
                      <img style={arrowStyle} className="rounded" src="/assets/right-arrow.png" alt="arrow" />
                      <img style={gasimageStyle} className="rounded" src="/assets/pay.png" alt="pay" />
                    </> :
                    <>
                      <img style={arrowStyle} className="rounded" src="/assets/transparent.png" alt="arrow" />
                      <img style={gasimageStyle} className="rounded" src="/assets/transparent.png" alt="pay" />
                    </>}
                  <img style={arrowStyle} className="rounded" src="/assets/transparent.png" alt="arrow" />
                  <img style={producerImageStyle} className="rounded" src="/assets/transparent.png" alt="gas delivery" />
                </> : null}
              {statusNum === 4 ?
                <>
                  <img style={truckStyle} className="rounded" src="/assets/truck.png" alt="gas vehicle" />
                  <img style={arrowStyle} className="rounded" src="/assets/right-arrow.png" alt="arrow" />
                  <img style={producerImageStyle} className="rounded" src="/assets/building1.png" alt="gas producer" />
                  <img style={arrowStyle} className="rounded" src="/assets/right-arrow.png" alt="arrow" />
                  <img style={gasimageStyle} className="rounded" src="/assets/gas.png" alt="gas station" />
                  <img style={arrowStyle} className="rounded" src="/assets/right-arrow.png" alt="arrow" />
                  <img style={gasimageStyle} className="rounded" src="/assets/pay.png" alt="pay" />
                </> : null}
              {statusNum === 4 ?
                <>
                  {statusNum === 4 && statusVisible === true ?
                    <>
                      <img style={arrowStyle} className="rounded" src="/assets/right-arrow.png" alt="arrow" />
                      <img style={producerImageStyle} className="rounded" src="/assets/building2.png" alt="gas delivery" />
                    </> :
                    <>
                      <img style={arrowStyle} className="rounded" src="/assets/transparent.png" alt="arrow" />
                      <img style={producerImageStyle} className="rounded" src="/assets/transparent.png" alt="gas delivery" />
                    </>}
                </> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scenario;

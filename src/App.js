import React, { useEffect, useState } from 'react'
import './App.css'
import Scenario from "./components/Scenario"
import axios from 'axios'
import moment from 'moment'

const App = () => {
  const [syncStatus, setSyncStatus] = useState(false)
  const [blockchainData, setBlockchainData] = useState([])
  const [blockHydrogenData, setBlockHydrogenData] = useState([])

  const address = [
    { 'id': 0, 'name': '충전소', 'address': '0xC0f9a310F90aba6102F6072480F20A8991eefc87' },
    { 'id': 1, 'name': '생산자', 'address': '0xFaE9fc323D6F9DC481B4d293692ed0340E19f3F9' },
    { 'id': 2, 'name': '소비자', 'address': '0x97440e9a2B06421BF7438c0bE067A60882448DAd' },
    { 'id': 3, 'name': '운송업체', 'address': '0x11138c139ECb082Af453bDC362C8d727Ad4c7E3d' },
    { 'id': 4, 'name': '운전자', 'address': '0x960667a942F96287aCB47bBFD32f2c50f413AD28' }
  ]

  const [coinBalance, setCoinBalance] = useState([])
  const [hydroBalance, setHydroBalance] = useState([])

  useEffect(() => {
    if (syncStatus === true) {
      const timer = setTimeout(() => {
        setCoinInfo()
        setHydrogenInfo()
        setBlocks()
        setHydrogens()
      }, 10000)
      return () => clearTimeout(timer)
    }
    else {
      const timer = setTimeout(() => {
        setCoinInfo()
        setHydrogenInfo()
      }, 5000)
      return () => clearTimeout(timer)
    }
  })

  const bData = blockchainData.slice(0).reverse().map((value) =>
    <tr>
      <td>{value.block_height}</td>
      <td>{value.data}</td>
      <td>{value.last_sync_time}</td>
    </tr>
  )

  const tData = blockchainData.slice(0).reverse().map((value) =>
    <tr>
      <td>{value.block_hash}</td>
      <td>{value.last_sync_time}</td>
    </tr>
  )

  const hData = blockHydrogenData.slice(0).reverse().map((value) =>
    <tr>
      <td>{value.from}</td>
      <td>{value.to}</td>
      <td>{value.value}</td>
      <td>{value.last_sync_time}</td>
    </tr>
  )

  const syncChange = () => {
    if (syncStatus === true)
      setSyncStatus(false)
    else
      setSyncStatus(true)
  }

  const setBlocks = async () => {
    try {
      const config = {
        url: '/blockchain',
        method: 'GET',
      }

      await axios(config)
        .then((result) => {
          if (result.data.code === 200) {
            const modifiedBlockchainData = result.data.result
            setBlockchainData(modifiedBlockchainData.map((item) => ({
              ...item,
              last_sync_time: moment(item.last_sync_time).format('YYYY-MM-DD HH:mm:ss')
            })))
          }
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    } catch (e) {
      console.log(e)
    }
  }

  const setHydrogens = async () => {
    try {
      const config = {
        url: '/call/hydrogen',
        method: 'GET',
      }

      await axios(config)
        .then((result) => {
          if (result.data.code === 200) {
            const modifiedHydrogenData = result.data.result
            setBlockHydrogenData(modifiedHydrogenData.map((item) => ({
              ...item,
              last_sync_time: moment(item.last_sync_time).format('YYYY-MM-DD HH:mm:ss')
            })))
          }
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    } catch (e) {
      console.log(e)
    }
  }

  const setCoinInfo = async () => {
    try {
        const config = {
          url: '/balance/all',
          method: 'GET'
        }

        await axios(config)
          .then((result) => {
            if (result.data.code === 200) {
              setCoinBalance(result.data.result)
            }
          })
          .catch((err) => {
            console.log(err.response.data.message)
          })
    } catch (e) {
      console.log(e)
    }
  }

  const setHydrogenInfo = async () => {
    try {
        const config = {
          url: '/hydrobalance/all',
          method: 'GET'
        }

        await axios(config)
          .then((result) => {
            if (result.data.code === 200) {
              setHydroBalance(result.data.result)
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
    <div className="App">
      <header className="App-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Blocks</h6>
                </div>
                <div className="card-body">
                  <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <div className="table-responsive">
                      <table className="table table-striped" width="100%">
                        <thead>
                          <tr>
                            <th>Block Height</th>
                            <th>Data</th>
                            <th>Timestamp</th>
                          </tr>
                        </thead>
                        <tbody>
                          {bData}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Transactions</h6>
                </div>
                <div className="card-body">
                  <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <div className="table-responsive">
                      <table className="table table-striped" width="100%">
                        <thead>
                          <tr>
                            <th>Transaction Hash</th>
                            <th>Timestamp</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tData}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Node Information</h6>
                </div>
                <div className="card-body">
                  <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <div className="table-responsive">
                      <table className="table" width="100%">
                        <thead>
                          <tr>
                            <th>User</th>
                            <th>Status</th>
                            <th>Coin</th>
                            <th>Hydrogen</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>수소 충전소</td>
                            <td>
                              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-outline-success active btn-sm">
                                  <input type="radio" />Active
                                </label>
                              </div>
                            </td>
                            <td>{coinBalance.charger}</td>
                            <td>{hydroBalance.charger}</td>
                          </tr>
                          <tr>
                            <td>수소 생산자</td>
                            <td>
                              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-outline-success active btn-sm">
                                  <input type="radio" />Active
                                </label>
                              </div>
                            </td>
                            <td>{coinBalance.producer}</td>
                            <td>{hydroBalance.producer}</td>
                          </tr>
                          <tr>
                            <td>수소 소비자</td>
                            <td>
                              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-outline-success active btn-sm">
                                  <input type="radio" />Active
                                </label>
                              </div>
                            </td>
                            <td>{coinBalance.customer}</td>
                            <td>{hydroBalance.customer}</td>
                          </tr>
                          <tr>
                            <td>수소 운송업체</td>
                            <td>
                              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-outline-success active btn-sm">
                                  <input type="radio" />Active
                                </label>
                              </div>
                            </td>
                            <td>{coinBalance.deliver}</td>
                            <td>{hydroBalance.deliver}</td>
                          </tr>
                          <tr>
                            <td>운송업체 운전자</td>
                            <td>
                              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-outline-success active btn-sm">
                                  <input type="radio" />Active
                                </label>
                              </div>
                            </td>
                            <td>{coinBalance.driver}</td>
                            <td>{hydroBalance.driver}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Hydrogen Move</h6>
                </div>
                <div className="card-body">
                  <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <div className="table-responsive">
                      <table className="table" width="100%">
                        <thead>
                          <tr>
                            <th>Sender</th>
                            <th>Recipient</th>
                            <th>Value</th>
                            <th>Timestamp</th>
                          </tr>
                        </thead>
                        <tbody>
                          {hData}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <Scenario></Scenario>
            <div className="col-lg-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Block Synchronization</h6>
                </div>
                <div className="card-body m-1">
                  <div className="chart-area">
                    <div className="text-center d-flex flex-row align-items-center justify-content-between">
                      <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-outline-success active btn-sm">
                          <input type="radio" onClick={setBlocks} />Blockchain Synchronization
                        </label>
                      </div>
                      <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-outline-success active btn-sm">
                          <input type="radio" onClick={setHydrogens} />Hydrogen Synchronization
                        </label>
                      </div>
                      <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        {syncStatus === false ?
                          <label className="btn btn-outline-danger active btn-sm">
                            <input type="radio" onClick={syncChange} />10s Autosync
                          </label> :
                          <label className="btn btn-outline-primary active btn-sm">
                            <input type="radio" onClick={syncChange} />Manual Sync
                          </label>
                        }
                      </div>
                    </div><br /><br /><br />
                    <div className="text-center flex-row align-items-center">
                      {syncStatus === true ?
                        <h4><strong>블록체인이 10초 마다 자동으로 동기화되고 있습니다.</strong></h4> :
                        <h4><strong>블록체인이 수동으로 동기화되고 있습니다.</strong></h4>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App;

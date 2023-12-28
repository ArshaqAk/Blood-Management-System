import React from 'react'
import Layout from '../../Components/Shared/Layout/Layout'
import { useSelector } from 'react-redux'
import Header from '../../Components/Header'
import Spinner from '../../Components/Shared/Spinner'
import Sidebar from '../../Components/Shared/Layout/Sidebar'

function AdminHome() {
    const {user}=useSelector(state=>state.auth)
    const {loading, error}=useSelector((state)=>state.auth)

  return (
    <div className="dashboard-donar" style={{overflow:'hidden'}}>
    <Header insideDashboard/>
    <Layout>
              {
      error && <span>{alert(error)}</span>
      }
      {
      loading ? (
        <Spinner/>
      ):(

        
        <div className="row">
            <div className="col-md-2"><Sidebar/></div>

            <div className="col-md-10">
              <div className="container text-center text-light">
              <h2 className='m-4'>Welcome Admin {user?.name}</h2>
              <h5 className='mt-5'>Manage Blood Bank App</h5>
              <hr />
              <div className='m-3'>
              <p style={{textAlign:'justify'}}>Hi Admin, Here you can manage Blood Bank app.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quis placeat aperiam totam nesciunt, quasi vero eveniet, facere voluptas deleniti in alias, illum velit adipisci tempore provident ea iusto. Repellat.
              Optio enim fuga sint explicabo distinctio architecto dolore vel aut dolorem a dignissimos assumenda voluptates odit maxime blanditiis, molestias porro, sapiente quos. Aliquid harum ipsam molestias minus distinctio unde blanditiis.
              Accusamus laborum dolores illum quisquam aut odit eum blanditiis distinctio illo aliquid deserunt suscipit similique soluta veniam voluptatum vero, modi quia quo cumque iusto. Aspernatur placeat saepe expedita unde pariatur.
              Repellendus eaque accusantium laboriosam sunt saepe rerum delectus! Molestias voluptate corrupti odio fugiat deleniti libero optio, similique eius explicabo? Nobis qui placeat, nulla totam iure sapiente soluta sint nisi in!</p>

              </div>

              </div>
                
            </div>
        </div>
      )}
    </Layout>
    </div>
  )
}

export default AdminHome
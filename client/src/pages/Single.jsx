import React from 'react'
import Edit from '../assets/edit.png'
import Delete from '../assets/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <>
      <div className='single'>
        
        {/*--------- Content ---------*/}
        <div className="content">
          <img src="https://cdn11.bigcommerce.com/s-2d2cb/images/stencil/1280x1280/products/72383/189111/28355_00__21268.1668548014.jpg?c=2?imbypass=on" alt="" />

          <div className="user">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="" />
            <div className="info">
              <span>John</span>
              <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
              <Link to={'/write?edit=2'}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>
          </div>

          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aspernatur corrupti blanditiis molestias quisquam. Aperiam facilis eius nostrum nulla laudantium omnis
            consequatur molestias deserunt assumenda dolorum quisquam iusto dolore suscipit, ab, aliquam et libero, labore itaque. Quia mollitia sapiente nostrum, numquam,
            quasi perferendis sit inventore exercitationem ipsa nulla dolorem quas tempora! Reiciendis labore suscipit, ad ullam inventore ipsum animi asperiores, vel earum
            iste eius.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aspernatur corrupti blanditiis molestias quisquam. Aperiam facilis eius nostrum nulla laudantium omnis
            consequatur molestias deserunt assumenda dolorum quisquam iusto dolore suscipit, ab, aliquam et libero, labore itaque. Quia mollitia sapiente nostrum, numquam,
            quasi perferendis sit inventore exercitationem ipsa nulla dolorem quas tempora! Reiciendis labore suscipit, ad ullam inventore ipsum animi asperiores, vel earum
            iste eius. Quasi reiciendis vel voluptatibus eos ratione aliquam molestias inventore, debitis reprehenderit voluptates nobis a? Unde, aliquam? Perferendis
            accusantium laudantium optio accusamus possimus totam autem et, numquam, perspiciatis in deserunt incidunt earum alias commodi blanditiis laborum voluptatem!
            Quasi reiciendis vel voluptatibus eos ratione aliquam molestias inventore, debitis reprehenderit voluptates nobis a? Unde, aliquam? Perferendis
            accusantium laudantium optio accusamus possimus totam autem et, numquam, perspiciatis in deserunt incidunt earum alias commodi blanditiis laborum voluptatem!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aspernatur corrupti blanditiis molestias quisquam. Aperiam facilis eius nostrum nulla laudantium omnis
            consequatur molestias deserunt assumenda dolorum quisquam iusto dolore suscipit, ab, aliquam et libero, labore itaque. Quia mollitia sapiente nostrum, numquam,
            quasi perferendis sit inventore exercitationem ipsa nulla dolorem quas tempora! Reiciendis labore suscipit, ad ullam inventore ipsum animi asperiores, vel earum
            iste eius. Quasi reiciendis vel voluptatibus eos ratione aliquam molestias inventore, debitis reprehenderit voluptates nobis a? Unde, aliquam? Perferendis
            accusantium laudantium optio accusamus possimus totam autem et, numquam, perspiciatis in deserunt incidunt earum alias commodi blanditiis laborum voluptatem!
            Quasi reiciendis vel voluptatibus eos ratione aliquam molestias inventore, debitis reprehenderit voluptates nobis a? Unde, aliquam? Perferendis
            accusantium laudantium optio accusamus possimus totam autem et, numquam, perspiciatis in deserunt incidunt earum alias commodi blanditiis laborum voluptatem!
            Quasi reiciendis vel voluptatibus eos ratione aliquam molestias inventore, debitis reprehenderit voluptates nobis a? Unde, aliquam? Perferendis
            accusantium laudantium optio accusamus possimus totam autem et, numquam, perspiciatis in deserunt incidunt earum alias commodi blanditiis laborum voluptatem!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aspernatur corrupti blanditiis molestias quisquam. Aperiam facilis eius nostrum nulla laudantium omnis
            consequatur molestias deserunt assumenda dolorum quisquam iusto dolore suscipit, ab, aliquam et libero, labore itaque. Quia mollitia sapiente nostrum, numquam,
            quasi perferendis sit inventore exercitationem ipsa nulla dolorem quas tempora! Reiciendis labore suscipit, ad ullam inventore ipsum animi asperiores, vel earum
            iste eius.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aspernatur corrupti blanditiis molestias quisquam. Aperiam facilis eius nostrum nulla laudantium omnis
            consequatur molestias deserunt assumenda dolorum quisquam iusto dolore suscipit, ab, aliquam et libero, labore itaque. Quia mollitia sapiente nostrum, numquam,
            quasi perferendis sit inventore exercitationem.
          </p>

        </div>

        {/*--------- Menu ---------*/}
        <Menu/>
      </div>
    </>
  )
}

export default Single
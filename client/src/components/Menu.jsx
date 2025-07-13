import React from 'react'

const Menu = () => {
    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi dignissimos sequi doloribus dolores, qui exercitationem rem ratione veniam officia tenetur, consectetur",
            img: "https://img.freepik.com/premium-photo/trees-field-against-sky_1048944-6588409.jpg"
        },
        {
            id: 2,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi dignissimos sequi doloribus dolores, qui exercitationem rem ratione veniam officia tenetur, consectetur",
            img: "https://cdn.britannica.com/01/152301-120-9ABF227D/Cheetah.jpg"
        },
        {
            id: 3,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi dignissimos sequi doloribus dolores, qui exercitationem rem ratione veniam officia tenetur, consectetur",
            img: "https://lh5.googleusercontent.com/-qIl6JNFqikI/VGBq6tr2oWI/AAAAAAAAN_k/pn3Zgh3rSWk/s640/IMAG1324.jpg"
        },
        {
            id: 4,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi dignissimos sequi doloribus dolores, qui exercitationem rem ratione veniam officia tenetur, consectetur",
            img: "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/bridge-to-eternity-michael-lang.jpg"
        },
    ];

  return (
    <>
    <div className="menu">
        <h1>Other posts you may like</h1>
        {
            posts.map((post) => (
                <div className='post'>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default Menu
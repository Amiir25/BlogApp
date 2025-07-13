import React, { useState } from 'react'

const Write = () => {

    return (
        <>
            <div className='write'>
                <div className="content">
                    <input type="text" placeholder='Title' />
                    <textarea name="" id="" placeholder='Paste your text here'></textarea>
                </div>
                <div className="menu">
                    <div className="item publish">
                        <h1>Publish</h1>
                        <span><b>Status:</b> Draft</span>
                        <span><b>Visibility:</b> Public</span>
                        <input style={{ display: "none" }} type="file" id='file' />
                        <label htmlFor="file" className='file'>Upload Image</label>
                        <div className="buttons">
                            <button>Save as a draft</button>
                            <button>Update</button>
                        </div>
                    </div>

                    <div className="item catagory">
                        <h1>Catagory</h1>
                        <div className='cat'>
                            <input type="radio" name='cat' value='art' id='art' />
                            <label htmlFor="">Art</label>
                        </div>
                        <div className='cat'>
                            <input type="radio" name='cat' value='science' id='science' />
                            <label htmlFor="">Science</label>
                        </div>
                        <div className='cat'>
                            <input type="radio" name='cat' value='technology' id='technology' />
                            <label htmlFor="">Technology</label>
                        </div>
                        <div className='cat'>
                            <input type="radio" name='cat' value='cinema' id='cinema' />
                            <label htmlFor="">Cinema</label>
                        </div>
                        <div className='cat'>
                            <input type="radio" name='cat' value='design' id='design' />
                            <label htmlFor="">Design</label>
                        </div>
                        <div className='cat'>
                            <input type="radio" name='cat' value='food' id='food' />
                            <label htmlFor="">Food</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Write
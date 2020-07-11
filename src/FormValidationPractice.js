import React from 'react'

function FormValidationPractice() {
    return (
        <div>
            <form className="input-form" style={{padding: '20px'}}>
                <div>
                    <label style={{marginRight: '32px'}}>Name</label>
                    <input className="nameInput" type="text" required/>
                </div>
                <div>
                    <label style={{marginRight: '7px'}} required>Password</label>
                    <input className="passwordInput" type="password"/>
                </div>
                <div>
                    <label style={{marginRight: '35px'}} required>Email</label>
                    <input className="emailInput" type="text"/>
                </div>
                <div>
                    <br />
                    <button style={{marginLeft: '70px', padding: '10px', textJustify: 'auto', fontWeight: 'bold'}}
                    >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormValidationPractice

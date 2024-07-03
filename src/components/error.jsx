import { useState } from 'react'

const Error = ({text}) => {

    return(
        <div class="alert alert-dark" role="alert">
            {text}
        </div>

    )


}

export default Error
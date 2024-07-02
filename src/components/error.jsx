import { useState } from 'react'

const Error = ({text}) => {

    return(
        <div class="alert alert-danger" role="alert">
            {text}
        </div>

    )


}

export default Error
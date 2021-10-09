import React from 'react'

const PriceItem = ({serviceName, price}) => {
    return (
    <tr>
        <td>{serviceName}</td>
        <td>{price}</td>
    </tr>
    )
}

export default PriceItem

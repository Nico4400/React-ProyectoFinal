// import { useEffect, useState } from "react";

import Items from "../Items"
import { Row } from 'antd';


const ItemList = ({productos}) => {

    return(
        <div className="ListadoProductos">
            <Row 
                gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
                }}
            >              
            <>          
                {productos.map(prod => <Items key={prod.id} {...prod} />)}
            </>            
            </Row>
        </div>
    )
}
export default ItemList
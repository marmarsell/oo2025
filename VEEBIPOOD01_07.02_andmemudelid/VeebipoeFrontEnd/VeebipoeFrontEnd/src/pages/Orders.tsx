import { useEffect, useState } from "react"
import { Order } from "../models/Order";


function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);
    useEffect(() => {
        fetch("http://localhost:8080/orders")
        .then(res => res.json())
        .then(json => setOrders(json))
    }, []);

  return (
    <div>
        ORDERS
        {orders.map(order =>
            <div key={order.id}>
                <div>{order.created?.toString()}</div>
                <div>{order.person?.email}</div>
                <div>{order.totalSum}</div>
                <div>{order.products?.map(product =>
                    <div key={product.id}>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                    </div>
                )}</div>
            </div>
        )}
    </div>
  )
}

export default Orders
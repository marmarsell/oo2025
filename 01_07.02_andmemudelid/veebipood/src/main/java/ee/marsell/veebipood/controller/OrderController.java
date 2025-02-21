package ee.marsell.veebipood.controller;

import ee.marsell.veebipood.entity.Order;
import ee.marsell.veebipood.entity.Product;
import ee.marsell.veebipood.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController

public class OrderController {

    @Autowired
    OrderRepository orderRepository;

    // TODO: Ei tagastaks kõiki tellimusi
    @PostMapping("orders")
    public List<Order> addOrder(@RequestBody Order order) {
        order.setCreated(new Date());
        double sum = 0;
        for (Product p: order.getProducts()) {
            sum = sum + p.getPrice();
        }
        order.setTotalSum(sum);
        orderRepository.save(order);
        return orderRepository.findAll();
    }
}

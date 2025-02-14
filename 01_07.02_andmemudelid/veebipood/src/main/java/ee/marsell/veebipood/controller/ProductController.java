package ee.marsell.veebipood.controller;

import ee.marsell.veebipood.entity.Product;
import ee.marsell.veebipood.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class ProductController {

    @Autowired
    ProductRepository productRepository;
    //localhost:8080/products
    @GetMapping("products")
    public List<Product> getProducts() {
        return productRepository.findAll(); //Select * FROM
    }

    @PostMapping("products") // POSTMAN rakendus
    public List<Product> addProduct(@RequestBody Product product) {
        if(product.getId() != null) {
            throw new RuntimeException("ERROR_CANNOT_ADD_WITH");
        }
        if(product.getPrice() <= 0) {
            throw new RuntimeException("ERROR_PRICE_MUST_BE_POSITIVE");
        }
        productRepository.save(product); //INSERT INTO products
        return productRepository.findAll();
    }

    // DELETE localhost:8080/products/1
    @DeleteMapping("products/{id}")
    public List<Product> deleteProduct(@PathVariable Long id) {
        productRepository.deleteById(id);
        return productRepository.findAll();
    }

    @PutMapping("products")
    public List<Product> editProduct(@RequestBody Product product) {
        if(product.getId() == null) {
            throw new RuntimeException("ERROR_CANNOT_EDIT_WITHOUT_ID");
        }
        if(product.getPrice() <= 0) {
            throw new RuntimeException("ERROR_PRICE_MUST_BE_POSITIVE");
        }
        productRepository.save(product);
        return productRepository.findAll();
    }

    @GetMapping("products/{id}")
    public Product getProduct(@PathVariable Long id) {
        return productRepository.findById(id).orElseThrow();
    }

    // kui on 1 ilusam kasutada
    // kui on 2 või enam parameetrit peaks kasutama request params
    // localhost:8080/products/4/name/Aura
    @PatchMapping("products") // Patch localhost:8080 products?id=4&field=name&value=Aura
    public List<Product> editProductValue(@RequestParam Long id, String field, String value) {
        if(id == null) {
            throw new RuntimeException("ERROR_CANNOT_EDIT_WITHOUT_ID");
        }
        Product product = productRepository.findById(id).orElseThrow();
        switch(field) {
            case "name"     -> product.setName(value);
            case "price"    -> {
                if(Double.parseDouble(value) <=0) {
                    throw new RuntimeException("ERROR_PRICE_MUST_BE_POSITIVE");
                }
                product.setPrice(Double.parseDouble(value));
            }

            case "a"        -> product.setImage(value);
            case "active"   -> product.setActive(Boolean.parseBoolean(value));
        }
        productRepository.save(product);
        return productRepository.findAll();
    }
}


// kui on väikse tähega:
// long
// char
// double
// boolean
// primitiivsed väärtused, ainult väärtuse hoidmiseks

// kui on suure tähega:
// Long
// String
// Character
// Double
// Boolean
// klassid, kaasneb funktsioon

// 1xx --> informatiivsed
// 2xx --> edukad 201 (created)
// 3xx --> suunamine - meie ei kasuta
// 4xx --> päringu tegija viga (client error)
//      400 üldine viga
//      401, 403 - autentimisega seotud
//      402 - maksetega viga
//      404 - api endpoint on vale
//      405 - method not allowed
//      415 - sisu tüüp on vale
//      418 - i'm a teapot
// 5xx --> back end viga (host error) 500

package ee.marsell.veebipood.controller;

import ee.marsell.veebipood.entity.Category;
import ee.marsell.veebipood.entity.Product;
import ee.marsell.veebipood.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    CategoryRepository categoryRepository;


    @GetMapping("categories")
    public List<Category> getProducts() {
        return categoryRepository.findAll(); //Select * FROM
    }

    @PostMapping("categories")
    public List<Category> addProduct(@RequestBody Category category) {
        if(category.getId() != null) {
            throw new RuntimeException("ERROR_CANNOT_ADD_WITH");
        }
        categoryRepository.save(category); //INSERT INTO products
        return categoryRepository.findAll();
    }

    @DeleteMapping("categories/{id}")
    public List<Category> deleteCategories(@PathVariable Long id) {
        categoryRepository.deleteById(id);
        return categoryRepository.findAll();
    }
}

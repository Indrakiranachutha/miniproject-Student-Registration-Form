package com.miniproject.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miniproject.entity.Student;
import com.miniproject.repository.Sturepo;

@Service
public class Stuservice {
    @Autowired
    public Sturepo repo;

    public List<Student> getStudent() {
        return repo.findAll();
    }

    public Student create(Student s) {
        return repo.save(s);
    }

    public void delStu(Long id) {
        repo.deleteById(id);
    }

    public Student update(Student student) {
        return repo.save(student);
    }

    public Student getStudentById(Long id) {
        return repo.findById(id).orElse(null);
    }
}

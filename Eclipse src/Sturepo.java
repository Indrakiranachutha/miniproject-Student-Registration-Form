package com.miniproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.miniproject.entity.Student;

@Repository
public interface Sturepo extends JpaRepository<Student,Long> {

}

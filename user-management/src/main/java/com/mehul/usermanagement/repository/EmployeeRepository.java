package com.mehul.usermanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.mehul.usermanagement.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{
	
}
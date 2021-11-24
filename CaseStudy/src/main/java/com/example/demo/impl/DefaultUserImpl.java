package com.example.demo.impl;

import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.User;
import com.example.demo.UserInterface;


@Component
public class DefaultUserImpl implements UserInterface {
	
	@Autowired
	DbConnection db;
	
	int row = 0;
	
	@Autowired
	User user = null;

	@Override
	public int createUser(User user) {
		try {
			
			PreparedStatement ps = db.getConnection().prepareStatement("Insert into user values (?,?,?,?,?,?,?,?,?,?)");
			ps.setInt(1, user.getUserID());
			ps.setString(2, user.getUserName());
			ps.setString(3, user.getEmail());
			ps.setString(4, user.getFirstName());
			ps.setString(5, user.getLastName());
			ps.setLong(6, user.getContactNumber());
			ps.setString(7, user.getRole());
			ps.setBoolean(8,user.getIsActive());
			ps.setString(9, user.getDob());
			ps.setString(10, user.getCreatedOn());
			row = ps.executeUpdate();
			db.closeConnection();
			
		}catch(SQLException e) {System.out.println(e);}
		
		return row;
		
	}

}

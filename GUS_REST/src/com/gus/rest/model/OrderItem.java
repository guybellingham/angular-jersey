package com.gus.rest.model;

import java.io.Serializable;
import javax.xml.bind.annotation.*;
/**
 * JAX-RS supports an automatic mapping from JAXB annotated class to XML and JSON!
 * @author Gus
 *
 */
public class OrderItem implements Serializable {
	
	private static final long serialVersionUID = 1L;
	/**
	 * Required no-args constructor.
	 */
	public OrderItem() {
		
	}
	/**
	 * constructor.
	 */
	public OrderItem(int id, String description, float price) {
		setId(id);
		setDescription(description);
		setPrice(price);
	}
	
	private int id;
	private String description;
	private float price;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
}

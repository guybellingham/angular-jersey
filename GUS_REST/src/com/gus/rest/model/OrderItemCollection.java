package com.gus.rest.model;

import java.io.Serializable;
import java.util.Collection;

import javax.xml.bind.annotation.XmlRootElement;
/**
 * JAX-RS supports an automatic mapping from JAXB annotated class to XML and JSON!
 * @author Gus
 *
 */
@XmlRootElement
public class OrderItemCollection implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Collection<OrderItem> orderItems; 
	
	/**
	 * Required no-args constructor.
	 */
	public OrderItemCollection() {
		
	}
	/**
	 * constructor.
	 */
	public OrderItemCollection(Collection<OrderItem> items) {
		
	}
	public Collection<OrderItem> getOrderItems() {
		return orderItems;
	}
	public void setOrderItems(Collection<OrderItem> orderItems) {
		this.orderItems = orderItems;
	}

}

package com.gus.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.gus.rest.model.OrderItem;
import com.gus.service.ServiceLocator;
import com.gus.service.exception.NotFoundException;

/**
 * Root resource exposed at path: <code>http://localhost:8080/rest/webapi/orderitem</code>
 */
@Path("orderitem")
public class OrderItemResource {

	/**
	 * 
	 * @return an instance of OrderItem mapped to XML format
	 */
    @GET
    @Produces({ MediaType.APPLICATION_JSON })
    public OrderItem get() {
    	OrderItem item = null; 
		try {
			item = ServiceLocator.getOrderItemService().getItem(100);
		} catch (NotFoundException e) {
			
		}
    	return item;
    }
}

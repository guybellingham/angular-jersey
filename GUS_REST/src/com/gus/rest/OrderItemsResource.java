package com.gus.rest;

import java.util.Collection;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.gus.rest.model.OrderItem;
import com.gus.rest.model.OrderItemCollection;
import com.gus.service.ServiceLocator;
import com.gus.service.exception.NotFoundException;

/**
 * Root resource exposed at path: <code>http://localhost:8080/rest/webapi/orderitem</code>
 */
@Path("orderitems") 
public class OrderItemsResource {

	/**
	 * 
	 * @return a Collection of OrderItems mapped to JSON format
	 */
    @GET
    @Produces({ MediaType.APPLICATION_JSON })
    public OrderItemCollection get() {
    	Collection<OrderItem> items = null; 
    	OrderItemCollection collection = new OrderItemCollection();
//    	Response<Collection<OrderItem>> response = new Response<Collection<OrderItem>>(); 
		try {
			items = ServiceLocator.getOrderItemService().getItems("");
			collection.setOrderItems(items);
		} catch (NotFoundException e) {
//			response.setStatus(Response.NOTFOUND);
//			response.setMessage(e.getMessage());
		}
    	return collection;
    }
}

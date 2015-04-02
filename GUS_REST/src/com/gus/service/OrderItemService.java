package com.gus.service;

import java.util.Collection;

import com.gus.rest.model.OrderItem;
import com.gus.service.exception.NotFoundException;

public interface OrderItemService {

	public OrderItem getItem(int id) throws NotFoundException;
	
	public Collection<OrderItem> getItems(String searchWord) throws NotFoundException;
	
	
}

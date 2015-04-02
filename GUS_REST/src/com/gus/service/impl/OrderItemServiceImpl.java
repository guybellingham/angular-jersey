package com.gus.service.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.gus.rest.model.OrderItem;
import com.gus.service.OrderItemService;
import com.gus.service.exception.NotFoundException;

public final class OrderItemServiceImpl implements OrderItemService {

	private static final Map<Integer, OrderItem> orderItems = loadOrderItems();
	
	private static Map<Integer, OrderItem> loadOrderItems() {
		Map<Integer, OrderItem> items = new HashMap<Integer, OrderItem>();
		items.put(100, new OrderItem(100,"Licorice in Sherbet dib-dab",1.75f));
		items.put(200, new OrderItem(200,"Butterscotch Caramels",2.35f));
		items.put(300, new OrderItem(300,"Dark Chocolate 65%",3.65f));
		items.put(400, new OrderItem(400,"Lemon Sours",1.15f));
		items.put(500, new OrderItem(500,"Licorice Allsorts",3.85f));
		items.put(600, new OrderItem(600,"Milk Chocolate Coins",1.50f));
		items.put(700, new OrderItem(700,"Chocolate Mint Wafers",7.20f));
		items.put(800, new OrderItem(800,"Caramel Toffees",2.50f));
		items.put(900, new OrderItem(900,"Lemon Jelly Twists",2.15f));
		items.put(1000, new OrderItem(1000,"Chocolate Covered Hazelnuts",6.30f));
		return items;
	}
	
	public OrderItem getItem(int id) throws NotFoundException {
		OrderItem item = orderItems.get(id);
		if(null==item) { throw new NotFoundException("No OrderItem found for id="+id); }
		return item;
	}
	
	public Collection<OrderItem> getItems(String searchWord) throws NotFoundException {
		if(null==searchWord || searchWord.isEmpty()) {
			return Collections.unmodifiableCollection( orderItems.values() );  
		} else { 
			return searchOrderItems(searchWord);
		}
	}

	private Collection<OrderItem> searchOrderItems(String searchWord) throws NotFoundException {
		List<OrderItem> list = new ArrayList<OrderItem>();
		for (Iterator<OrderItem> iterator = orderItems.values().iterator(); iterator.hasNext();) {
			OrderItem orderItem = (OrderItem) iterator.next();
			if(orderItem.getDescription().contains(searchWord)) {
				list.add(orderItem);
			}
		}
		if(list.isEmpty()) { throw new NotFoundException("No OrderItem found for searchWord="+searchWord); }
		return list;
	}
	
	
}

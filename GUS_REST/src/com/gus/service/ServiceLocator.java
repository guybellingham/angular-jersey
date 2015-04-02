package com.gus.service;

import com.gus.service.impl.OrderItemServiceImpl;

public final class ServiceLocator {

	/**
	 * The one and only (thread-safe) OrderItemService implementation.
	 */
	private static final OrderItemService orderItemService = new OrderItemServiceImpl();

	public static OrderItemService getOrderItemService() {
		return orderItemService;
	}
	
}

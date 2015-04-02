package com.gus.rest.model;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Response<T> implements Serializable {

	private static final long serialVersionUID = 1L;
	public static final int OK = 200;
	public static final int NOTFOUND = 404;
	public static final int ERROR = 500;
	
	public Response() {
		
	}
	public Response(T data) {
		setData(data);
	}
	public Response(int httpStatus, String errorMessage, T data) {
		setStatus(httpStatus);
		setMessage(errorMessage);
		setData(data);
	}
	
	/**
	 * 200=OK, 404=NotFound, 500=Error  ..etc
	 */
	private int status = 200;  	
	/**
	 * "OK" or a Human readable error message
	 */
	private String message = "OK";    
	/**
	 * The payload object 
	 */
	private T data;
	
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}
	
}

package com.gus.rest;

import java.net.URI;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;

import org.glassfish.jersey.client.ClientConfig;
/**
 * Run this once GUS_REST is started in Tomcat - 
 * it will call the {@link MyResource#getIt()} method through the webapi (Jersey Servlet). 
 * @author Gus
 *
 */
public class MyResourceClient {

	public static void main(String[] args) {
	
		ClientConfig config = new ClientConfig();

	    Client client = ClientBuilder.newClient(config);

	    WebTarget target = client.target(getBaseURI());
	    
	    System.out.println(target.path("webapi").path("myresource").request()

	    	    .accept(MediaType.TEXT_PLAIN).get(Response.class)

	    	    .toString());
	}
	
	private static URI getBaseURI() {

	    return UriBuilder.fromUri("http://localhost:8080/rest").build();

	  }
}

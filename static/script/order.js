$(document).ready(function(){
	var form=$("#bx-soa-order-form");
	$(document).on('click',"#order-save-button",function(event){
		event.preventDefault();
		data={};
		items=$(".bx-soa-basket-info");
		items.each(function(){
			id=$(this).data('id');
			nmb=$(this).data('nmb');
			data[`product-${id}`]=nmb;
		});
		data['region']=$("#region").val();
		data['email']=$("#soa-property-2").val();
		data['phone']=$("#soa-property-3").val();
		data['name']=$("#soa-property-24").val();
		data['comment']=$("#orderDescription").val();
		data['address']=$("#soa-property-7").val();
		data['delivery']='Самовывоз';
		data['payment']='Наличными в пункте вывоза';
		var csrf_token = $('#bx-soa-order-form [name="csrfmiddlewaretoken"]').val();
	 	data["csrfmiddlewaretoken"] = csrf_token;

		var url = form.attr("action");
	 	$.ajax({
	 		url: url,
	 		type: 'POST',
	 		data: data,
	 		cache: true,
	 		success: function (data) {
	 			console.log('OK')
	 			order_id=data.order;
	 			window.location.href = `?order=${parseFloat(order_id)}`;

	 		},
	 		error: function(){
	 			console.log("error")
	 		}
	 	});
	});

});
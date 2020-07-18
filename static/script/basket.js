$(document).ready(function(){
	var form=$("#buy-form");

	// function calculateBasketAmount(){
	// 	var totalAmount=0;
		
	// }
	$(document).on('click',".personal_wrap",function(event){
		$('#wrap_ajax_auth').addClass('show');
		$('#wrap_ajax_auth').css('z-index: 3000; margin-left: -260px; opacity: 1; top: 0px; display: block; border-radius:30%;');
	});

	function busketUpdating(product_id,nmb,is_delete){
	 	var data={};
	 	data.product_id = product_id;
	 	data.nmb = nmb;
	 	var csrf_token = $('#buy-form [name="csrfmiddlewaretoken"]').val();
	 	data["csrfmiddlewaretoken"] = csrf_token;

	 	if (is_delete){
	 		data["is_delete"] = true;
	 	}

	 	var url = form.attr("action");
	 	$.ajax({
	 		url: url,
	 		type: 'POST',
	 		data: data,
	 		cache: true,
	 		success: function (data) {
	 			console.log("OK");
	 			console.log(data.products_total_nmb);
	 			if (data.products_total_nmb || data.products_total_nmb == 0){
	 				$('#count_in_basket').text(data.products_total_nmb);
	 				$('#count_in_basket_small').text(data.products_total_nmb);
	 				// $('#basket_total_nmb').text("("+data.products_total_nmb+")");
	 				// console.log(data.products);
	 				$('#basket_items tbody').html("");
	 				$.each(data.products, function(k, v){
	 					console.log('im here');
	 					$('#basket_items tbody').append(
	 						`
							<tr data-id="${v.product_id}" product-id="24616" data-iblockid="">
							    <td class="thumb-cell">
							        <a href="${v.href}" class="thumb"> 
							        <img data-lazyload="" class="lazyload" src="/static/img/${v.image}"
							            alt="${v.name}" title="${v.name}">
							        </a>
							    </td>
							    <td class="name-cell" style="padding-left:0; padding-right:0;">
							        <a href="${v.href}">
							        ${v.name}
							        </a>
							        <br>
							        <div class="item_props">
							        </div>
							    </td>
							    <td class="cost-cell notes">
							        <div class="cost prices clearfix">
							            <div class="price_name">Розничная цена</div>
							            <div class="price">${v.price_per_item} руб.</div>
							            <input type="hidden" name="item_price_${v.product_id}" value="${v.price_per_item}">
							            <input type="hidden" name="item_summ_${v.product_id}" value="${v.price_per_item}">
							        </div>
							    </td>
							    <td class="count-cell" style="vertical-align: top !important; padding-left: 2px; padding-right: 2px;">
							        <div class="counter_block basket">
							            <span onclick="setQuantityFly(&#39;${v.product_id}&#39;, &#39;1&#39;, &#39;down&#39;)" class="minus">-</span> 
							            <input type="text" class="text" id="QUANTITY_INPUT_${v.product_id}" name="QUANTITY_INPUT_${v.product_id}" size="2"
							            data-id="${v.product_id}" data-float_ratio="" maxlength="18" min="0" max="56" step="1" value="${v.nmb}" onchange="updateQuantityFly(&#39;QUANTITY_INPUT_${v.product_id}&#39;, &#39;${v.product_id}&#39;, &#39;1&#39;)">
							            <span onclick="setQuantityFly(&#39;${v.product_id}&#39;, &#39;1&#39;, &#39;up&#39;)" class="plus">+</span> 
							        </div>
							        <input type="hidden" id="QUANTITY_${v.product_id}" name="QUANTITY_${v.product_id}" value="${v.nmb}">
							    </td>
							    <td class="summ-cell">
							        <div class="cost prices">
							            <div class="price">${v.price_per_item*v.nmb} руб.</div>
							        </div>
							    </td>

							    <td class="delay-cell delay">
							        <a class="wish_item" href="https://nippononline.ru/ajax/show_basket_fly.php?action=delay&amp;id=${v.product_id}">
							            <span class="icon" title="Отложить"><i></i></span>
							        </a>
							    </td>
							    <td class="remove-cell">
							    	<a class="remove" href="#" data-id="${v.product_id}" title="Удалить"><i></i></a>
							    </td>
							</tr>
							`);
	 				});
	 			}
	 		},
	 		error: function(){
	 			console.log("error")
	 		}
	 	})
	}
	$(document).on('click','#buy-form #btn-to-basket',function(event){
		event.preventDefault();
		var form=$(event.target).closest('#buy-form');
		if (form){
			var product=form.find('#btn-to-basket');
			var input=form.find('.counter_block');
			var in_basket=form.find('#in-basket-btn');
			var id=product.data('id');
			var nmb=product.data('quantity');
			console.log(id);
			console.log(nmb);
			busketUpdating(id,nmb,is_delete=false);
			product.hide();
			input.hide();
			in_basket.show();

		}
		else{
			return;
		}
	});
	
	$(document).on('click','.ajax_load_btn',function(event){
		event.preventDefault();
		var attres=$('.flex-next').attr('href');
		page=Number.parseInt(attres.slice(-1));
		attres=attres.slice(0,attres.length-1)+page;
		console.log('more');
		$.get(attres, function (data) {
			console.log(data);
            // $('#preloader').hide();
            if (data === '') {
                $('.ajax_load_btn').hide();
            } else {
                // block_request = false;
                console.log('append');
                $('#block').append(data);
            }
        });
        page=page+1;
		attres=attrs.slice(0,attres.length-1)+page;
	});
	$(document).on('click','.remove',function(event){
		event.preventDefault();
		product_id=$(this).data("id");
		nmb=0;
		busketUpdating(product_id,nmb,is_delete=true);
	});
	$(document).on('click','.remove_all_basket',function(event){
		$('.remove').each(function(event){
			product_id=$(this).data("id");
			nmb=0;
			busketUpdating(product_id,nmb,is_delete=true);
		});
	});
	function calculateBigBasketAmount(){
		var totalAmount=0;
		$(".amount").each(function(event){
			var price=parseFloat($(this).attr('data-amount'));
			totalAmount+=price;
		});
		$(".basket-coupon-block-total-price-current").text(`${totalAmount} руб.`);
		$(".basket-checkout-block-total-description").text(`Сумма НДС: ${parseFloat(totalAmount*0.2)} руб.`)
	}
	$(document).on('click',".basket-item-block-amount",function(event){
		event.preventDefault();
		var card = $(event.target).closest('#basket-item');
		var total=card.find("#basket-item-sum-price");
		var price= parseFloat(card.find('#basket-item-price').data('price'));
		var input=$(this).find('#basket-item-quantity');
		var nmb=Number.parseInt(input.val());
		if (event.target.closest('.basket-item-amount-btn-minus') && nmb>1){
			nmb=nmb-1;
		}
		if(event.target.closest('.basket-item-amount-btn-plus') && nmb<56){
			nmb=nmb+1;
		}
		input.val(nmb);
		input.attr('value', nmb);
		totalAmount=nmb*price;
		total.attr('data-amount',totalAmount);
		total.text(`${totalAmount} руб.`);
		calculateBigBasketAmount();
		
	});
	$(document).on('click',".basket-item-actions-remove",function(event){
		console.log('time to change');
		var card=$(this).closest('#basket-item');
		var id=$(this).data('item');
		var name=$(this).data('title');
		var nmb=$(this).data('nmb');
		var img=$(this).data('image');
		var href=$(this).data('href');
		var price=$(this).data('price');
		card.addClass('basket-items-list-item-container-expend');
		var data={};
	 	data.product_id = id;
	 	data.nmb = nmb;
	 	var csrf_token = $('[name="csrfmiddlewaretoken"]').val();
	 	data["csrfmiddlewaretoken"] = csrf_token;
	 	data["is_delete"] = true;
	 	var url = '/nippon/basket_update/';
	 	$.ajax({
	 		url: url,
	 		type: 'POST',
	 		data: data,
	 		cache: true,
	 		success: function (data) {
				card.html(`
					<td class="basket-items-list-item-notification" colspan="5">
						<div class="basket-items-list-item-notification-inner basket-items-list-item-notification-removed" id="basket-item-height-aligner-275955">
							<div class="basket-items-list-item-removed-container">
								<div>
									Товар <strong>${name}</strong> был удален из корзины.
								</div>
								<div class="basket-items-list-item-removed-block">
									<a href="javascript:void(0)" data-entity="basket-item-restore-button" class='basket-item-restore-button'
									data-item="${id}"
									data-name="${name}"
									data-href="${href}"
									data-image="${img}"
									data-nmb="${nmb}"
									data-price="${price}"
									>
									Восстановить							
									</a>
									<span class="basket-items-list-item-clear-btn" data-entity="basket-item-close-restore-button"></span>
								</div>
							</div>
						</div>
					</td>`)
			}
		});
	});
	$(document).on('click','.basket-item-restore-button',function(event){
		console.log('restore');
		var card=$(this).closest('#basket-item');
		var id=$(this).data('item');
		var name=$(this).data('name');
		var nmb=parseFloat($(this).data('nmb'));
		var img=$(this).data('image');
		var href=$(this).data('href');
		var price=parseFloat($(this).data('price'));
		card.removeClass('basket-items-list-item-container-expend');
		var data={};
	 	data.product_id = id;
	 	data.nmb = nmb;
	 	var csrf_token = $('[name="csrfmiddlewaretoken"]').val();
	 	data["csrfmiddlewaretoken"] = csrf_token;
	 	data["is_delete"] = false;
	 	var url = '/nippon/basket_update/';
	 	$.ajax({
	 		url: url,
	 		type: 'POST',
	 		data: data,
	 		cache: true,
	 		success: function (data) {
				card.html(`
					<td class="basket-items-list-item-descriptions">
						<div class="basket-items-list-item-descriptions-inner" id="basket-item-height-aligner-${id}">
							<div class="basket-item-block-image">
								<a href="${href}" class="basket-item-image-link">
									<img data-lazyload="" class="basket-item-image lazyloaded" alt="${name}" src="${img}" data-src="${img}">
								</a>
							</div>
							<div class="basket-item-block-info">
								<span class="basket-item-actions-remove visible-xs" data-entity="basket-item-delete">
									
								</span>
								<h2 class="basket-item-info-name">
									<a href="${href}" class="basket-item-info-name-link">
										<span data-entity="basket-item-name">${name}</span>
									</a>
								</h2>
								<div class="basket-item-block-properties">
									<div class="basket-item-property-custom basket-item-property-custom-text
									" data-entity="basket-item-property">
										<div class="basket-item-property-custom-name">Тип цены</div>
										<div class="basket-item-property-custom-value" data-column-property-code="TYPE" data-entity="basket-item-property-column-value">
										Розничная цена
										</div>
									</div>
								</div>
							</div>
						</div>
					</td>
					<td class="basket-items-list-item-price basket-items-list-item-price-for-one hidden-xs">
						<div class="basket-item-block-price">

							<div class="basket-item-price-current">
								<span class="basket-item-price-current-text" id="basket-item-price" data-price="${price}">
									${price} руб.
								</span>
							</div>
							<div class="basket-item-price-title">
								цена за 1 шт
							</div>
						</div>
					</td>
					<td class="basket-items-list-item-amount">
						
						<div class="basket-item-block-amount" data-entity="basket-item-quantity-block">
							<span class="basket-item-amount-btn-minus" data-entity="basket-item-quantity-minus"></span>
							<div class="basket-item-amount-filed-block">
								<input type="text" class="basket-item-amount-filed" value="${nmb}" data-value="${nmb}"
									data-entity="basket-item-quantity-field" id="basket-item-quantity" min="0" max="56">
							</div>
							<span class="basket-item-amount-btn-plus" data-entity="basket-item-quantity-plus"></span>
							<div class="basket-item-amount-field-description">
								шт
							</div>
						</div>
					</td>
					<td class="basket-items-list-item-price">
						<div class="basket-item-block-price">

							<div class="basket-item-price-current">
								<span class="basket-item-price-current-text amount" id="basket-item-sum-price" data-amount="${nmb*price}">
									${nmb*price} руб.
								</span>
							</div>

						</div>
					</td>
					<td class="basket-items-list-item-remove hidden-xs">
						<div class="basket-item-block-actions">
							<span class="basket-item-actions-remove" data-entity="basket-item-delete"
							data-item="${id}" 
							data-nmb="${nmb}"
							data-title="${name}"
							data-href="${href}"
							data-image="${img}"
							data-price="${price}"></span>
						</div>
					</td>	
					`);
			}
		});
	});

	calculateBigBasketAmount();
});
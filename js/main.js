$(document).ready(function(){
$('.header').height($(window).height());
})
$(".navbar a").click(function(){
$("body,html").animate({
scrollTop:$("#" + $(this).data("value")).offset().top},1000)
})

$(function() {

		let nums = [];
		let minNum = 1;
		let maxNum = 10;
		let minElement = 1;
		let maxElement = 21;
		function outArr() {
			$("#res").html(nums.join(","))
		}
		$("#btnRend").click(
				function() {
					nums = [];
					let n = Math.floor(Math.random() * (maxNum - minNum)
							+ minNum);
					console.log(n);
					for (let i = 0; i < n; i++) {
						nums.push(Math.floor(Math.random()* (maxElement - minElement) + minElement));//квадрат каждого числа в масиве
					}
					outArr();
				});
		$("#btnGet").click(function() {
		 	let min=nums[0];
		 	let max=nums[0];
		 	for (let i = 0; i < nums.length; i++) {
				if (nums[i]<min) {
					min=nums[i]
				}
				if (nums[i]>max) {
					max=nums[i]
				}
			}
		 	$("#res1").html("min "+min+" "+"max "+max);
		});

	});
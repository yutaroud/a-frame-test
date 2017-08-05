AFRAME.registerComponent
('page_back',
	{
		init: function ()
		{
			this.el.addEventListener("click",function()
			{
				history.back();
				
			});
		}
	}
);

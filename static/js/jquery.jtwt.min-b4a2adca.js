!function(t){t.fn.jtwt=function(e){var a={username:"harbor",query:"",count:4,image_size:48,convert_links:!0,loader_text:"loading new tweets",no_result:"No recent tweets found"},e=t.extend(a,e),r=function(t){var e=new Date(t.replace(/^\w+ (\w+) (\d+) ([\d:]+) \+0000 (\d+)$/,"$1 $2 $4 $3 UTC")),a=new Date,r=Math.floor((a-e)/1e3);return 1>=r?"just now":20>r?r+" seconds ago":40>r?"half a minute ago":60>r?"less than a minute ago":90>=r?"one minute ago":3540>=r?Math.round(r/60)+" minutes ago":5400>=r?"1 hour ago":86400>=r?Math.round(r/3600)+" hours ago":129600>=r?"1 day ago":604800>r?Math.round(r/86400)+" days ago":777600>=r?"1 week ago":"on "+e};return this.each(function(){var a,o=e,n=t(this);t(n).append('<ul class="jtwt"></ul>'),t(".jtwt",n).append('<li class="jtwt_loader jtwt_tweet" style="display:none;">'+o.loader_text+"</li>"),t(".jtwt_loader",n).fadeIn("slow"),a=o.query?encodeURIComponent(o.query):"from:"+encodeURIComponent(o.username),t.getJSON("http://search.twitter.com/search.json?q="+a+"&callback=?",function(e){var a=e.results;if(a.length)for(var s=0;o.count>s&&a.length>s;s++){var l=a[s];jtweet='<li class="jtwt_tweet">',o.image_size&&(today=new Date,jtweet+='<div class="jtwt_picture">',jtweet+='<a href="http://twitter.com/'+l.from_user+'">',jtweet+='<img width="'+o.image_size+'" height="'+o.image_size+'" src="'+l.profile_image_url+'" />',jtweet+="</a>",jtweet+="</div>");var w=l.text,i=r(l.created_at);o.convert_links&&(w=w.replace(/(http\:\/\/[A-Za-z0-9\/\.\?\=\-]*)/g,'<a href="$1">$1</a>'),w=w.replace(/@([A-Za-z0-9\/_]*)/g,'<a href="http://twitter.com/$1">@$1</a>'),w=w.replace(/#([A-Za-z0-9\/\.]*)/g,'<a href="http://twitter.com/search?q=$1">#$1</a>')),jtweet+='<p class="jtwt_tweet_text">'+w+"</p>",jtweet+='<a href="http://twitter.com/'+l.from_user+"/statuses/"+l.id_str+'" class="jtwt_date">'+i+"</a>",jtweet+="</li>",t(".jtwt",n).append(jtweet)}else t(".jtwt_loader",n).fadeOut("fast",function(){t(".jtwt",n).append('<li class="jtwt_noresult jtwt_tweet" style="display:none;">'+o.no_result+"</li>"),t(".jtwt_noresult",n).fadeIn("slow")});t(".jtwt_loader",n).fadeOut("fast")})})}}(jQuery);
from django import template
from news.models import News

register=template.Library()


@register.inclusion_tag("news/tags/last_news.html")
def get_last_news():
	news=News.objects.order_by('-publicate')[:3]
	return {"last_news":news}
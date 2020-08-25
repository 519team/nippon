from django import template
from blog.models import Story

register=template.Library()


@register.inclusion_tag("blog/tags/last_story.html")
def get_last_stories():
	stories=Story.objects.order_by('-id')[:3]
	return {"last_stories":stories}
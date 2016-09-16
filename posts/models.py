#-*- coding: utf-8 -*-
from django.db import models as models_sql
from neo4django.db import models as models_neo

# Create your models here.
class Posts(models_neo.NodeModel):
	post_content = models_neo.StringProperty()
	post_image = models_neo.StringProperty()
	post_link = models_neo.StringProperty()
	shared = models_neo.Relationship('self',rel_type='shared_post')
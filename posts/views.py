# -*- coding: utf-8 -*-

from django.shortcuts import render
from posts.models import Posts
from django.db import connection
from posts.forms import Posts
import os
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.conf import settings
from django.http import HttpResponse
from django.views.decorators.csrf import ensure_csrf_cookie
@ensure_csrf_cookie

def home(request):
	return render(request, "home.html", {})

def post_update(request):
	if request.method == 'POST':
		try:
			for filename, file in request.FILES.iteritems():
				data = file
		except:
			return render(request, "home.html", {})
		path = default_storage.save('tmp/somename.jpg', ContentFile(data.read()))
		tmp_file = os.path.join(settings.MEDIA_ROOT, path)
		return render(request, "home.html", {})
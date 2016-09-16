#-*- coding: utf-8 -*-
from django import forms

class Posts(forms.Form):
	post_content = forms.CharField()
	post_image = forms.CharField()
	post_link = forms.CharField()
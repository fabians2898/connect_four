from django.shortcuts import render
from django.views.generic import View
from django.template.response import TemplateResponse

# Create your views here.


class ConnectFourView(View):
    template_name = "index.html"
    def get(self, request):
        return TemplateResponse(request, self.template_name,
            {'current_page': self.template_name})
from django.conf.urls import patterns, include, url
from django.contrib import admin
from app.views import ConnectFourView

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', ConnectFourView.as_view(), name='home'),
)
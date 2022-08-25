FROM nginx
COPY ./docs/.vitepress/dist /usr/share/nginx/html
COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf
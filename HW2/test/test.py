import validators

url = "http://ce441-web.pwni.top:8080/admin/login?token=<script>console.log(admin_token)</script>"

print(validators.url(url))

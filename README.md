To run the application in production run

```bash
bundle exec middleman
```

THe application uses pretty URLS so if you want to add a new route
create a new folder and add a index.html.erb in it. The header and
footers are present in layouts/layout.html.erb.



To add title to individual pages on the top of the page add this
```yml
---
title: Title Example
---
```

To build the project run 

```bash
bundle exec middleman build
```


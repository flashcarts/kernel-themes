# Flashcart Kernel Themes Index

This site is a download repository for flashcart kernel themes. Currently, the site is hosting AKMenu/WoodR4 and YSMenu themes, but more kernels are planned to be added.

<https://themes.flashcarts.net>

### Building the site locally

1. Install [Ruby 3.x](https://www.ruby-lang.org/) for your machine
1. Run `bundle config set --local path vendor/bundle` to ensure that dependency versions do not clash with other ruby projects
1. Run `bundle install` to install dependencies
1. Run `bundle exec jekyll serve`
    - This will build the site to `_site`, and host a simple web server at `127.0.0.1:4000`

### License

- All files under the `_akmenu` and `_ysmenu` directory (the theme index) is licensed under CC-BY-NC-SA 4.0. You may read more in `LICENSE-docs.txt`.
- All other files are licensed under the GPLv3 license. You may read more in `LICENSE-engine.txt`.

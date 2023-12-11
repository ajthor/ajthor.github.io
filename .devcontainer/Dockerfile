FROM node

RUN apt-get update && apt-get install -y \
    ruby-dev \
    ruby-bundler \
    nodejs \
    && rm -rf /var/lib/apt/lists/*

# Clean, install.
RUN bundle clean && bundle install

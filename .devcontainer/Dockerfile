FROM node

# Install program to configure locales
RUN apt-get update && apt-get install -y locales \
  && rm -rf /var/lib/apt/lists/*

RUN dpkg-reconfigure locales && \
  locale-gen C.UTF-8 && \
  /usr/sbin/update-locale LANG=C.UTF-8

# Install needed default locale for Makefly
RUN echo 'en_US.UTF-8 UTF-8' >> /etc/locale.gen && \
  locale-gen

# Set default locale for the environment
ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

RUN apt-get update && apt-get install -y \
  ruby-dev \
  ruby-bundler \
  nodejs \
  && rm -rf /var/lib/apt/lists/*

# Clean, install.
# RUN bundle install

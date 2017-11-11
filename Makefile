all: restart

start:
	@nginx -c ./nginx.conf -p .
	@echo 'nginx started at http://localhost:9001'

stop:
	@nginx -c ./nginx.conf -s stop -p .
	@echo 'nginx stopped'

restart:
	@nginx -c ./nginx.conf -s stop -p .; nginx -c ./nginx.conf -p .
	@echo 'nginx started at http://localhost:9001'

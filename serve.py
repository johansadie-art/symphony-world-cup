import http.server, socketserver, os, sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
ROOT = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)
    def log_message(self, fmt, *args):
        pass

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving {ROOT} on port {PORT}", flush=True)
    httpd.serve_forever()

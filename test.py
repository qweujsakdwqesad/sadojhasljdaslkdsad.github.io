from flask import Flask, request, jsonify
import os

app = Flask(__name__)

jon_confirmed = False

@app.route('/confirm', methods=['GET'])
def confirm():
    global jon_confirmed
    jon_confirmed = True
    return "Jon has confirmed access!"

@app.route('/check', methods=['GET'])
def check():
    return jsonify(jon_confirmed)

@app.route('/reset', methods=['GET'])
def reset():
    global jon_confirmed
    jon_confirmed = False
    return "Jon confirmation has been reset!"

@app.route('/info', methods=['GET'])
def info():
    forwarded_for = request.headers.get('X-Forwarded-For', request.remote_addr)
    forwarded_host = request.headers.get('X-Forwarded-Host', request.host)
    forwarded_port = request.headers.get('X-Forwarded-Port', 'default port')
    
    host_info = f"Forwarded host: {forwarded_for}:{forwarded_port}"
    app.logger.info(host_info)
    
    return jsonify(host=forwarded_for, port=forwarded_port, host_info=host_info)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 3000))
    app.run(host='0.0.0.0', port=port)

function StringBuilder() {
	this.buffer = [];
	this.pref;
	this.suff;
	this.callstack = [];
}

(function(SB) {
	function argumentsToArray(args) {
		return Array.prototype.slice.call(args);
	}

	SB.cat = function cat() {
		var internalBuffer, pref, suff;

		for(var i = 0; i < arguments.length; i += 1) {
			var x = arguments[i];

			if(typeof x === "function") {
				x = x();

				if(typeof x === "number") {
					x = x.toString();
				}
				else if(typeof x === "function") {
					this.cat.call(this, x);
				}
			}

			if(typeof x === "number") {
				x = x.toString();
			}

			if(typeof x === "string") {
				if(this.pref !== undefined && i == 0) {
						internalBuffer = new StringBuilder();
						internalBuffer.cat(this.pref);
						pref = internalBuffer.buffer.join('');
				}
				else {
					pref = "";
				}
				
				if(this.suff !== undefined && i == (arguments.length - 1)) {
					internalBuffer = new StringBuilder();
					internalBuffer.cat(this.suff);
					suff = internalBuffer.buffer.join('');
				}
				else {
					suff = "";
				}

				// this.buffer.push({"string": x, "pref": pref, "suff": suff});
				this.buffer.push(pref + x + suff);
			}

			if(x instanceof Array) {
				this.cat.apply(this, x);
			}
		}

		return this;
	};

	SB.rep = function rep() {
		var howManyTimes, args;

		if(arguments && arguments.length >= 2) {
			howManyTimes = arguments[arguments.length - 1]

			if(typeof howManyTimes === "number") {
				args = argumentsToArray(arguments);
				args = args.slice(0, args.length - 1);

				for(var i = 0; i < howManyTimes; i += 1) {
					this.cat.apply(this, args);
				}
			}
		}

		return this;
	};

	SB.catIf = function catIf() {
		var flag, args;

		if(arguments && arguments.length >= 2) {
			flag = arguments[arguments.length - 1]

			if(typeof flag === "boolean" && flag) {
				args = argumentsToArray(arguments);
				args = args.slice(0, args.length - 1);

				this.cat.apply(this, args);
			}
		}

		return this;
	};

	SB.string = function string() {
		return this.buffer.join('');
	};

	SB.wrap = function wrap(prefix, suffix) {
		this.callstack.push(["wrap", arguments]);

		this.pref = prefix;
		this.suff = suffix;

		return this;
	};

	SB.end = function end(deep) {
		var deep = (deep !== undefined && deep !== null) ? deep : 1, lastCall;

		if(this.callstack.length > deep) {
			this.callstack.splice((0 - deep), deep);
			lastCall = this.callstack[this.callstack.length - 1];
			this.callstack.pop();

			this[lastCall[0]].apply(this, lastCall[1]);
		}
		else {
			this.wrap('', '');
		}

		return this;
	};

	SB.prefix = function prefix() {
		var args = argumentsToArray(arguments);

		this.callstack.push(["prefix", args]);

		this.pref = args;

		return this;
	};

	SB.suffix = function suffix() {
		var args = argumentsToArray(arguments);

		this.callstack.push(["suffix", args]);

		this.suff = args;

		return this;
	};

	SB.each = function(args, callback) {
		for(var i = 0; i < args.length; i += 1) {
			callback.call(this, args[i], i, args);
		}

		return this;
	};
}(StringBuilder.prototype));
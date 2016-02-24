(function() {
	var sb;

	// describe("Constructor", function() {
	// 	it("should return a valid constructor", function() {
	// 		var sb = new StringBuilder();
	// 		expect(sb instanceof StringBuilder).toBeTruthy();
	//     });
	// });

	// describe("Cat", function() {
	// 	it("should return context", function() {
	// 		sb = new StringBuilder();
	// 		expect(sb.cat('hello')).toEqual(sb);
	//     });

	//     it("should accept one or many strings", function() {
	// 		sb = new StringBuilder();
	// 		sb.cat('hello');

	// 		expect(sb.buffer.length).toEqual(1);

	// 		sb = new StringBuilder();
	// 		sb.cat('Javascript', 'crazy', 'world');

	// 		expect(sb.buffer.length).toEqual(3);
	//     });

	//     it("should also take functions as parameters and add the result of" +
	//        "the function to the buffer", function() {
	// 		sb = new StringBuilder();
			
	// 		sb.cat('this is the first','line', '\n')
	// 		.cat('here is the second')
	// 		.cat('and then', 'the third')
	// 		.cat('now', function() { return 'we can make some calcs'; },
	// 		'here');

	// 		expect(sb.buffer.length).toEqual(9);
	//     });

	//     it("should also take arrays as parameters and add each element " +
	//     	"to the buffer", function() {
	// 		sb = new StringBuilder();
	// 		sb.cat('this', [' is', ' a', ' string'], ' in the') .cat(' array', ' :­)');

	// 		expect(sb.buffer.length).toEqual(7);
	//     });

	//     it("should execute functions inside array parameters and then add " +
	//     	"the result to the buffer", function() {
	// 		sb = new StringBuilder();
	// 		sb.cat('this', [' is', function() { 
	// 			return [' a', ' function that', ' returns an array']; 
	// 		}], ' ;)');

	// 		expect(sb.buffer.length).toEqual(6);
	//     });
	// });

	// describe("Rep", function() {
	// 	it("should return context", function() {
	// 		sb = new StringBuilder();
	// 		expect(sb.rep('hello', 5)).toEqual(sb);
	//     });

	//     it("should concatenate the same string a given number of times.", function() {
	// 		sb = new StringBuilder();
	// 		expect(sb.rep('hello', 5).buffer.length).toEqual(5);
	//     });
	// });

	// describe("CatIf", function() {
	// 	it("should return context", function() {
	// 		sb = new StringBuilder();
	// 		expect(sb.catIf('hello', 1 == 1)).toEqual(sb);
	//     });

	//     it("should concatenate only the strings that satisfies the condition", 
	//     	function() {
	// 		sb = new StringBuilder(), sex = "m";

	// 		sb.cat('Hello')
	// 			.catIf('pretty', 'lady!', sex === 'f') 
	// 			.catIf('gentleman!', sex === 'm') 
	// 			.catIf('and', 'good', 'bye!', !sex);

	// 		expect(sb.buffer).toEqual(["Hello", "gentleman!"]);
	//     });
	// });

	// describe("String", function() {
	//     it("should concatenate all the elements stored in the buffer", 
	//     	function() {
	// 		sb = new StringBuilder();
	// 		sb.cat('hello', ' world', '!');

	// 		expect(sb.string()).toEqual("hello world!");
	//     });
	// });

	// describe("Wrap", function() {
	//     it("should return context", function() {
	// 		sb = new StringBuilder();
	// 		expect(sb.wrap('<', '>')).toEqual(sb);
	//     });

	//     it("should add prefix and/or suffix to everything added after calling" +
	//        "this function", function() {
	// 		sb = new StringBuilder();

	// 		sb.wrap('<', '>');
	// 		sb.cat('hello', ' world', '!');

	// 		expect(sb.string()).toEqual('<hello world!>');
	//     });

	//     it("should accept functions to be called as prefix/suffix", function() {
	// 		sb = new StringBuilder();

	// 		sb.wrap(function() { return '**'; }, function() { return '--'; });
	// 		sb.cat('hello');

	// 		expect(sb.string()).toEqual('**hello--');
	//     });

	//     it("should accept arrays containing any kind of elements", function() {
	// 		sb = new StringBuilder();

	// 		sb.wrap([
	// 			function() { 
	// 				var count = 0;
	// 				return function() { 
	// 					return count += 1; 
	// 				}
	// 			}(), 
	// 			'.-'
	// 		], ' ');

	// 		sb.cat('one').cat('two').cat('three');

	// 		expect(sb.string()).toEqual('1.-one 2.-two 3.-three ');
	//     });
	// });

	// describe("End", function() {
	//     it("should return context", function() {
	// 		sb = new StringBuilder();
	// 		expect(sb.end()).toEqual(sb);
	//     });

	//     it("should cancel the last effect added by calling Wrap, Prefix or " +
	//     	"Suffix", function() {
	// 		sb = new StringBuilder();

	// 		sb.wrap([function() { 
	// 				var count = 0;
	// 				return function() { 
	// 					return count += 1; 
	// 				}
	// 			}(), '.-'], ' ');

	// 		sb.wrap('*', '--');
	// 		sb.cat('hello');

	// 		expect(sb.string()).toEqual('*hello--');
			
	// 		sb.end();
	// 		sb.cat('world');

	// 		expect(sb.string()).toEqual('*hello--1.-world ');
	//     });

	//     it("should cancel the last 'deep' effects added by calling Wrap, Prefix or " +
	//     	"Suffix", function() {
	// 		sb = new StringBuilder();

	// 		sb.wrap('$', '')
	// 			.wrap('*', '**')
	// 			.wrap('<', '>')
	// 			.cat('hello');

	// 		expect(sb.string()).toEqual('<hello>');

	// 		sb.end(2).cat('world');

	// 		expect(sb.string()).toEqual('<hello>$world');

	//     });
	// });

	// describe("Prefix", function() {
	//     it("should return context", function() {
	// 		sb = new StringBuilder();
	// 		expect(sb.prefix()).toEqual(sb);
	//     });

	//     it("should add a prefix to everything added after calling this " +
	//     	"function", function() {
	// 		sb = new StringBuilder();

	// 		sb.cat('Todo list:*')
	// 			.prefix('-')
	// 			.cat('first thing to do*') 
	// 			.cat('second', ' thing', ' to do*') 
	// 			.cat('third thing to do*');

	// 		expect(sb.string()).toEqual('Todo list:*' +
	// 		'-first thing to do*' +
	// 		'-second thing to do*' +
	// 		'-third thing to do*');
	//     });
	// });

	// describe("Suffix", function() {
	//     it("should return context", function() {
	// 		sb = new StringBuilder();
	// 		expect(sb.suffix()).toEqual(sb);
	//     });

	//     it("should add a suffix to everything added after calling this " +
	//     	"function", function() {
	// 		sb = new StringBuilder();

	// 		sb.suffix('*')
	// 			.cat('Todo list:')
	// 			.prefix('-')
	// 			.cat('first thing to do') 
	// 			.cat('second', ' thing', ' to do') 
	// 			.cat('third thing to do');

	// 		expect(sb.string()).toEqual('Todo list:*' +
	// 		'-first thing to do*' +
	// 		'-second thing to do*' +
	// 		'-third thing to do*');
	//     });
	// });

	describe("Each", function() {
		var people = [
				{ name: 'pedro', sex: 'm', age: 30 }, 
				{ name: 'leticia', sex: 'f', age: 21 }, 
				{ name: 'pablo', sex: 'm', age: 20 }
			];

	    it("should return context", function() {
			sb = new StringBuilder();
			expect(sb.suffix()).toEqual(sb);
	    });

	    it("should iterate over an array of values and then call the callback " +
	    	"function", function() {
    		sb = new StringBuilder(); 

			sb.cat('<table>')
				.cat('<thead><tr><th>Name</th><th>Sex</th><th>Age</td></thead>')
				.cat('<tbody>')
				.each(people, function(value, index, thePeople) {
					this.cat('<tr>')
						.cat('<td>', value.name, '</td>') 
						.cat('<td>', value.sex, '</td>') 
						.cat('<td>', value.age, '</td>') 
						.cat('</tr>');
				})
				.cat('</tbody>')
				.cat('</table>');

			expect(sb.string()).toEqual('<table>' +
				'<thead><tr><th>Name</th><th>Sex</th><th>Age</td></thead>' +
				'<tbody><tr><td>pedro</td><td>m</td><td>30</td></tr>' +
				'<tr><td>leticia</td><td>f</td><td>21</td></tr>' +
				'<tr><td>pablo</td><td>m</td><td>20</td></tr></tbody></table>');
	    });

	    it("should call the callback setting the context to the StringBuilder",
	       function() {
       		sb = new StringBuilder();

       		var arr = [{
       			"firstname": "Rafa", "lastname": "Manrique"
       		}];

       		sb.each(arr, function(value, index, thePeople) {
				expect(this).toEqual(sb);
			});
	    });

	    it("should send three parameters value, index and the given args array itself",
	       function() {
       		sb = new StringBuilder();

       		var arr = [{
       			"firstname": "Rafa", "lastname": "Manrique"
       		}];

       		sb.each(arr, function(value, index, thePeople) {
				expect(arguments.length).toEqual(3);
			});
	    });
	});	
})();
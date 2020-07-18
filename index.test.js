const parser = require('./parser')


it('should parse simple flags', () => {  
    const input = "--foo"
    const should_be = JSON.stringify({"foo": true})
    
    const parsed = parser.parser(input)
    const is = parser.formatter(parsed)

    if (is !== should_be) {
       throw new Error(`Expected: ${should_be}, but got ${is}`)
    }
});
it('should parse composite flags', () => {  
    const input = "--foo bar"
    const should_be = JSON.stringify({"foo": "bar"})
    
    const parsed = parser.parser(input)
    const is = parser.formatter(parsed)

    if (is !== should_be) {
       throw new Error(`Expected: ${should_be}, but got ${is}`)
    }
});
it('should parse composite flags with integer values', () => {  
    const input = "--number 1"
    const should_be = JSON.stringify({"number": 1})
    
    const parsed = parser.parser(input)
    const is = parser.formatter(parsed)

    if (is !== should_be) {
       throw new Error(`Expected: ${should_be}, but got ${is}`)
    }
});
it('should parse multiple flags at once', () => {  
    const input = "--foo --bar baz --number 1"
    const should_be = JSON.stringify({"bar": "baz", "foo": true, "number": 1})
    
    const parsed = parser.parser(input)
    const is = parser.formatter(parsed)

    if (is !== should_be) {
       throw new Error(`Expected: ${should_be}, but got ${is}`)
    }
});
it('should handle multiple values for the same flag', () => {  
    const input = "--foo --bar baz --bar zab --number 1"
    const should_be = JSON.stringify({"bar": ["baz", "zab"], "foo": true, "number": 1})
    
    const parsed = parser.parser(input)
    const is = parser.formatter(parsed)

    if (is !== should_be) {
       throw new Error(`Expected: ${should_be}, but got ${is}`)
    }
});


it('should parse simple flags (array input)', () => {  
    const input = ["--foo"]
    const should_be = JSON.stringify({"foo": true})
    
    const parsed = parser.parser(input)
    const is = parser.formatter(parsed)

    if (is !== should_be) {
       throw new Error(`Expected: ${should_be}, but got ${is}`)
    }
});
it('should parse composite flags  (array input)', () => {  
    const input = ["--foo", "bar"]
    const should_be = JSON.stringify({"foo": "bar"})
    
    const parsed = parser.parser(input)
    const is = parser.formatter(parsed)

    if (is !== should_be) {
       throw new Error(`Expected: ${should_be}, but got ${is}`)
    }
});
it('should parse composite flags with integer values (array input)', () => {  
    const input = ["--number", "1"]
    const should_be = JSON.stringify({"number": 1})
    
    const parsed = parser.parser(input)
    const is = parser.formatter(parsed)

    if (is !== should_be) {
       throw new Error(`Expected: ${should_be}, but got ${is}`)
    }
});
it('should parse multiple flags at once (array input)', () => {  
    const input = ["--foo",  "--bar",  "baz", "--number",  "1"]
    const should_be = JSON.stringify({"bar": "baz", "foo": true, "number": 1})
    
    const parsed = parser.parser(input)
    const is = parser.formatter(parsed)

    if (is !== should_be) {
       throw new Error(`Expected: ${should_be}, but got ${is}`)
    }
});
it('should handle multiple values for the same flag (array input)', () => {  
    const input = ["--foo", "--bar baz",  "--bar zab",  "--number 1"]
    const should_be = JSON.stringify({"bar": ["baz", "zab"], "foo": true, "number": 1})
    
    const parsed = parser.parser(input)
    const is = parser.formatter(parsed)

    if (is !== should_be) {
       throw new Error(`Expected: ${should_be}, but got ${is}`)
    }
});
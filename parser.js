
/*
    UTILITIES
*/
const removeEmpty = (arr) => arr.filter(x => x)


/*
    PARSER
        as input it takes a string or an array of cli args like --option param1 param2
        it returns an object like {option: ['param1', 'param2'] }
*/
module.exports.parser = data => {
    data = Array.isArray(data) ? data.join(" ") : data
    data = removeEmpty(data.split("--")); 

    return data.reduce((obj, args) => {
        args = removeEmpty(args.split(" "));
        let op = args.shift()
        obj[op] = Array.isArray(obj[op]) ? obj[op].concat(args) : args
        
        return obj;
  }, {});
}


/*
    FORMATTER
        it formats parsed object params:
         - if there are no params, the output is true
         - if there is 1 param, the output is only the param (not a single array item)
         - if a param could be an Int, it will be convert into an Int
        it returns a JSON
*/
module.exports.formatter = data => {
    data = Object.fromEntries(Object.entries(data).sort())
    return JSON.stringify(data, (_, val) => {  
        
        if (val.length === 0) return true
        if (val.length === 1) val = val[0]
        if (!Array.isArray(val) && !isNaN(parseInt(val))) return parseInt(val)
        
        return val
    })
}
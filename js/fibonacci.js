exports.fibonacci = function(num) 
{
    let a = 0
    let b = 1
    
    if (num == 0) 
        return a
    else if (num == 1)
        return b

    let f = 0

    for (let i = 1; i < num; ++i)
    {
        f = a + b
        a = b
        b = f
    }

    return f
};


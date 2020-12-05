def fibonacci(n):
    a = 0
    b = 1
    
    if (n == 0):
        return a
    elif (n == 1):
        return b

    f = 0

    while (n > 1):
        f = a + b
        a = b
        b = f
        n -= 1

    return f


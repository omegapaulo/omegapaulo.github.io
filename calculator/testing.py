
"""Implementation of Basic Math in Python."""
import math


def prime_factors(n: int) -> list:
    """Find Prime Factors.
    >>> prime_factors(100)
    [2, 2, 5, 5]
    """
    pf = []
    while n % 2 == 0:
        pf.append(2)
        n = int(n / 2)
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        while n % i == 0:
            pf.append(i)
            n = int(n / i)
    if n > 2:
        pf.append(n)
    return pf


def number_of_divisors(n: int) -> int:
    """Calculate Number of Divisors of an Integer.
    >>> number_of_divisors(100)
    9
    """
    div = 1
    temp = 1
    while n % 2 == 0:
        temp += 1
        n = int(n / 2)
    div *= temp
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        temp = 1
        while n % i == 0:
            temp += 1
            n = int(n / i)
        div *= temp
    return div


def sum_of_divisors(n: int) -> int:
    """Calculate Sum of Divisors.
    >>> sum_of_divisors(100)
    217
    """
    s = 1
    temp = 1
    while n % 2 == 0:
        temp += 1
        n = int(n / 2)
    if temp > 1:
        s *= (2 ** temp - 1) / (2 - 1)
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        temp = 1
        while n % i == 0:
            temp += 1
            n = int(n / i)
        if temp > 1:
            s *= (i ** temp - 1) / (i - 1)
    return int(s)


def euler_phi(n: int) -> int:
    """Calculate Euler's Phi Function.
    >>> euler_phi(100)
    40
    """
    s = n
    for x in set(prime_factors(n)):
        s *= (x - 1) / x
    return int(s)


if __name__ == "__main__":
    print(prime_factors(100))
    print(number_of_divisors(100))
    print(sum_of_divisors(100))
    print(euler_phi(100))

    def trapezoidal_area(
    fnc: Callable[[Union[int, float]], Union[int, float]],
    x_start: Union[int, float],
    x_end: Union[int, float],
    steps: int = 100,
) -> float:
    """
    Treats curve as a collection of linear lines and sums the area of the
    trapezium shape they form
    :param fnc: a function which defines a curve
    :param x_start: left end point to indicate the start of line segment
    :param x_end: right end point to indicate end of line segment
    :param steps: an accuracy gauge; more steps increases the accuracy
    :return: a float representing the length of the curve
    >>> def f(x):
    ...    return 5
    >>> f"{trapezoidal_area(f, 12.0, 14.0, 1000):.3f}"
    '10.000'
    >>> def f(x):
    ...    return 9*x**2
    >>> f"{trapezoidal_area(f, -4.0, 0, 10000):.4f}"
    '192.0000'
    >>> f"{trapezoidal_area(f, -4.0, 4.0, 10000):.4f}"
    '384.0000'
    """
    x1 = x_start
    fx1 = fnc(x_start)
    area = 0.0
    for i in range(steps):
        # Approximates small segments of curve as linear and solve
        # for trapezoidal area
        x2 = (x_end - x_start) / steps + x1
        fx2 = fnc(x2)
        area += abs(fx2 + fx1) * (x2 - x1) / 2
        # Increment step
        x1 = x2
        fx1 = fx2
    return area


if __name__ == "__main__":

    def f(x):
        return x ** 3 + x ** 2

    print("f(x) = x^3 + x^2")
    print("The area between the curve, x = -5, x = 5 and the x axis is:")
    i = 10
    while i <= 100000:
        print(f"with {i} steps: {trapezoidal_area(f, -5, 5, i)}")
        i *= 10

function isPrime(number) {
  if (number <= 1 || number <= 3) return false;
  else if (number % 2 === 0 || number % 3 === 0) return false;

  let i = 5;

  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) return false;

    i += 6;
  }

  return true;
}

/*
PYTHON IMPLEMENTATION
---------------------

def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

# Example usage
print(is_prime(29))  # True
print(is_prime(30))  # False

*/

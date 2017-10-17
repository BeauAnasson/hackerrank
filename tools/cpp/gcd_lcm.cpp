int gcd( int a, int b )
{
  if (a > b) {
    std::swap( a, b );
  }

  while ( b > 0 ) {
    int f = a % b;
    a = b;
    b = f;
  }

  return a;
}

int lcm( int a, int b )
{
  return (a * b) / gcd( a, b );
}

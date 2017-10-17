#include <iostream>

using namespace std;

int main()
{
  int sizeA, sizeB;
  cin >> sizeA >> sizeB;

  int A[sizeA];
  int B[sizeB];

  for (int i = 0; i < sizeA; ++i) {
    cin >> A[i];
  }

  for (int i = 0; i < sizeB; ++i) {
    cin >> B[i];
  }

  bool isBetween;
  int numBetweens = 0;
  for (int x = A[sizeA - 1]; x <= B[0]; ++x) {
    isBetween = true; // Assume x is between A and B.

    // Test if A is divides X.
    for (int i = 0; i < sizeA && isBetween; ++i) {
      if (x % A[i] != 0) {
        isBetween = false;
      }
    }

    // Test if X is divides B.
    for (int i = 0; i < sizeB && isBetween; ++i) {
      if (B[i] % x != 0) {
        isBetween = false;
      }
    }

    if (isBetween) {
      ++numBetweens;
    }
  }

  cout << numBetweens << endl;

  return 0;
}

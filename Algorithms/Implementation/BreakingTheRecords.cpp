#include <iostream>

using namespace std;

int main()
{
  int numGames;
  cin >> numGames;

  int score;
  int lowestScore;
  int highestScore;

  cin >> score;
  lowestScore = score;
  highestScore = score;

  int lowestRecordsBroken = 0;
  int highestRecordsBroken = 0;
  for (int game = 0; game < numGames - 1; ++game) {
    cin >> score;
    if (score < lowestScore) {
      lowestScore = score;
      ++lowestRecordsBroken;
    } else if (score > highestScore) {
      highestScore = score;
      ++highestRecordsBroken;
    }
  }

  cout << highestRecordsBroken << " " << lowestRecordsBroken << endl;

  return 0;
}

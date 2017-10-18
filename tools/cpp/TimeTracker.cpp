#include <iostream>
#include <chrono>

class TimeTracker {
  public:
    TimeTracker( );
    template<typename T>
    long totalElapsedTime( );
    template<typename T>
    long lapTime( );
  private:
    std::chrono::high_resolution_clock::time_point objectCreationTime;
    std::chrono::high_resolution_clock::time_point lapStartTime;
};

TimeTracker::TimeTracker( ) {
  objectCreationTime = std::chrono::high_resolution_clock::now( );
  lapStartTime = objectCreationTime;
}

template<typename T>
long TimeTracker::totalElapsedTime( ) {
  auto currentTime = std::chrono::high_resolution_clock::now( );

  auto difference = std::chrono::duration_cast<T>( currentTime - objectCreationTime );

  return difference.count( );
}

template<typename T>
long TimeTracker::lapTime( ) {
  auto currentTime = std::chrono::high_resolution_clock::now();
  auto lapTime = std::chrono::duration_cast<T>( currentTime - lapStartTime );

  lapStartTime = currentTime;

  return lapTime.count( );
}

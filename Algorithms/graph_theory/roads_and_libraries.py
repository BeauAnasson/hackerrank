def num_connected_cities(city, cities, visited):
    connected = 0

    visited[city] = True

    for adjacent_city in cities[city]:
        if visited[adjacent_city] is False:
            connected = connected + 1 + num_connected_cities(adjacent_city, cities, visited)

    return connected

def utility_count(cities):
    num_libs = 0
    num_roads = 0
    visited = [False] * len(cities)

    for city in cities:
        if visited[city] is False:
            num_libs = num_libs + 1
            num_roads = num_roads + num_connected_cities(city, cities, visited)

    return num_libs, num_roads

num_queries_str = input().strip()
num_queries = int(num_queries_str)

for query in range(num_queries):
    num_cities_str, num_damaged_roads_str, lib_cost_str, road_cost_str = input().strip().split(' ')
    num_cities, num_damaged_roads, lib_cost, road_cost = int(num_cities_str), int(num_damaged_roads_str), \
                                                 int(lib_cost_str), int(road_cost_str)

    if lib_cost <= road_cost:
        cost = num_cities * lib_cost
        print(cost)

        for damaged_road in range(num_damaged_roads):
            input()

        continue

    cities = { n: [] for n in range(num_cities) }

    for damaged_road in range(num_damaged_roads):
        start_city_str, end_city_str = input().strip().split(' ')
        start_city, end_city = int(start_city_str) - 1, int(end_city_str) - 1

        cities[start_city].append(end_city)
        cities[end_city].append(start_city)

    num_libs, num_roads = utility_count(cities)

    cost = num_libs * lib_cost + num_roads * road_cost
    print(cost)

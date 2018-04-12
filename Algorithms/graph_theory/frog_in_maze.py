import random

SIMULATIONS = 1000000
DIRECTIONS = [(1, 0), (0, -1), (-1, 0), (0, 1)]
START_CELL = 'A'
EXIT = '%'
FREE_CELL = '0'
OBSTACLE = '#'
MINE = '*'

def move(pos, direction):
    return (pos[0] + direction[0], pos[1] + direction[1])

def in_boundary(pos, rows, cols):
    return 0 <= pos[0] and pos[0] < rows and \
           0 <= pos[1] and pos[1] < cols

def is_tunnel(pos, maze):
    return isinstance(maze[pos[0]][pos[1]], tuple)

def is_exit(pos, maze):
    return maze[pos[0]][pos[1]] == EXIT

def is_boxed_in(pos, rows, cols, maze):
    move_one = move(pos, DIRECTIONS[0])
    move_two = move(pos, DIRECTIONS[1])
    move_three = move(pos, DIRECTIONS[2])
    move_four = move(pos, DIRECTIONS[3])

    return (not in_boundary(move_one, rows, cols) or maze[move_one[0]][move_one[1]] == OBSTACLE) and \
            (not in_boundary(move_two, rows, cols) or maze[move_two[0]][move_two[1]] == OBSTACLE) and \
            (not in_boundary(move_three, rows, cols) or maze[move_three[0]][move_three[1]] == OBSTACLE) and \
            (not in_boundary(move_four, rows, cols) or maze[move_four[0]][move_four[1]] == OBSTACLE)


def is_death(pos, rows, cols, maze):
    return is_boxed_in(pos, rows, cols, maze) or maze[pos[0]][pos[1]] == MINE


rows_str, cols_str, tunnels_str = input().strip().split(' ')
rows, cols, tunnels = int(rows_str), int(cols_str), int(tunnels_str)

maze = []
start_pos = None

for row in range(rows):
    maze.append([])

    grid_line = input().strip()
    for col in range(cols):
        if grid_line[col] == START_CELL:
            start_pos = (row, col)

        maze[row].append(grid_line[col])

for tunnel in range(tunnels):
    entrance_row_str, entrace_col_str, exit_row_str, exit_col_str = input().strip().split(' ')
    entrance, exit = (int(entrance_row_str) - 1, int(entrace_col_str) - 1), (int(exit_row_str) - 1, int(exit_col_str) - 1)

    maze[exit[0]][exit[1]] = entrance
    maze[entrance[0]][entrance[1]] = exit

survived = 0
for simulation in range(SIMULATIONS):
    pos = start_pos

    while True:
        direction = DIRECTIONS[random.randint(0, 3)]

        next_pos = move(pos, direction)

        if in_boundary(next_pos, rows, cols):
            if is_tunnel(next_pos, maze):
                next_pos = maze[next_pos[0]][next_pos[1]]

            if is_exit(next_pos, maze):
                survived = survived + 1
                break

            elif is_death(next_pos, rows, cols, maze):
                break

            pos = next_pos

survival_rate = survived / SIMULATIONS
print(survival_rate)

            # if is_exit(next_pos, maze):
            #     survived += 1
            #     break
            # elif is_death(next_pos, maze):
            #     break
            # elif is_valid_pos(next_pos, maze):
            #     pos = next_pos

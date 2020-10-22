import React from 'react';

class Grid {
	constructor(size = 25, current_grid = null, next_grid = null) {
		this.size = size;
		this.current_grid = current_grid;
		this.next_grid = next_grid;
	}

	generateGrid() {
		const map = {};

		for (let i = 0; i < this.size; i++) {
			map[i] = [];
			for (let j = 0; j < this.size; j++) {
				map[i].push(false);
			}
		}

		this.current_grid = map;
	}

	renderDOM(Component) {
		const arr = [];
		for (let key in this.getCurrentGrid()) {
			// eslint-disable-next-line array-callback-return
			this.getCurrentGrid()[key].map((value, index) => {
				arr.push(
					<Component
						key={`${key} ${index}`}
						x={index}
						y={parseInt(key)}
						isAlive={this.getCurrentGrid()[key][index]}
						size={this.getSize()}
					/>
				);
			});
		}

		console.log('DOM', arr);
		return arr;
	}

	updateGrid(y, x) {
		this.next_grid = { ...this.current_grid };

		this.next_grid[x][y] = !this.next_grid[x][y];

		this.current_grid = { ...this.next_grid };
		this.next_grid = null;
	}

	getCurrentGrid() {
		return this.current_grid;
	}

	getNextGrid() {
		return this.next_grid;
	}

	getSize() {
		return this.size;
	}

	simulateGrid() {
		this.next_grid = {};
		for (let y in this.getCurrentGrid()) {
			this.next_grid[y] = [];
			for (let x in this.getCurrentGrid()) {
				let livingNeighbors = 0;
				// Left
				if (x > 0) {
					if (this.getCurrentGrid()[y][x - 1]) {
						livingNeighbors += 1;
					}
				}
				//Right
				if (x < this.getSize() - 1) {
					if (this.getCurrentGrid()[y][x + 1]) {
						livingNeighbors += 1;
					}
				}

				// up
				if (y > 0) {
					if (this.getCurrentGrid()[y - 1][x]) {
						livingNeighbors += 1;
					}
				}
				//Down

				if (y < this.getSize() - 1) {
					if (this.getCurrentGrid()[y + 1][x]) {
						livingNeighbors += 1;
					}
				}

				// // top-left
				// if (x > 0 && y > 0) {
				// 	if (this.getCurrentGrid()[y - 1][x - 1]) {
				// 		livingNeighbors += 1;
				// 	}
				// }

				// // top-right
				// if (y > 0 && x < this.getSize() - 1) {
				// 	if (this.getCurrentGrid()[y - 1][x + 1]) {
				// 		livingNeighbors += 1;
				// 	}
				// }

				// // bottom-right 23-
				// if (y < this.getSize() - 1 && x < this.getSize() - 1) {
				// 	if (this.getCurrentGrid()[y + 1][x + 1]) {
				// 		livingNeighbors += 1;
				// 	}
				// }

				// //bottom-left
				// if (y < this.getSize() - 1 && x > 0) {
				// 	if (this.getCurrentGrid()[y + 1][x - 1]) {
				// 		livingNeighbors += 1;
				// 	}
				// }

				if (!this.getCurrentGrid()[y][x] && livingNeighbors === 3) {
					this.next_grid[y].push(true);
				}

				if (this.getCurrentGrid()[y][x] && (livingNeighbors <= 1 || livingNeighbors >= 4)) {
					this.next_grid[y].push(false);
				} else {
					this.next_grid[y].push(true);
				}
			}
			//
		}
		console.log(this.next_grid);
		this.current_grid = this.next_grid;
		this.next_grid = null;
	}
}
export default Grid;

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

	updateGrid(y, x) {
		this.next_grid = { ...this.current_grid };

		this.next_grid[x][y] = !this.next_grid[x][y];

		this.current_grid = { ...this.next_grid };
		this.next_grid = null;
		console.log(this.current_grid);
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

	simulateGrid(grid) {}
}
export default Grid;

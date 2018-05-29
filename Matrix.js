class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = [];

    for (var i = 0; i < this.rows; i++) {
      this.data[i] = []
      for (var j = 0; j < this.cols; j++) {
        this.data[i][j] = 0;
      }
    }
  }

  scale(n) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        this.data[i][j] *= n;
      }
    }
  }

  add(n) {
    if (n instanceof Matrix) {
      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
          this.data[i][j] += n.data[i][j];
        }
      }

    } else {
      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
          this.data[i][j] += n;
        }
      }
    }
  }

  static multiply(a, b) {
    if (a.cols !== b.rows) {
      console.log('Les colones doivent correspondre aux lignes et colones')
      return undefined;
    } else {
      var result = new Matrix(a.rows, b.cols);
      for (var i = 0; i < result.rows; i++) {
        for (var j = 0; j < result.cols; j++) {
          var somme = 0;
          for (var k = 0; k < a.cols; k++) {
            somme += a.data[i][k] * b.data[k][j]
          }
          result.data[i][j] = somme;
        }
      }
      return result;
    }
  }

  map(fn) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        var val = this.data[i][j];
        this.data[i][j] = fn(val);
      }
    }
  }

  randomize(n) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        this.data[i][j] = Math.random() * 2 - 1;
      }
    }
  }

  transpose() {
    var result = new Matrix(this.cols, this.rows);
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        result.data[j][i] = this.data[i][j]
      }
    }
  }

  static fromArray(arr) {
    var m = new Matrix(arr.length, 1);
    for (var i = 0; i < arr.length; i++) {
      m.data[i][0] = arr[i];
    }
    return m;
  }

  toArray() {
    var arr = [];
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        arr.push(this.data[i][j]);
      }
    }
    return arr;
  }

  print() {
    console.table(this.data);
  }
}

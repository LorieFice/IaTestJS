function setup() {
  var nn = new NeuralNetwork(2, 2, 1);

  var input = [0, 0];

  var output = nn.feedforward(input);
  console.log(output);
}

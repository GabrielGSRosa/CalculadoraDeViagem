alert("Os valores apresentados aqui não levam em conta tipo de estrada, trânsito, falhas no motor etc.\n Não tome os valores como lei!")

function calcularCustoViagem(precoCombustivel, distancia) {
    // Puxar os valores do formulario
    var precoCombustivel = parseFloat(document.getElementById('precoCombustivel').value)
    var distanciaPercorrida = parseFloat(document.getElementById('distanciaPercorrida').value)
    var consumoCarro = parseFloat(document.getElementById('consumoCarro').value)
    var outputText = document.getElementById("outputText")

    if (isNaN(precoCombustivel) || isNaN(distanciaPercorrida) || isNaN(consumoCarro)) {

      outputText.textContent = "Por favor, insira valores válidos para todos os campos."

      alert("Por favor, insira valores válidos para todos os campos.")
      return outputText
    } else if (precoCombustivel > 0 && distanciaPercorrida > 0 && consumoCarro > 0) {

          // CAlculo da quantidade de combustivel
          var quantidadeCombustivel = distanciaPercorrida / consumoCarro

          // Calculo do custo total
          var custoTotal = quantidadeCombustivel * precoCombustivel

          // Exibir 
          outputText.textContent = "Quantidade de Combustível necessária: " + quantidadeCombustivel.toFixed(2) + " litros\n Custo Total: R$ " + custoTotal.toFixed(2)
      } else {
        alert("Preencha os campos com números reais!")
      }
  }

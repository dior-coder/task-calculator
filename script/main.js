    const getFromValue = document.getElementById("get-from-value");
    const addPercent = document.getElementById("add-percent");
    const showResult = document.getElementById("show-result"); 
    const pushBtn = document.getElementById("push-btn");
    const resetBtn = document.getElementById("reset-btn");
    const resultContainer = document.getElementById("result-container");
    
    let resultValue = 0;
    let resultCount = 0;

    function updateResult() {
        const resultElement = document.createElement("p");
        resultElement.textContent = `Результат ${resultCount + 1}: ${resultValue.toFixed(2)}`;
        resultContainer.appendChild(resultElement);
        
        // Обновляем значение input
        showResult.value = resultValue.toFixed(2);
    }

    pushBtn.addEventListener("click", () => {
        const initialValue = parseFloat(getFromValue.value);
        const percentIncrease = parseFloat(addPercent.value);

        if (!isNaN(initialValue) && !isNaN(percentIncrease)) {
            if (resultValue === 0) {
                resultValue = initialValue;
            }

            resultValue += (resultValue * percentIncrease / 100);
            updateResult();

            resultCount++;

            if (resultCount >= 50) {
                pushBtn.disabled = true;
            }
        } else {
            alert("Введите корректные числовые значения.");
        }
    });

    resetBtn.addEventListener("click", () => {
        getFromValue.value = "1";
        addPercent.value = "1";
        showResult.value = "";
        resultContainer.innerHTML = "";
        resultValue = 0;
        resultCount = 0;
        pushBtn.disabled = false;
    });

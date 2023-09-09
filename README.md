# 1 - Объявление переменных и получение элементов DOM:

const getFromValue = document.getElementById("get-from-value");
const addPercent = document.getElementById("add-percent");
const showResult = document.getElementById("show-result"); 
const pushBtn = document.getElementById("push-btn");
const resetBtn = document.getElementById("reset-btn");
const resultContainer = document.getElementById("result-container");
const showCycleCount = document.getElementById("show-cycle-count");


В этом блоке кода мы объявляем переменные для всех элементов DOM (HTML-элементов), с которыми мы будем взаимодействовать в коде. Мы их получаем по их id, которые соответствуют id элементов в HTML разметке.

# 2 - Объявление переменных для хранения данных:

let resultValue = 0;
let resultCount = 0;

Здесь мы объявляем две переменные: resultValue, которая будет хранить текущее значение результата, и resultCount, которая будет отслеживать количество выполненных итераций (расчетов).

# 3 - Функция updateResult():

function updateResult() {
    const resultElement = document.createElement("p");
    resultElement.textContent = `Результат ${resultCount + 1}: ${resultValue.toFixed(2)}`;
    resultContainer.appendChild(resultElement);
    
    // Обновляем значение input
    showResult.value = resultValue.toFixed(2);

    showCycleCount++;
    showCycleCountElement.textContent = `Количество выполненных итераций: ${showCycleCount}`;
}
# Эта функция выполняет следующие действия:

Создает новый элемент <p> для отображения результата и форматирует его текст.
Добавляет созданный элемент в контейнер resultContainer, чтобы результат отображался в виде списка.
Обновляет значение поля ввода showResult с текущим результатом.
Увеличивает счетчик выполненных итераций showCycleCount.
# 4 - Обработчик события для кнопки "Выполнить увеличение" (pushBtn):

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

# Этот обработчик события срабатывает при нажатии на кнопку "Выполнить увеличение". Внутри обработчика:

Получаем начальное значение и процент увеличения из полей ввода.
Проверяем, что введенные значения являются числами.
Если это первый расчет (когда resultValue равно 0), устанавливаем resultValue в значение начального значения.
Выполняем расчет, увеличивая resultValue на указанный процент.
Вызываем функцию updateResult(), чтобы обновить отображение результата.
Увеличиваем счетчик выполненных расчетов resultCount.
Если счетчик достигает 50, отключаем кнопку "Выполнить увеличение".

# 5 - Обработчик события для кнопки "Сбросить" (resetBtn):

resetBtn.addEventListener("click", () => {
    getFromValue.value = "1";
    addPercent.value = "1";
    showResult.value = "";
    resultContainer.innerHTML = "";
    resultValue = 0;
    resultCount = 0;
    pushBtn.disabled = false;
    showCycleCount = 0;
    showCycleCountElement.textContent = "Количество выполненных итераций: 0";
});

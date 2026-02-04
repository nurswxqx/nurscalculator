// Перевод градусов в радианы
function degToRad(deg) {
  return deg * Math.PI / 180;
}

// Арифметика
function calculateExpr() {
  const expr = document.getElementById('expr').value;
  try {
    const result = eval(expr);

    // Разрешаем +, -, *, пробелы, цифры, но НЕ /
    const isSimple = /^[0-9+\-*\s]+$/.test(expr); 
    const numbers = expr.match(/\d+/g)?.map(Number) || [];

    // Проверка: все числа ≤ 20, результат ≤ 20, и нет деления
    const hasDivision = expr.includes('/');
    
    let extraMsg = "";
    if (isSimple && !hasDivision && numbers.every(n => n <= 20) && Math.abs(result) <= 20) {
      extraMsg = " 👍 о тупой сурайтын зат тауыпсын";
    }

    document.getElementById('result').textContent = `${expr} = ${result}${extraMsg}`;
  } catch (e) {
    alert("брат болатын есеп жазсай");
  }
}

// Специальные функции
function calculate() {
  const num = parseFloat(document.getElementById('number').value);
  const op = document.getElementById('operation').value;

  if (isNaN(num)) {
    alert("нормально жазе");
    return;
  }

  let result;

  switch(op) {
    case 'sqrt':
      result = (num < 0) ? "кателык: сан нолден кышы!" : `√${num} = ${Math.sqrt(num).toFixed(4)}`;
      break;

    case 'sin':
      result = `sin(${num}°) = ${Math.sin(degToRad(num)).toFixed(4)}`;
      break;

    case 'cos':
      result = `cos(${num}°) = ${Math.cos(degToRad(num)).toFixed(4)}`;
      break;

    case 'tan':
      const radTan = degToRad(num);
      result = (Math.cos(radTan) === 0) ? `tan(${num}°) ондай жок екен брат` : `tan(${num}°) = ${Math.tan(radTan).toFixed(4)}`;
      break;

    case 'cot':
      const radCot = degToRad(num);
      result = (Math.sin(radCot) === 0) ? `cot(${num}°) ондай жок екен брат` : `cot(${num}°) = ${(1/Math.tan(radCot)).toFixed(4)}`;
      break;

    default:
      result = "не то нарсе жазып койдым деп ойламайсынба!";
  }

  document.getElementById('result').textContent = result;
}

// пробегаем по всем элементам чтобы применить данные из data
shapes.forEach((el) => (el.style.backgroundColor = `${el.dataset.bg}`));
bgItems.forEach(
  (el) => (el.style.backgroundImage = `url('${el.dataset.img}')`)
);

// Создаем функцию которая принимает значение скролла(вверх или вниз) и в зависимости от этого добавляем/удаляем классы
const bgSlides = (direction) => {
  let itemClass = `slide-${slideCounter}`;

  if (direction == "down") {
    if (slideCounter < slideCount) {
      mainSection.classList.remove(itemClass);
      slideCounter++;

      itemClass = `slide-${slideCounter}`;
      mainSection.classList.add(itemClass);
    }
  } else if (direction == "up") {
    if (slideCounter > 1) {
      mainSection.classList.remove(itemClass);
      slideCounter--;

      itemClass = `slide-${slideCounter}`;
      mainSection.classList.add(itemClass);
    }
  }
};

# Fade

Class for applying the "fade" effect in DOM sections, in a simple way, used on the website https://www.rodrigobrito.dev.br.</br>
-- Classe para aplicação do efeito "fade" em seções do DOM, de forma simples, utilizada no site https://www.rodrigobrito.dev.br.

# Example of use

Selecting DOM elements with the "fadeInScroll" class (can be any tag) and importing the class or in the same file:</br>
-- Selecionando elementos do DOM com a classe "fadeInScrool" (pode ser qualquer tag) e importando a classe ou no mesmo arquivo:

```
const fadeInScrool = document.querySelectorAll(".fadeInScrool");
const fade = new Fade(fadeInScrool);
fade.init();
```

Adding to browser window "scroll" event with debounce:</br>
--Adicionando ao evento de "scroll" da janela do navegador com debounce:

```
window.addEventListener("scroll", () => {
    let timer;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fade.checkFades();
      timer = null;
    }, 200);
  });
```

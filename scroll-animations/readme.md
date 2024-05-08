## Scroll animation usinsg Intersection observer

```js
const observer = new IntersectionObserver((enteries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.classList.add("show");
      //don't remove the class if you don't want to play it again
    } else {
      //replay the animtions multiple times
      entry.classList.remove("show");
    }
  });
});
```

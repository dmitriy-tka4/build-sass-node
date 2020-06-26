# Build SASS by Node.js

Сборка SASS на Node.js

## SCSS

Каждый отдельный SASS-файл (блок в терминологии BEM) должен быть расположен в папке `src/styles/blocks`, сам импортируемый файл должен называться `_footer.scss`.

При добавлении нового файла перегенирировать их импорт в файле `index.scss`, запустив скрипт:
```bash
npm run generate-styles-index
```

В файле _main.scss можно импортить любые библиотеки, необходимые для проекта. Например, уже добавлен minireset.

Все переменные проекта собраны в одном файле - `_variables.scss`.

Билд CSS запускается командой:
```bash
npm run css-build
```

Также есть режим `watch` и `deploy` с `autoprefixer` (см. соответствующие команды в `package.json`).

Будет сгенерирован файл CSS `styles.css`, он будет находится в папке `dist/styles/styles.css`

## Help

Писать на почту - dmitriy.tka4@gmail.com.

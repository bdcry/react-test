# React Test

Компактное SPA на React с двумя страницами, интерактивным меню и общим состоянием приложения.

## Демо

- GitHub Pages: [bdcry.github.io/react-test/#/](https://bdcry.github.io/react-test/#/)
- Версия на Angular: [bdcry.github.io/angular-selectel-test/#/](https://bdcry.github.io/angular-selectel-test/#/)
- Исходный код: [github.com/bdcry/react-test](https://github.com/bdcry/react-test)

## О проекте

Проект повторяет тестовое задание с Angular-версии, но реализован на React + TypeScript + Vite.

В приложении есть:
- главная страница с приветствием и навигацией
- страница меню со статическим набором пунктов
- выбор элементов через `checkbox`
- подсчет количества выбранных пунктов
- подсчет общего значения выбранных позиций
- отображение текущего раздела и статистики в заголовке
- hash routing для корректной работы на GitHub Pages

## Технологии

| Технология | Назначение |
| --- | --- |
| React 19 | UI и композиция компонентов |
| TypeScript | типизация и контроль данных |
| Vite | dev server и production build |
| React Router | маршрутизация между страницами |
| CSS Modules | локальная стилизация компонентов |
| ESLint | базовая проверка качества кода |
| gh-pages | публикация статической сборки |

## Требования

- Node.js `20.19+` или `22.12+`
- npm `10+`

## Структура проекта

```text
src/
  components/
    header/
    sidebar/
  data/
  pages/
    home-page/
    menu-page/
  routes/
  types/
  utils/hooks/
```

Ключевые части:
- `src/app.tsx` — корневые маршруты приложения
- `src/routes/main-layout.tsx` — общий layout с header и sidebar
- `src/utils/hooks/use-menu.ts` — состояние меню и вычисляемые значения
- `src/data/menu-items.ts` — статичные данные пунктов меню

## Запуск локально

Установка зависимостей:

```bash
npm install
```

Запуск dev-сервера:

```bash
npm run dev
```

Локальный адрес по умолчанию:

```text
http://localhost:5173/
```

## Скрипты

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run deploy
```

## Сборка и деплой

Production build:

```bash
npm run build
```

Публикация на GitHub Pages:

```bash
npm run deploy
```

Проект использует `HashRouter`, поэтому маршруты работают на GitHub Pages без серверной настройки rewrite.

## Особенности реализации

- данные меню хранятся в статичном массиве без backend
- состояние и вычисления вынесены в кастомный хук `use-menu`
- header показывает текущий раздел и статистику только для страницы меню
- стили изолированы через `*.module.css`

## Маршруты

| Маршрут | Назначение |
| --- | --- |
| `/#/` | главная страница |
| `/#/menu` | страница меню |

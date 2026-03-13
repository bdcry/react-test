# React Test

React-версия тестового мини-приложения с двумя страницами, интерактивным меню и общим состоянием.

## Быстрые ссылки

| Ресурс | Адрес |
| --- | --- |
| Демо на GitHub Pages | [bdcry.github.io/react-test/#/](https://bdcry.github.io/react-test/#/) |
| Angular-версия проекта | [bdcry.github.io/angular-selectel-test/#/](https://bdcry.github.io/angular-selectel-test/#/) |
| Репозиторий | [github.com/bdcry/react-test](https://github.com/bdcry/react-test) |

## О проекте

Проект повторяет тестовое задание из Angular-версии, но реализован на React + TypeScript + Vite.

Что есть в приложении:
- главная страница с приветствием и переходом к меню
- страница меню со статическим набором пунктов
- выбор позиций через `checkbox`
- подсчет количества выбранных пунктов
- подсчет общего значения выбранных позиций
- отображение текущего раздела и статистики в header
- hash routing для корректной работы на GitHub Pages

## Маршруты

| Маршрут | Назначение |
| --- | --- |
| `/#/` | главная страница |
| `/#/menu` | страница меню |

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
- `src/utils/hooks/use-menu.ts` — состояние меню и derived-значения
- `src/data/menu-items.ts` — статичные данные пунктов меню

## Особенности реализации

- данные меню хранятся в статичном массиве без backend
- состояние и вычисляемые значения вынесены в кастомный хук `use-menu`
- header показывает статистику только на странице меню
- стили изолированы через `*.module.css`

## Требования

- Node.js `20.19+` или `22.12+`
- npm `10+`

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

Проект использует `HashRouter` и `base` в Vite-конфиге, поэтому корректно работает на GitHub Pages без серверных rewrite-правил.

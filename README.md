# Профиль пользователя (Next.js)

Это тестовое задание — веб-приложение на Next.js с SSR, адаптивной версткой и интеграцией с API профиля. Всё максимально похоже на мобильное приложение, как в Figma.

## Описание проекта

- Современный интерфейс профиля пользователя, сверстанный по макету Figma.
- Данные профиля подгружаются с API (или используются моки, если API недоступен).
- SSR (server-side rendering)  страница профиля быстро загружается и индексируется поисковиками.
- Используются современные технологии: React, Next.js, TypeScript, Tailwind CSS, React Query, Zod, Docker.

## Как запустить проект

### 1. Через Docker (рекомендуется)

1. Убедитесь, что у вас установлен Docker и docker-compose.
2. В терминале перейдите в папку проекта и выполните:

   docker-compose up --build

3. Откройте браузер и перейдите по адресу: [http://localhost:3000/profile](http://localhost:3000/profile)

### 2. Локально (без Docker)

1. Установите зависимости:
   npm install
2. Запустите dev-сервер:
   npm run dev
3. Откройте [http://localhost:3000/profile](http://localhost:3000/profile)

## Тестирование

Для запуска тестов используйте команду:

    npm test

или

    npx jest

Тесты написаны с использованием Jest и React Testing Library. Покрытие — ключевые компоненты интерфейса.

## Моки и API
- По умолчанию приложение пытается получить профиль по API: `https://igroom.ru/api/v2/profile/5e800be0-088e-41cb-b549-10ebf4a13591`
- Если API недоступен (например, CORS или нет интернета), используются заранее подготовленные мок-данные (см. файл `src/entities/profile/api.ts`).
- Для аватара используется локальный файл `/public/avatar.png`.

## Технологии
- Next.js (SSR)
- React + TypeScript
- Tailwind CSS
- React Query + Axios
- Zod (валидация данных)
- Docker, docker-compose
- Redux Toolkit
- Jest, React Testing Library

## Автор
**Abeeb Abiola Adeniyi**

---
Если возникнут вопросы, смело пишите!

# Запуск проекта

Убедитесь, что на вашем компьютере установлен [Docker](https://www.docker.com/products/docker-desktop/)


### Склонируйте исходный код проекта в локальную директорию:

    git clone https://github.com/SulimanVu/Truck-Front.git
    cd Truck-Front


### Соберите и запустите контейнер с помощью docker-compose:

    docker-compose up --build

Откройте браузер и перейдите по адресу http://localhost:3000. 

### Завершение работы

Чтобы остановить контейнер, нажмите Ctrl+C в командной строке. Если вы хотите полностью удалить контейнер с его томами, выполните команду:

    docker-compose down -v


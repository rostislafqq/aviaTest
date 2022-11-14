information:

# Описание:
<br/>
Основная часть логики приложения в контейнерных компонентах *Container.tsx 

<br/>
App.tsx - навигация , переадрессация на "/avia" при пути "/" . components -> error.tsx  404 страница . открывается если указан неверный url , через 3 секунды переадрессация на "/avia".
<br/>
components->avia->aviaPageContainer.tsx . отвечает за управление формами , состояние кнопки (disabled) . 
<br/>
components->info->infoPageContsainer.tsx . принимает состояния инпутов из Redux , решает какую компаненту отрисовать (туда/туда-обратно) .components->info->infoPageOne.tsx - логика "оживления" кнопок времени <br/>

# ипользовал: TS, React , react-router-dom(v6) , SCSS(module) , Redux Toolkit

![image](https://user-images.githubusercontent.com/97777490/201698368-38eb2d22-bf59-4f59-ba95-e4c2accd84d9.png)
![image](https://user-images.githubusercontent.com/97777490/201698470-57eabfec-e04b-4b2e-8033-fdd71dadb920.png)
![image](https://user-images.githubusercontent.com/97777490/201698544-c36e7494-a1b2-42a5-8de8-028b32f105b2.png)







<template>
    <div class="main-page">
        <header>
            <div class="container-fluid">
                <div class="row">
                <div class="col-md-4 col-6">
                    <div class="logo">
                        <img src="@/assets/logo.png" alt="">
                        <div class="logo__text">
                            <strong>РемПрофи - Орёл</strong> <br>
                            Когда качество - вопрос репутации
                        </div>
                    </div>
                </div>
                <div class="col-md-4 d-none d-md-block">
                    <div class="tagline">
                        Дизайн интерьера и <br>
                        ремонт квартир, домов, офисов
                    </div>
                </div>
                <div class="col-md-1 d-none d-md-block"></div>
                <div class="col-md-3 col-6">
                    <div class="contacts">
                        <img src="@/assets/telephone.svg" width="24" alt="">
                        <a href="tel:+74862222034">+7 (4862) 222-034</a> <br>
                    </div>
                </div>
                </div>
            </div>
        </header>

        <main>
            <div class="info">
                <div class="container">
                    <div class="info__title">Узнайте за 1 минуту стоимость <br> вашего ремонта</div>

                    <div class="info__text">Ответьте на 5 вопросов и получите:</div>
                
                    <ul class="info__list">
                        <li>- Сметную стоимость дизайн проекта</li>
                        <li>- Консультацию по вашей планировке</li>
                        <li>- Подарок за экономию нашего времени</li>
                    </ul>

                    <router-link class="info__button" to="quiz">Пройти тест</router-link>
                </div>
            </div>
        </main>
    </div>
</template> 

<script>
export default {
    name: 'MainPage'
}
</script>

<style lang="sass">
.main-page
    color: #fff

header
    padding-top: 20px
    margin-bottom: 80px
.logo
    img
        display: inline-block
        margin-right: 10px
        vertical-align: middle

    &__text
        display: inline-block
        vertical-align: middle
.info
    text-align: center
    
    &__title
        font-size: 36px
        font-weight: 700
        margin-bottom: 20px
    &__text
        font-size: 24px
        font-weight: 700
    &__list
        list-style: none
        font-size: 24px
        margin-bottom: 40px
    &__button
        background: #f5b128
        font-size: 24px
        color: #fff
        display: inline-block
        text-decoration: none
        padding: 15px 30px
        border-radius: 40px
.tagline
    text-align: center
    font-size: 18px


.contacts
    font-size: 20px
    text-align: right
    font-weight: 700
    position: relative
    img
        position: absolute
        left: 0
        top: 0
    a
        color: #fff
        text-decoration: none


@media screen and (max-width: 768px)
    .contacts
        font-size: 16px
        img
            display: none
    .logo
        font-size: 14px
    .info
        &__title
            font-size: 24px
        &__text
            font-size: 16px
        &__list
            font-size: 16px
        &__button
            font-size: 16px
    
    
</style>


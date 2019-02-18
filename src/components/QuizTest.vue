<template>
    <div class="quiz">
        <div class="close" @click="close()"></div>
        <div class="container-fluid">
            <div class="quiz__progress">

                <div class="quiz__progress--line" :style="{ 'width': progress + '%' }">
                    <div class="quiz__progress--info">{{progress}}%</div>
                </div>

            </div>
            <div class="quiz__step" v-if="questionIndex == 0">
                <div class="quiz__title">Выберите тип помещения:</div>
                <div class="quiz--images">
                    <div class="row">
                        <div class="col-md-1 d-none d-md-block"></div>
                        <div class="col-md-2 col-6"
                            v-for="(item, key) in quiz_first" 
                            :key="key">
                            <div class="quiz--item"
                                @click="changeType(item.title)">
                                <div class="quiz--image"
                                    :class="{ active: type == item.title }"
                                    :style="{ backgroundImage :  `url(${require(`@/assets/${item.image}`)})`}"
                                >
                                </div>
                                <div class="quiz--text">
                                    {{ item.title }}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div class="quiz__step" v-if="questionIndex == 1">
                <div class="quiz__title">Введите вашу площадь:</div>

                <div class="quiz__form">
                    <input type="number" placeholder="кв.м" ref="area" v-model="area">
                </div>
            </div>

            <div class="quiz__step" v-if="questionIndex == 2">
                <div class="quiz__title">Выберите стиль дизайна:</div>
                <div class="quiz--images">
                    <div class="row">
                        <div class="col-md-1 d-none d-md-block"></div>
                        <div class="col-md-2 col-6"
                            v-for="(item, key) in quiz_third" 
                            :key="key"

                            >
                            <div class="quiz--item"
                                @click="changeDesign(item.title)">
                                <div class="quiz--image"
                                    :class="{ active: design == item.title }"
                                    :style="{ backgroundImage :  `url(${require(`@/assets/${item.image}`)})`}"
                                    >              
                                </div>
                                <div class="quiz--text">
                                    {{ item.title }}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div class="quiz__step" v-if="questionIndex == 3">
                <div class="quiz__title">Когда вы планируете <br> приступить к ремонту:</div>

                <div class="quiz__content">
                    <div>
                        <label>
                            <input name="plan" value="По готовности проекта" v-model="plan" type="radio"/>
                            <span>По готовности проекта</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input name="plan" type="radio" value="Через месяц" v-model="plan" checked="checked" />
                            <span>Через месяц</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input name="plan" value="Через 3 месяца" v-model="plan" type="radio" />
                            <span>Через 3 месяца</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input name="plan" value="Более поздний срок" v-model="plan" type="radio" />
                            <span>Более поздний срок</span>
                        </label>
                    </div>
                </div>
            </div>
            
            <div class="quiz__step" v-if="questionIndex == 4">
                <div class="quiz__title">Введите Ваш номер телефона для получения бесплатной консультации дизайнера по вашему проекту!</div>

                <div class="quiz__form">
                    <input type="tel" placeholder="Телефон *" ref="tel" v-model="telephone">
                    <div class="error" v-if="telephone.length == 0">Заполните это поле</div>
                </div>
            </div>

            <div class="quiz__step" v-if="questionIndex == 5">
                <div class="quiz__success">
                    <img src="@/assets/yes.svg" width="40%" alt="">
                    <div>
                    Благодарим за ответы, мы свяжемся с Вами в ближайшее время.
                    </div>
                </div>
            </div>
        </div>

        <div class="quiz__actions" v-if="questionIndex != 5">
            <div class="button button__prev" @click="back()">Назад</div>
            <div class="button button__next"
                v-if="questionIndex < 4"
                @click="next()"
                :disabled="buttonDisable">Далее</div>
            <div class="button action__info" v-if="questionIndex < 4">или нажмите Enter</div>
            <div class="button button__next" @click="send()" v-else>Отправить</div>
        </div>
    </div>
</template> 

<script>
export default {
    name: 'QuizTest',
    data() {
        return {
            quiz_first: [
                {
                    image: 'komnata.jpg',
                    title: `Комната`
                },
                {
                    image: 'kvartira.jpg',
                    title: `Квартира`
                },
                {
                    image: 'zagorod.jpg',
                    title: `Загородный дом`
                },
                {
                    image: 'ofis.jpg',
                    title: `Офис`
                },
                {
                    image: 'drygoe-type.jpg',
                    title: `Другое`
                }
            ],

            quiz_third: [
                {
                    image: 'klassika.jpg',
                    title: `Классика`
                },
                {
                    image: 'sovremenniy.jpg',
                    title: `Современный стиль`
                },
                {
                    image: 'minimalism.jpg',
                    title: `Минимализм`
                },
                {
                    image: `loft.jpg`,
                    title: `Лофт`
                },
                {
                    image: 'drygoe-design.jpg',
                    title: `Другое`
                }
            ],
            progress: 0,
            buttonDisable: true,
            type: '',
            area: '',
            design: '',
            plan: 'Через месяц',
            telephone: '',
            questionIndex: 0
        }
    },
    methods: {
        changeType(title) {
            this.type = title;
            this.unlockDisableButton();
        },
        changeDesign(title) {
            this.design = title;
            this.unlockDisableButton();
        },
        unlockDisableButton() {
            this.buttonDisable = false;
        },
        lockDisableButton() {
            this.buttonDisable = true
        },
        progressUp() {
            this.progress += 20;
        },
        back() {
            if(this.questionIndex > 0) {
                this.questionIndex--
                this.progress -= 20
            }
        },
        close() {
            this.$router.push('/');
        },
        send() {
            this.questionIndex++;
            this.progressUp();
            setTimeout(() => {
                this.close();
            }, 2000)
        },
        next() {
            switch(this.questionIndex) {
                case 0:
                    if(!this.buttonDisable) {
                        this.progressUp()
                        this.questionIndex++
                        this.$nextTick(function(){
                            this.$refs.area.focus();
                        });
                    }
                    break;
                case 1:
                    this.progressUp()
                    this.questionIndex++
                    this.lockDisableButton();
                    break;
                case 2:
                    if(!this.buttonDisable) {
                        this.progressUp()
                        this.questionIndex++
                    }
                    break;
                case 3:
                    this.progressUp()
                    this.questionIndex++
                    this.$nextTick(function(){
                        this.$refs.tel.focus();
                    });
            }
        }

    },
    mounted() {
        var vm = this;
        window.addEventListener('keyup', function(event) {
            if(event.keyCode == 13)
                vm.next();
        });
    }
}
</script>

<style lang="sass">
.quiz
    color: #fff
    padding-top: 50px
    min-height: 100vh
    position: relative
    &__success
        background: #fff
        width: 80%
        margin: 0 auto
        color: #8ac034
        font-weight: 700
        padding: 20px 
        text-align: center
        border-bottom: solid 10px #ccc
        font-size: 24px
        border-radius: 30px
        margin-bottom: 40px
    .close
        color: #777
        cursor: pointer
        position: absolute
        z-index: 99
        right: 40px
        opacity: 1
        top: 15px
        font-size: 1.125rem
        width: 2em
        height: 2em
        transition: opacity .18s cubic-bezier(.21,.67,.58,1)
        &:hover
            opacity: .8
        &:after
            transform: rotate(-45deg)
        &:before
            transform: rotate(45deg)
        &:after, &:before
            display: block
            content: ""
            width: 2px
            height: 1.3em
            background: currentColor
            position: absolute
            left: -1px
            right: 0
            top: 0
            margin-top: .35em
            margin-left: 1em
    &__progress
        width: 300px
        height: 5px
        margin: 0 auto
        background: rgba(#fff, .7)
        position: relative
        margin-bottom: 50px
        &--line
            position: absolute
            height: 100%
            background: #fff
            width: 0
            transition: .5s ease
        &--info
            position: absolute
            bottom: 20px
            background: #fff
            color: #000
            text-align: center
            padding: 5px 0
            border-radius: 5px
            width: 40px
            right: -20px
            font-size: 12px
            &:after
                content: ""
                width: 0
                height: 0
                border-left: 5px solid transparent
                border-right: 5px solid transparent
                border-top: 10px solid #fff
                left: 15px
                bottom: -10px
                position: absolute
    &__content
        width: 50%
        margin: 0 auto
        [type="radio"]:not(:checked)+span:before, [type="radio"]:not(:checked)+span:after
            border: 2px solid #fff
        label
            color: #fff
            span
                font-size: 24px !important
    .active
        position: relative
        &:before
            content: ""
            width: 100%
            height: 100%
            position: absolute
            background: rgba(#000, .5)
            z-index: 1
        &:after
            content: ""
            position: absolute
            z-index: 4
            width: 30px
            height: 30px
            border-radius: 50%
            background: #fff url('~@/assets/checked.svg') no-repeat center
            top: 50%
            left: 50%
            transform: translateY(-50%) translateX(-50%)
            background-size: 15px 15px
    &__form
        text-align: center
        input
            width: 300px !important
            background: #fff !important
            margin: 0 auto !important
            display: inline-block !important 
            border-radius: 20px !important
            border: 0 !important 
            padding: 10px !important 
            font-size: 24px !important 
            outline: none !important
    .error
        margin-top: 10px
        color: #ff0000
    &__title
        font-size: 36px
        font-weight: 700
        width: 50%
        margin: 0 auto
        text-align: center
        margin-bottom: 20px
    &--image
        height: 300px
        margin-bottom: 20px
        overflow: hidden
        width: 100%
        background-position: 50%
        background-size: cover
        img
            position: relative
            left: -50%
    &--text
        font-size: 14px
        text-align: center
    &--item
        cursor: pointer
    &__actions
        text-align: center
        width: 100%
        bottom: 30px
        position: absolute
        .button
            display: inline-block
            line-height: 40px
            padding: 0 10px
            cursor: pointer
            &__prev
                background: rgba(#fff, .4)
                border-radius: 10px
                font-weight: 700
                margin-right: 10px
            &__next
                background: #fff
                color: #000
                font-weight: 700
                border-radius: 10px
                &:disabled, &[disabled]
                    cursor: no-drop

@media screen and (max-width: 768px)
    .quiz
        &__title
            font-size: 24px
            width: 90%
        &__actions
            position: relative
            bottom: 0
            margin-top: 30px
            margin-bottom: 30px
            .action__info
                display: none
            .button__next
                padding: 0 25px
        &--image
            margin-bottom: 10px
            height: 200px
            background-size: cover
        &--item
            margin-bottom: 20px
        &__content
            width: 90%
            label span
                font-size: 16px !important
</style>


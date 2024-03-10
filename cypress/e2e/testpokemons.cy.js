describe('Покупка аватара', function () {
   it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/')
        cy.get('.login__content').and('be.visible').contains('Битва покемонов').and('be.visible')
        cy.get('p.auth__text').and('be.visible').contains('Вход через соцсеть').and('be.visible')
        cy.get('.auth__socials').and('be.visible')
        cy.get('a.auth__social').and('be.visible')
        cy.get('a.auth__social > .auth__social-icon').and('be.visible')
        cy.get('#telegram-login-qa_studio_pokemon_prod_bot').and('be.visible')
        cy.get('.k_show_500').and('be.visible')
        cy.get('.k_show_500 > .auth__social-icon').and('be.visible')
        cy.get(':nth-child(1) > .auth__input').and('be.visible').and('be.enabled')
        cy.get('#password').and('be.visible').and('be.enabled')
        cy.get(':nth-child(1) > .auth__input').type('makcnnd@gmail.com')
        cy.get('#password').type('Iloveqa1')
        cy.get('.auth__input-icon').and('be.visible')
        cy.get('.auth__button').and('be.visible').and('be.enabled')
        cy.get('.auth__button').click()
        cy.get('.header__btns > [href="/shop"]').and('be.visible').contains('Магазин')
        cy.get('[href="/shop"] > .header__btn-img').and('be.visible')
        cy.get('.header__btns > [href="/shop"]').click()
        cy.get('.pokemon').and('be.visible').contains('Магазин')
        cy.get('.pokemon__title').and('be.visible')
        cy.get('.shop__list').and('be.visible')
        cy.get('.shop__list > :nth-child(-n+12)').each(($item) => {cy.wrap($item).should('be.visible').children('.shop__button').and('be.visible').and('be.enabled')
})
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click()
        cy.get('.pay__header-v2').and('be.visible')
        cy.get('.pay__header-logo-v2').and('be.visible')
        cy.get('.pay__select-block').and('be.visible')
        cy.get('.payment__info-button-v2').and('be.visible').and('be.enabled')
        cy.get('.pay__payform-v2').and('be.visible')
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay__form-label-v2').and('be.visible').contains('Номер').and('be.visible')
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').and('be.visible').and('be.enabled').should('have.attr', 'placeholder', '0000 0000 0000 0000').and('be.visible')
        cy.get(':nth-child(1) > .pay__form-label-v2').and('be.visible').contains('Срок').and('be.visible')
        cy.get(':nth-child(1) > .pay_base-input-v2').and('be.visible').and('be.enabled').should('have.attr', 'placeholder', '00/00').and('be.visible')
        cy.get('.pay-inputs-box > :nth-child(2) > .pay__form-label-v2').and('be.visible').contains('Код').and('be.visible')
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').and('be.visible').and('be.enabled').should('have.attr', 'placeholder', '000').and('be.visible')
        cy.get('.pay__input-box-last-of > .pay__form-label-v2').and('be.visible').contains('Имя').and('be.visible')
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').and('be.visible').and('be.enabled').should('have.attr', 'placeholder', 'GERMAN DOLNIKOV').and('be.visible')
        cy.get('.pay-btn').and('be.visible').should(($button) => {
  const classNames = $button.attr('class')
  const hasPayBtnClass = /pay-btn/.test(classNames)
  const hasPayBtnDisableClass = /pay-btn_disable/.test(classNames)

  expect(hasPayBtnClass).to.be.true
  expect(hasPayBtnDisableClass).to.be.true
})

cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996')
        cy.get('.pay-btn').and('be.visible').should(($button) => {
  const classNames = $button.attr('class')
  const hasPayBtnClass = /pay-btn/.test(classNames)
  const hasPayBtnDisableClass = /pay-btn_disable/.test(classNames)

  expect(hasPayBtnClass).to.be.true
  expect(hasPayBtnDisableClass).to.be.true
})
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225')
        cy.get('.pay-btn').and('be.visible').should(($button) => {
  const classNames = $button.attr('class')
  const hasPayBtnClass = /pay-btn/.test(classNames)
  const hasPayBtnDisableClass = /pay-btn_disable/.test(classNames)

  expect(hasPayBtnClass).to.be.true
  expect(hasPayBtnDisableClass).to.be.true
})
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
        cy.get('.pay-btn').and('be.visible').should(($button) => {
  const classNames = $button.attr('class')
  const hasPayBtnClass = /pay-btn/.test(classNames)
  const hasPayBtnDisableClass = /pay-btn_disable/.test(classNames)

  expect(hasPayBtnClass).to.be.true
  expect(hasPayBtnDisableClass).to.be.true
})
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('MAXIM TESTIRUET')
        cy.get('.pay__header-v2').click()
        cy.get('.pay-btn').and('be.visible').should(($button) => {
  const classNames = $button.attr('class')
  const hasPayBtnClass = /pay-btn/.test(classNames)
  const hasPayBtnDisableClass = /pay-btn_disable/.test(classNames)

  expect(hasPayBtnClass).to.be.true
  expect(hasPayBtnDisableClass).to.be.false
})
        
     cy.get('.pay-btn').click()
     cy.get('.payment__header').and('be.visible')
     cy.get('.payment__logo').and('be.visible').contains('Пикачунькофф').and('be.visible')
     cy.get('.pay__select-block').and('be.visible')
     cy.get('.payment__info-button-v2').and('be.visible').and('be.enabled')
     cy.get('.payment__form-defolt').and('be.visible').contains('Подтверждение покупки').and('be.visible')
     cy.get('.payment__label').and('be.visible').contains('Код из пуша или СМС').and('be.visible')
     cy.get('#cardnumber').and('be.visible').and('be.enabled').should('have.attr','placeholder','00000')
     cy.get('.payment__span-defolt').and('be.visible').and('be.enabled').should(($element) => {
  const text = $element.text()
  const validText = /Отправ(ить|им) код повторно( через)?/.test(text)
  
  expect(validText).to.be.true
})
     cy.get('.payment__defolt-decline').and('be.visible').and('be.enabled').contains('Отменить').and('be.visible')
     cy.get('.payment__submit-button').and('be.visible').and('be.disabled').contains('Отправить').and('be.visible')
     cy.get('#cardnumber').type('56456')
     cy.get('.payment__submit-button').and('be.visible').and('be.enabled').contains('Отправить').and('be.visible')
     cy.get('.payment__submit-button').click()
     cy.get('.payment__padding').and('be.visible').contains('Покупка прошла успешно').and('be.visible')
     cy.get('.success__image').and('be.visible')
     cy.get('.payment__back-button-success').and('be.visible').and('be.enabled').contains('Вернуться в магазин').and('be.visible').get('.payment__back-svg-blue').and('be.visible')
     cy.get('.payment__back-button-success').click()
     cy.location('pathname').should('equal', '/shop')
    })
})
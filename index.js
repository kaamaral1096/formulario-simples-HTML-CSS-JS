function handleSubmit() {
    const concatenatedResultTag = document.getElementById('concatenated-result');
    const form = document.querySelector('.form');
    var peoplesList = [];

    const createPeopleObject = () => {
        const fullNameValue = form.querySelector('.fullName');
        const birthDateValue = form.querySelector('.birthDate');
        const occupationValue = form.querySelector('.occupation');
        const civilStatusValue = form.querySelector('.civilStatus');
        const emailValue = form.querySelector('.email');
        const obj = {
            fullNameValue: fullNameValue.value,
            birthDateValue: birthDateValue.value,
            occupationValue: occupationValue.value,
            civilStatusValue: civilStatusValue.value,
            emailValue: emailValue.value
        };
        return obj;
    };

    const createReturnWithListItems = (obj) => {
        peoplesList.push(obj);
        return peoplesList.map(
            (pessoa) => {
                return `
                    <div class="line"> 
                        ${pessoa.fullNameValue ? pessoa.fullNameValue : ''}
                        ${pessoa.birthDateValue ? ', ' + pessoa.birthDateValue : ''}
                        ${pessoa.occupationValue ? ', ' + pessoa.occupationValue : ''}
                        ${pessoa.civilStatusValue ? ', ' + pessoa.civilStatusValue : ''}
                        ${pessoa.emailValue ? ', ' + pessoa.emailValue : ''}
                    </div>
                `
            }
        )
    };

    const createReturn = (event) => {
        event.preventDefault();
        const peopleObject = createPeopleObject();
        const concatenatedResult = createReturnWithListItems(peopleObject);
        concatenatedResultTag.innerHTML = concatenatedResult;
    };
    //Chama a função CreateReturn que montará a estrutura chamando as demais funções
    form.addEventListener('submit', createReturn)
}
handleSubmit();

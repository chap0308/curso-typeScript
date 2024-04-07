namespace Validations{//*MIRAR EL JAVASCRIPT PARA ENTENDER
    //*EXPORTS ES NECESARIO
    export const validateText = (text:string):boolean => {
        return text.length > 3;
    }
    export const validateDate = (myDate:Date):boolean => {
        return isNaN(myDate.valueOf());
    }

}
console.log(Validations.validateText('Fernando'));
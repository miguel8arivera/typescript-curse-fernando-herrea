namespace Validation {
  export const validateText = (text: string): boolean => {
    /*  if(text.length > 3){
            return true;
                                    condicional largo para algo sencillo
        }else{
            return false;
        } */

    return text.length > 3 ? true : false;
  };

  export const validateDate = (myDate: Date): boolean => {
    return isNaN(myDate.valueOf()) ? false : true;
  };
}

console.log(Validation.validateText("Mig"));

import {Transfers,Company} from "./../redux/types";
 // собираем строку заголовка фильтра
 export const CreateTxt = (transfers:Transfers,companies:Company[]) => {


    console.log('transfers', transfers);
    let txt = '';
    let previousChecked = false;
    // компании
    companies.forEach(element => {
      txt = txt + ((previousChecked) ? ', ' : '') + ((element.checked) ? element.name : '');
      previousChecked = element.checked;
    });
    txt = txt + ((previousChecked) ? ', ' : '');
    
    txt = (txt.length === 0 ? 'Любая авиакомпания ' : txt);

    // пересадки
    let txt1 = '';
    txt1 = txt1 + (transfers.checked0 ? ', ' : '')
    txt1 = txt1 + (transfers.checked0 ? 'без' : '')
    txt1 = txt1 + (transfers.checked1 ? ', ' : '')
    txt1 = txt1 + (transfers.checked1 ? '1' : '')
    txt1 = txt1 + (transfers.checked2 ? ', ' : '')
    txt1 = txt1 + (transfers.checked2 ? '2' : '')
    txt1 = txt1 + (transfers.checked3 ? ', ' : '')
    txt1 = txt1 + (transfers.checked3 ? '3' : '')

    txt1 = (txt1.length === 0 ? 'любое кол-во' : txt1);
    txt1 = (transfers.checked0 && transfers.checked1 && transfers.checked2 && transfers.checked3) ? 'любое кол-во' : txt1;

    let txt2 = '';
    txt2 = (transfers.checked0 ? ' пересадок' : txt2);
    txt2 = (transfers.checked1 ? ' пересадка' : txt2);
    txt2 = (transfers.checked2 ? ' пересадок' : txt2);
    txt2 = (transfers.checked3 ? ' пересадки' : txt2);
    txt2 = (transfers.checked3 ? ' пересадки' : txt2);
    txt2 = (txt2.length === 0 ? ' пересадок' : txt2);

    txt2 = (transfers.checked0 && transfers.checked1 && transfers.checked2 && transfers.checked3) ? ' пересадок' : txt2;

    return txt + txt1 + txt2;
  }
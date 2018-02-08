var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {

  var kata1 = input[1];
  var splitKata1 = kata1.split(' ');
  splitKata1.splice(2, 0, 'Elsharawy');
  input[1] = splitKata1.join(' ');

  var kata2 = input[2];
  var splitKata2 = kata2.split(' ');
  splitKata2.splice(0, 0, 'Provinsi');
  input[2] = splitKata2.join(' ');

  input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
  console.log(input);

  var kata3 = input[3];
  var splitKata3 = kata3.split('/');
  splitKata3.sort(function(value1, value2) { return parseInt(value1) < parseInt(value2) });


  switch(splitKata3[2]) {
    case '01' :
      console.log('Januari');
      break;
    case '02' :
      console.log('Februari');
      break;
    case '03' :
      console.log('Maret');
      break;
    case '04' :
      console.log('April');
      break;
    case '05' :
      console.log('Mei');
      break;
    case '06' :
      console.log('Juni');
      break;
    case '07' :
      console.log('Juli');
      break;
    case '08' :
      console.log('Agustus');
      break;
    case '09' :
      console.log('September');
      break;
    case '10' :
      console.log('Oktober');
      break;
    case '11' :
      console.log('November');
      break;
    case '12' :
      console.log('Desember');
      break;
    default :
      console.log('Bulan Tidak Terdaftar');
  }

  console.log(splitKata3);

  var sambungTanggal = kata3.split('/');
  console.log(sambungTanggal.join('-'));

  console.log(input[1].substring(0, 15));
  
}

dataHandling2(input);

/*
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * [1989, 21, 05]
 * 21-05-1989
 * Roman Alamsyah
*/

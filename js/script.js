function calculate() {
     try {
          let weightInput = document.getElementById('weight-input').value;
          console.log(weightInput);

          if (parseInt(weightInput) > 0 && parseInt(weightInput) < 25 ) {
               alert('Harap Isi Berat Badan Anda');
          } else {
               document.getElementById('result-bmi').innerHTML = weightInput;
               console.log('Ada Isi');
          }
     } catch (error) {
          console.log(error);
     }

     let ageInput = document.getElementById('age-input').value;
     console.log(ageInput);

     if (ageInput == '') {
          alert('Harap Isi Usia Anda');
     } else {
          console.log('Ada Isi');
     }

     let heightInput = document.getElementById('height-input').value;
     console.log(heightInput);

     if (heightInput == '') {
          alert('Harap Isi Tinggi Badan Anda');
     } else {
          console.log('Ada Isi');
     }

     height = parseFloat(document.getElementById('height-input').value);
     height /= 100;
     weight = parseFloat(document.getElementById('weight-input').value);
     resultbmi = weight / (height * height);
     if (resultbmi < 18.5) {
          message = 'Kekurangan Berat Badan';
     } else if ((resultbmi >= 18.5) & (resultbmi <= 24.9)) {
          message = 'Normal (Ideal)';
     } else if ((resultbmi >= 25.0) & (resultbmi <= 29.9)) {
          message= 'Kelebihan Berat Badan';
     } else {
          message = 'Kegemukan (Obesitas)'
     }
     document.getElementById('result-bmi').innerHTML = ' ' + resultbmi.toFixed(1);
     document.getElementById('message').innerHTML = 'Keterangan : ' + message;
    
     resultbmi = weight / (height * height);
     if (resultbmi < 18.5) {
          message2 = 'Hasil BMI kurang dari 18.5';
     } else if ((resultbmi >= 18.5) & (resultbmi <= 24.9)) {
          message2 = 'Hasil BMI diantara 18.5 dan 24.9';
     } else if ((resultbmi >= 25.0) & (resultbmi <= 29.9)) {
          message2 = 'Hasil BMI diantara 25.0 dan 29.9';
     } else {
          message2 = 'Hasil BMI diantara 30.0 atau lebih'
     } 
     document.getElementById('message2').innerHTML = ' ' + message2;

     resultbmi = weight / (height * height);
     if (resultbmi < 18.5) {
          message3 = 'Anda berada dalam kategori underweight atau kekurangan berat badan.';
          message4 = 'Cara terbaik untuk menaikkan berat badan adalah konsumsi makanan yang berkalori dan bernutrisi serta berolahraga rutin.';
          message5 = 'Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.';
          message6 = 'BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.';
     } else if ((resultbmi >= 18.5) & (resultbmi <= 24.9)) {
          message3 = 'Anda berada dalam kategori berat badan normal (Ideal).';
          message4 = 'Dengan memiliki berat badan yang normal kita perlu menjaga pola makanan dan olahraga.';
          message5 = '';
          message6 = '';
     } else if ((resultbmi >= 25.0) & (resultbmi <= 29.9)) {
          message3 = 'Anda berada dalam kategori overweight atau berat badan berlebih.';
          message4 = 'Cara terbaik untuk menurunkan berat badan adalah dengan mengatur makanan yang berkalori dan berlemak serta melakukan olahraga rutin.';
          message5 = 'Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.';
          message6 = 'BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.';
     } else {
          message3 = 'Anda berada dalam kategori berat badan kegemukan (obesitas).';
          message4 = 'Cara terbaik untuk menurunkan berat badan obesitas adalah membatasi konsumsi gula, garam dan lemak berlebih serta olahraga secara teratur.';
          message5 = 'Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.';
          message6 = 'BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.';
     } 
     document.getElementById('message3').innerHTML = ' ' + message3;
     document.getElementById('message4').innerHTML = ' ' + message4;
     document.getElementById('message5').innerHTML = ' ' + message5;
     document.getElementById('message6').innerHTML = ' ' + message6;

     }

     function reset(){
          document.getElementById('sex-man').value = '';
          document.getElementById('sex-woman').value = '';
          document.getElementById('weight-input').value = '';
          document.getElementById('age-input').value = '';
          document.getElementById('height-input').value = '';
     }

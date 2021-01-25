
    let height = +prompt('Indicate your height in cm');
    let heft = +prompt('Enter your weight in kg');
    let statusHeight = (height == +height && height != '') ? height : 100;
    let statusHeft = (heft == +heft && heft != '') ? heft : 50;
    let heightInMeters = statusHeight/100; 

    function sum(heightInMeters, statusHeft) {
        return statusHeft / (heightInMeters**2);
      }
      
      let result = sum(heightInMeters, statusHeft);
      alert( result ); 








'use strict';
function EmployeeDetals(employeeID,fullName,department,
     level,salary,image){
         this.name=fullName;
         this.id=employeeID;
         this.department=department;
         this.level=level;
         this.imageURL=image;
         this.salary=salary;
         this.uniqueId=uniqueId;
         allEmployyes.push(this);
   
}

        var seniorSalaryMin=1500;
        var seniorSalaryMax=2000;
        var midSeniorSalaryMin=1000;    
        var midSeniorSalaryMax=1500;
        var juniorSalaryMin=500;
        var juniorSalaryMax=1000;



        const calculateSalary =(min, max)=>{
        var salaryBeforeTax;
        var salaryAfterTax;
        salaryBeforeTax= Math.floor(Math.random() * (max - min + 1)) + min;
        return salaryAfterTax=salaryBeforeTax-(salaryBeforeTax*0.075);
}

   /*function to generate a unique four digits employee id number*/
    function uniqueFunction() {
    const num = Math.floor(1000 + Math.random() * 9000);
    return num;
   }
   



        let employee1 = new EmployeeDetals("1000","Ghazi Samer","Administration","Senior",calculateSalary(seniorSalaryMin,seniorSalaryMax) );
        let employee2 = new EmployeeDetals("1001","Lana Ali","Finance","Senior",calculateSalary(seniorSalaryMin,seniorSalaryMax) );
        let employee3 = new EmployeeDetals("1002","Tamara Ayoub","Marketing","Senior",calculateSalary(seniorSalaryMin,seniorSalaryMax) );
        let employee4 = new EmployeeDetals("1003","Safi Walid","Administration","Mid-Senior",calculateSalary(midSeniorSalaryMin,midSeniorSalaryMax) );
        let employee5 = new EmployeeDetals("1004","Omar Zaid","Development","Senior",calculateSalary(seniorSalaryMin,seniorSalaryMax) );
        let employee6 = new EmployeeDetals("1005","Rana Saleh","Development","Junior",calculateSalary(juniorSalaryMin,juniorSalaryMax) );
        let employee7 = new EmployeeDetals("1006","Hadi Ahmad","Finance","Mid-Senior",calculateSalary(midSeniorSalaryMin,midSeniorSalaryMax) );


        EmployeeDetals.prototype.render = function(){
            document.write(`<p>  Employee name: ${this.name} </p>`)
            document.write(`<p>  Salary: ${this.salary} $</p>`)
        }

        employee1.render();
        employee2.render();
        employee3.render();
        employee4.render();
        employee5.render();
        employee6.render();
        employee7.render();

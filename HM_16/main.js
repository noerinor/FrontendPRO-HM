class Student {
  constructor(firstName, lastName, birthYear, grades = []) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.grades = grades;
      this.attendance = new Array(25).fill(null);
  }

  getAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
  }

  getAverageGrade() {
      if (this.grades.length === 0) return 0;
      const sum = this.grades.reduce((a, b) => a + b, 0);
      return sum / this.grades.length;
  }

  present() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
          this.attendance[index] = true;
      } else {
          console.log("Attendance array is already full.");
      }
  }

  absent() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
          this.attendance[index] = false;
      } else {
          console.log("Attendance array is already full.");
      }
  }

  getAttendanceRate() {
      const attendedClasses = this.attendance.filter(status => status === true).length;
      const totalClasses = this.attendance.filter(status => status !== null).length;
      return totalClasses === 0 ? 0 : attendedClasses / totalClasses;
  }

  summary() {
      const averageGrade = this.getAverageGrade();
      const attendanceRate = this.getAttendanceRate();

      if (averageGrade > 90 && attendanceRate > 0.9) {
          return "Молодець!";
      } else if (averageGrade > 90 || attendanceRate > 0.9) {
          return "Добре, але можна краще";
      } else {
          return "Редиска!";
      }
  }
}

// Демонстрація роботи
const student1 = new Student("Іван", "Петров", 2000, [95, 92, 88, 94]);
const student2 = new Student("Марія", "Іванова", 1999, [85, 78, 88, 90]);
const student3 = new Student("Олександр", "Сидоров", 2001, [60, 70, 80, 90]);

// Студент 1
console.log(student1.getAge()); 
console.log(student1.getAverageGrade()); 
student1.present();
student1.present();
student1.absent();
console.log(student1.getAttendanceRate()); 
console.log(student1.summary()); 

// Студент 2
console.log(student2.getAge()); 
console.log(student2.getAverageGrade()); 
student2.present();
student2.absent();
student2.absent();
console.log(student2.getAttendanceRate()); 
console.log(student2.summary()); 

// Студент 3
console.log(student3.getAge()); 
console.log(student3.getAverageGrade()); 
student3.present();
student3.present();
student3.present();
student3.present();
console.log(student3.getAttendanceRate()); 
console.log(student3.summary()); 
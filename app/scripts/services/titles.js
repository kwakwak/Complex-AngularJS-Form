'use strict';

angular.module('accountForm11App')
  .factory('titles', function () {
    var titles = {
        fname           : "שם פרטי",
        lname           : "שם משפחה",
        street          : "רחוב",
        city            : "עיר",
        zip             : "מיקוד",
        password        : "סיסמה",
        password_conf   : "אימות סיסמה",
        email           : "אימייל",
        email_conf      : "אימות אימייל",
        order_id        : "מספר הזמנה",
        order_year      : "שנת הזמנה",
        question        : "שאלת אבטחה",
        answer          : "תשובת אבטחה",
        send            : "שלח טופס",
        err             : {
            required    : "שדה חובה",
            email_exist : "האימייל לא תקין או שהוא קיים במערכת",
            password    : "לפחות שישה תווים המורכבים ממספרים ואותיות",
            "match"     : "שדה זה חייב להיות זהה",
            "general"   : "אירעה שגיאה:"
        },
        success         : "הטופס נשלח בהצלחה!"
    };
    return titles;
  });

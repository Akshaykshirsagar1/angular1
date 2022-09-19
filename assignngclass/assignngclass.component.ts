import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignngclass',
  templateUrl: './assignngclass.component.html',
  styleUrls: ['./assignngclass.component.css']
})
export class AssignngclassComponent implements OnInit {
  head = ["Roll Number", "Student Name", "Subject Name", "Marks"]


  row=[ 
    {
     ' Roll Number': '1',
      'Student Name': 'Akshay',
      'Subject Name': [
        "Maths", "English", "Sceince", "Geography"
      ],
      'Marks': [
        "37", "45", "80", "26"
      ]
    },
  {
   ' Roll Number': '2',
    'Student Name': 'Suraj',
    'Subject Name': [
      "Maths", "English", "Sceince", "Geography"
    ],
  'Marks': [
      "37", "45", "80", "26"
    ]
  },
  {
    'Roll Number': '3',
   'Student Name': 'Vishal',
    'Subject Name': [
      "Maths", "English", "Sceince", "Geography"
    ],
    'Marks': [
      "78", "85", "80", "26"
    ]
  },
  {
    'Roll Number': '4',
    'Student Name': 'Akash',
   'Subject Name': [
      "Maths", "English", "Sceince", "Geography"
    ],
    'Marks': [
      "37", "95", "90", "29"
    ]
  },

  ]

  constructor() { }

  ngOnInit() {
  }

}

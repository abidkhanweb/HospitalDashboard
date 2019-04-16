import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class DataService implements InMemoryDbService {
    createDb(){

        // Dashboard
        let barChartData = ['2012','2013','2014','2015','2016','2017','2018'];
        let pieChartData = [120,150,180];
        let barDonutData = [120,150];
        let pieLineData = [65,59,80,81,56,55,40];

        let quickReport = {
            doctorReport:'10',
            operationReport:'6',
            birthReport:'8',
            deathReport:'0'
        };

        // Doctors
        let doctorsData = [
            { id:1, thumb:'../assets/doctors/siddharth.jpg', name:'Siddharth Kamble', specialist:'Neurology', address:'Mumbai'},
            { id:2, thumb:'../assets/doctors/arvind.jpg', name:'Arvind Ghadge', specialist:'Gynecologist', address:'Thane'},
            { id:3, thumb:'../assets/doctors/madhavi.jpg', name:'Madhavi Gawari', specialist:'Dentist', address:'Mumbai'},
            { id:4, thumb:'../assets/doctors/manisha.jpg', name:'Manisha Singla', specialist:'Audiology', address:'Mumbai'},
            { id:5, thumb:'../assets/doctors/darshan.jpg', name:'Darshan Raul', specialist:'Neurosurgeon', address:'Mumbai'},
        ];

        // Patient

        let patientsData = [
            { 
                id:1,
                gender:'Female',
                patientID:'KU 00598',
                thumb:'../assets/patients/1.jpg', 
                name:'Daniel',
                age:'32',
                address:'71 Pilgrim Avenue Chevy Chase, MD 20815	',
                contact:'404-447-6013',
                lastVisit:'11 Jan 2018',
                status:'Approved'
            },
            { 
                id:2,
                gender:'Male',
                patientID:'KU 00258',
                thumb:'../assets/patients/2.jpg', 
                name:'Alexander',
                age:'22',
                address:'123 6th St. Melbourne, FL 32904',
                contact:'404-447-6013',
                lastVisit:'15 Jan 2018',
                status:'Approved'
            },
            { 
                id:3,
                gender:'Male',
                patientID:'KU 00369',
                thumb:'../assets/patients/3.jpg', 
                name:'Richard',
                age:'26',
                address:'123 6th St. Melbourne, FL 32904',
                contact:'404-447-6013',
                lastVisit:'16 Jan 2018',
                status:'Pending'
            },
            { 
                id:4,
                gender:'Female',
                patientID:'KU 00598',
                thumb:'../assets/patients/4.jpg', 
                name:'Daniel',
                age:'32',
                address:'71 Pilgrim Avenue Chevy Chase, MD 20815	',
                contact:'404-447-6013',
                lastVisit:'11 Jan 2018',
                status:'Approved'
            },
            { 
                id:5,
                gender:'Male',
                patientID:'KU 00258',
                thumb:'../assets/patients/5.jpg', 
                name:'Alexander',
                age:'22',
                address:'123 6th St. Melbourne, FL 32904',
                contact:'404-447-6013',
                lastVisit:'15 Jan 2018',
                status:'Approved'
            },
            { 
                id:6,
                gender:'Male',
                patientID:'KU 00369',
                thumb:'../assets/patients/6.jpg', 
                name:'Richard',
                age:'26',
                address:'123 6th St. Melbourne, FL 32904',
                contact:'404-447-6013',
                lastVisit:'16 Jan 2018',
                status:'Pending'
            }, 
        ];

        let appointmentData = [
            { 
                id:1,
                patientID:'KU 00598',
                thumb:'../assets/patients/1.jpg', 
                name:'Daniel Mok',
                age:'32',
                gender:'Female',
                address:'71 Pilgrim Avenue Chevy Chase, MD 20815',
                service:'Dental Checkup',
                doctor:'Dr. John Smith',
                contact:'404-447-6013',
                appointmentDate:'11 Jan 2018',
                detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                PatientStatus:'Approved'
            },
            { 
                id:2,
                patientID:'KU 00598',
                thumb:'../assets/patients/1.jpg', 
                name:'Daniel Mok',
                age:'32',
                gender:'Female',
                address:'71 Pilgrim Avenue Chevy Chase, MD 20815',
                service:'Dental Checkup',
                doctor:'Dr. John Smith',
                contact:'404-447-6013',
                appointmentDate:'11 Jan 2018',
                detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                PatientStatus:'Approved'
            },
            { 
                id:3,
                patientID:'KU 00598',
                thumb:'../assets/patients/1.jpg', 
                name:'Daniel Mok',
                age:'32',
                gender:'Female',
                address:'71 Pilgrim Avenue Chevy Chase, MD 20815',
                service:'Dental Checkup',
                doctor:'Dr. John Smith',
                contact:'404-447-6013',
                appointmentDate:'11 Jan 2018',
                detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                PatientStatus:'Approved'
            },
            { 
                id:4,
                patientID:'KU 00598',
                thumb:'../assets/patients/1.jpg', 
                name:'Daniel Mok',
                age:'32',
                gender:'Female',
                address:'71 Pilgrim Avenue Chevy Chase, MD 20815',
                service:'Dental Checkup',
                doctor:'Dr. John Smith',
                contact:'404-447-6013',
                appointmentDate:'11 Jan 2018',
                detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                PatientStatus:'Approved'
            },
            { 
                id:5,
                patientID:'KU 00598',
                thumb:'../assets/patients/1.jpg', 
                name:'Daniel Mok',
                age:'32',
                gender:'Female',
                address:'71 Pilgrim Avenue Chevy Chase, MD 20815',
                service:'Dental Checkup',
                doctor:'Dr. John Smith',
                contact:'404-447-6013',
                appointmentDate:'11 Jan 2018',
                detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                PatientStatus:'Approved'
            },
            { 
                id:6,
                patientID:'KU 00598',
                thumb:'../assets/patients/1.jpg', 
                name:'Daniel Mok',
                age:'32',
                gender:'Female',
                address:'71 Pilgrim Avenue Chevy Chase, MD 20815',
                service:'Dental Checkup',
                doctor:'Dr. John Smith',
                contact:'404-447-6013',
                appointmentDate:'11 Jan 2018',
                detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                PatientStatus:'Approved'
            },
            
        ];

        return {
            barChartData,pieChartData,barDonutData,pieLineData,quickReport,doctorsData,patientsData,appointmentData
        }
    }
}
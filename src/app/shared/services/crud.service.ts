import { Injectable } from '@angular/core';
import { MedicalExaminations } from '../reminder-categories';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  medicalExaminationsRef: AngularFireList<any>;
  medicalExaminationRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

  AddMedicalExamination(medicalExamination: MedicalExaminations){
    this.medicalExaminationsRef.push({
      expirationDate: medicalExamination.expirationDate,
      name: medicalExamination.name,
      surname: medicalExamination.surname,
    });
  }

  GetMedicalExamination(id: string) {
    this.medicalExaminationRef = this.db.object('medical-examinations/' + id);
    return this.medicalExaminationRef;
  }

  GetMedicalExaminationsList() {
    this.medicalExaminationsRef = this.db.list('medical-examinations');
    return this.medicalExaminationsRef;
  }

  UpdateMedicalExamination(medicalExamination: MedicalExaminations) {
    this.medicalExaminationRef.update({
      expirationDate: medicalExamination.expirationDate,
      name: medicalExamination.name,
      surname: medicalExamination.surname,
    });
  }

  DeleteMedicalExamination(id: string) {
    this.medicalExaminationRef = this.db.object('medical-examinations/' + id);
    this.medicalExaminationRef.remove();
  }


}

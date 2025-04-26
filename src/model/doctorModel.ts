


type Gender = 'male' | 'female' | 'others'
type Status = 'active' | 'inactive' | 'suspend'
type Specialist =  
  | "General Pediatrics"  
  | "Neonatology"  
  | "Pediatric Cardiology"  
  | "Pediatric Neurology"  
  | "Pediatric Endocrinology"  
  | "Pediatric Gastroenterology"  
  | "Pediatric Hematology-Oncology"  
  | "Pediatric Nephrology"  
  | "Pediatric Surgery"  
  | "Pediatric Orthopedics"  
  | "Pediatric Psychiatry"  
  | "Developmental & Behavioral Pediatrics";  

  type Qualification =  
  | "MBBS"  
  | "DCH (Diploma in Child Health)"  
  | "FCPS (Pediatrics)"  
  | "MD (Pediatrics)"  
  | "MS (Pediatric Surgery)"  
  | "MRCPCH (UK)"  
  | "DNB (Pediatrics)"  
  | "DM (Neonatology)"  
  | "DM (Pediatric Neurology)"  
  | "DM (Pediatric Cardiology)"  
  | "Fellowship in Pediatric Critical Care"  
  | "Fellowship in Pediatric Hematology-Oncology";  


export interface Doctor {
name:string,
email:null | string,
imgUrl?:string,
password:string,
phoneNumber:string,
bikashNumber:string,
nidNumber:string,
medicalLiecense:string,
gender:Gender,
status: Status,
linkdin?:string,
facebook?:string,
specialization:Specialist,
qualifications:Qualification,
chamberAddress:string,
dateOfBirth:Date,
details?:string,
qoute?:string,


}
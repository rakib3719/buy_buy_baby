'use client'
import { bgColors } from "@/app/utils/color";
import { uploadImage } from "@/app/utils/imageUpload";
import { Doctor } from "@/model/doctorModel";
import { postApi } from "@/services/commonApi";
import axios from "axios";
import Swal from 'sweetalert2'
import React, { useState } from "react";

const DoctorForm = () => {
  const [image, setImage] = useState<File | null>(null);
  const [loader, setLoader] = useState(false)

  const doctorHandelar = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoader(true)
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name: string = form.name.value;
    const password: string = form.password.value;
    const email: string = form.email.value;
    const phoneNumber: string = form.phoneNumber.value;
    const bikashNumber: string = form.bikashNumber.value;
    const nidNumber: string = form.nidNumber.value;
    const medicalLiecense: string = form.medicalLiecense.value;
    const gender: "male" | "female" | "others" = form.gender.value as "male" | "female" | "others";
    const status: "active" | "inactive" | "suspend" = form.status.value as "active" | "inactive" | "suspend";
    const specialization: "General Pediatrics" | "Neonatology" | "Pediatric Cardiology" | "Pediatric Neurology" | "Pediatric Endocrinology" | "Pediatric Gastroenterology" | "Pediatric Hematology-Oncology" | "Pediatric Nephrology" | "Pediatric Surgery" | "Pediatric Orthopedics" | "Pediatric Psychiatry" | "Developmental & Behavioral Pediatrics" = form.specialization.value as "General Pediatrics" | "Neonatology" | "Pediatric Cardiology" | "Pediatric Neurology" | "Pediatric Endocrinology" | "Pediatric Gastroenterology" | "Pediatric Hematology-Oncology" | "Pediatric Nephrology" | "Pediatric Surgery" | "Pediatric Orthopedics" | "Pediatric Psychiatry" | "Developmental & Behavioral Pediatrics";
    const qualifications: "MBBS" | "DCH (Diploma in Child Health)" | "FCPS (Pediatrics)" | "MD (Pediatrics)" | "MS (Pediatric Surgery)" | "MRCPCH (UK)" | "DNB (Pediatrics)" | "DM (Neonatology)" | "DM (Pediatric Neurology)" | "DM (Pediatric Cardiology)" | "Fellowship in Pediatric Critical Care" | "Fellowship in Pediatric Hematology-Oncology" = form.qualifications.value as "MBBS" | "DCH (Diploma in Child Health)" | "FCPS (Pediatrics)" | "MD (Pediatrics)" | "MS (Pediatric Surgery)" | "MRCPCH (UK)" | "DNB (Pediatrics)" | "DM (Neonatology)" | "DM (Pediatric Neurology)" | "DM (Pediatric Cardiology)" | "Fellowship in Pediatric Critical Care" | "Fellowship in Pediatric Hematology-Oncology";
    const chamberAddress: string = form.chamberAddress.value;
    const dateOfBirth: string = form.dateOfBirth.value;
    const details: string = form.details.value;

    const doctorUser: Doctor = {
      name,
      email,
      imgUrl: form.image.files[0] ,
      password,
      phoneNumber,
      bikashNumber,
      nidNumber,
      medicalLiecense,
      gender,
      status,
      specialization,
      qualifications,
      chamberAddress,
      dateOfBirth: new Date(dateOfBirth),
      details,
    };
    // const formData = new FormData();
    // formData.append('image', image)
    //   formData.append("upload_preset", "dcirauywt"); 
    // formData.append("cloud_name", "hi")
    // formData.append("api_key", '724993446295319');

    // console.log(doctorUser);
    try {
      const file =await uploadImage(doctorUser.imgUrl)
      console.log(file, 'file');
      doctorUser.imgUrl = file;
      const saveDoctor = await postApi('http://localhost:5000/doctor/add', doctorUser);
      console.log(saveDoctor);
      setLoader(false)
      if(saveDoctor?.data?._id){
        setLoader(false)
      
Swal.fire({
  title: `${saveDoctor?.data?.name} is saved sucessfully`,
  icon: "success",
  draggable: true
});
      }
     } catch (error) {
       console.log(error.message);
       Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: `<p>${error.message}</p>`
      });
       setLoader(false)
     }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
   
  };

  return (
    <div className="border-4 p-6 md:p-8 rounded-lg shadow-lg w-full md:w-[80%] mx-auto">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        Doctor Registration Form
      </h2>

      <form onSubmit={doctorHandelar} className="space-y-5">
        {/* Name */}
        <div className="w-full">
          <label htmlFor="name" className="text-[15px] text-gray-700 font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
           
            placeholder="Your name"
            className="border border-gray-300 rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
          />
        </div>

        {/* Email */}
        <div className="w-full">
          <label htmlFor="email" className="text-[15px] text-gray-700 font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            className="border border-gray-300 rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
          />
        </div>

        {/* Password */}
        <div className="w-full">
          <label htmlFor="password" className="text-[15px] text-gray-700 font-medium">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter Password"
            className="border border-gray-300 rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="w-full">
          <label htmlFor="phoneNumber" className="text-[15px] text-gray-700 font-medium">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
          required
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Your phone number"
            className="border border-gray-300 rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
          />
        </div>

        {/* Bkash Number */}
        <div className="w-full">
          <label htmlFor="bikashNumber" className="text-[15px] text-gray-700 font-medium">
            Bkash Number
          </label>
          <input
          required
            type="tel"
            name="bikashNumber"
            id="bikashNumber"
            placeholder="Your Bkash number"
            className="border border-gray-300 rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
          />
        </div>

        {/* NID Number */}
        <div className="w-full">
          <label htmlFor="nidNumber" className="text-[15px] text-gray-700 font-medium">
            NID Number
          </label>
          <input
            type="text"
            name="nidNumber"
            id="nidNumber"
            placeholder="Your NID number"
            className="border border-gray-300 rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
            required
          />
        </div>

        {/* Medical License */}
        <div className="w-full">
          <label htmlFor="medicalLiecense" className="text-[15px] text-gray-700 font-medium">
            Medical License
          </label>
          <input
            type="text"
            name="medicalLiecense"
            id="medicalLiecense"
            placeholder="Your Medical License"
            className="border border-gray-300 rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
            required
          />
        </div>

        {/* Gender */}
        <div className="w-full">
          <label htmlFor="gender" className="text-[15px] text-gray-700 font-medium">
            Gender <span className="text-red-500">*</span>
          </label>
          <select
            name="gender"
            id="gender"
            className="border border-gray-300 rounded-md outline-none px-4 w-full mt-1 py-3 bg-white focus:border-primary transition-colors duration-300"
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* Status */}
        <div className="w-full">
          <label htmlFor="status" className="text-[15px] text-gray-700 font-medium">
            Status
          </label>
          <select
            name="status"
            id="status"
            className="border border-gray-300 rounded-md outline-none px-4 w-full mt-1 py-3 bg-white focus:border-primary transition-colors duration-300"
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="suspend">Suspend</option>
          </select>
        </div>

        {/* Specialization */}
        <div className="w-full">
          <label htmlFor="specialization" className="text-[15px] text-gray-700 font-medium">
            Specialization <span className="text-red-500">*</span>
          </label>
          <select
            name="specialization"
            id="specialization"
            className="border border-gray-300 rounded-md outline-none px-4 w-full mt-1 py-3 bg-white focus:border-primary transition-colors duration-300"
            required
          >
            <option value="General Pediatrics">General Pediatrics</option>
            <option value="Neonatology">Neonatology</option>
            <option value="Pediatric Cardiology">Pediatric Cardiology</option>
            <option value="Pediatric Neurology">Pediatric Neurology</option>
            <option value="Pediatric Endocrinology">Pediatric Endocrinology</option>
            <option value="Pediatric Gastroenterology">Pediatric Gastroenterology</option>
            <option value="Pediatric Hematology-Oncology">Pediatric Hematology-Oncology</option>
            <option value="Pediatric Nephrology">Pediatric Nephrology</option>
            <option value="Pediatric Surgery">Pediatric Surgery</option>
            <option value="Pediatric Orthopedics">Pediatric Orthopedics</option>
            <option value="Pediatric Psychiatry">Pediatric Psychiatry</option>
            <option value="Developmental & Behavioral Pediatrics">Developmental & Behavioral Pediatrics</option>
          </select>
        </div>

        {/* Qualifications */}
        <div className="w-full">
          <label htmlFor="qualifications" className="text-[15px] text-gray-700 font-medium">
            Qualifications <span className="text-red-500">*</span>
          </label>
          <select
            name="qualifications"
            id="qualifications"
            className="border border-gray-300 rounded-md outline-none px-4 w-full mt-1 py-3 bg-white focus:border-primary transition-colors duration-300"
            required
          >
            <option value="MBBS">MBBS</option>
            <option value="DCH (Diploma in Child Health)">DCH (Diploma in Child Health)</option>
            <option value="FCPS (Pediatrics)">FCPS (Pediatrics)</option>
            <option value="MD (Pediatrics)">MD (Pediatrics)</option>
            <option value="MS (Pediatric Surgery)">MS (Pediatric Surgery)</option>
            <option value="MRCPCH (UK)">MRCPCH (UK)</option>
            <option value="DNB (Pediatrics)">DNB (Pediatrics)</option>
            <option value="DM (Neonatology)">DM (Neonatology)</option>
            <option value="DM (Pediatric Neurology)">DM (Pediatric Neurology)</option>
            <option value="DM (Pediatric Cardiology)">DM (Pediatric Cardiology)</option>
            <option value="Fellowship in Pediatric Critical Care">Fellowship in Pediatric Critical Care</option>
            <option value="Fellowship in Pediatric Hematology-Oncology">Fellowship in Pediatric Hematology-Oncology</option>
          </select>
        </div>

        {/* Chamber Address */}
        <div className="w-full">
          <label htmlFor="chamberAddress" className="text-[15px] text-gray-700 font-medium">
            Chamber Address <span className="text-red-500">*</span>
          </label>
          <textarea
            name="chamberAddress"
            id="chamberAddress"
            rows={4}
            placeholder="Your chamber address"
            className="border border-gray-300 rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
            
          />
        </div>

        {/* Date of Birth */}
        <div className="w-full">
          <label htmlFor="dateOfBirth" className="text-[15px] text-gray-700 font-medium">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            className="border border-gray-300 rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
            required
          />
        </div>

        {/* Details */}
        <div className="w-full">
          <label htmlFor="details" className="text-[15px] text-gray-700 font-medium">
            Details <span className="text-red-500">*</span>
          </label>
          <textarea
            name="details"
            id="details"
            rows={4}
            placeholder="Additional details about the doctor"
            className="border border-gray-300 rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
          />
        </div>

        {/* Image Upload */}
        <div className="w-full">
          <label htmlFor="image" className="text-[15px] text-gray-700 font-medium">
            Upload Image <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="border border-gray-300 rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
          />
          {image && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(image)}
                alt="Doctor Image Preview"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="w-full">
          <button
            type="submit"
            className={`w-full py-3 ${bgColors.primary} text-white rounded-md font-medium hover:bg-primary-dark  focus:outline-none transition-colors duration-300`}
          >
            Register Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorForm;

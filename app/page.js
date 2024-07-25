
"use client"

import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
// import db from "@/src/utils/db";
import { Image } from "next/image";
// import { useRouter } from "next/router";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";


// import { getServerSideProps } from "@/src/pages/showSchool";



export default function Home({ schools }) {
  const router = useRouter();

  const navigateToAddSchool = () => {
    router.push("/addSchool");
  };

  const navigateToShowSchools = () => {
    router.push("/showSchools");
  };

  return (
    <div>
      <Navbar />
      <div className="relative h-96">
        <Image
          src="../public/schoolImages/schoolimages12.jpeg"
          alt="Banner Image"
          priority
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="container mx-auto mt-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">
            Welcome to the School Management System
          </h1>
          <div className="flex">
            <button
              onClick={navigateToAddSchool}
              className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Add School
            </button>
            <button
              onClick={navigateToShowSchools}
              className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Show Schools
            </button>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1 style={{ fontWeight: "bold" }}>Schools List</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >          
          {schools?.map((school, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
                width: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                <Image
                  src={`/schoolImages/${school.image}`}
                  alt={school.name}
                  width={300}
                  height={200}
                />
              </div>
              <h3 style={{ textAlign: "center" }}>{school.name}</h3>
              <p style={{ textAlign: "center", marginBottom: "8px" }}>
                Address: {school.address}
              </p>
              <p style={{ textAlign: "center", marginBottom: "8px" }}>
                City: {school.city}
              </p>
              <button
                style={{
                  backgroundColor: "green",
                  border: "2px solid black",
                  padding: "8px 16px",
                  borderRadius: "5px",
                  color: "white",
                }}
              >
                VISIT
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

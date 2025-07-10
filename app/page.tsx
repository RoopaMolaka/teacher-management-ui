"use client";

import TeacherHeader from "@/Components/TeacherHeader";
import ContactInfoCard from "@/Components/ContactInfoCard";
import QualificationTable from "@/Components/QualificationTable";
import AvailabilityGrid from "@/Components/AvailabilityGrid";
import PaymentCard from "@/Components/PaymentCard";

export default function Home() {
  const privateQualifications = [
    { name: "Vocal Contemporary", rate: 25 },
    { name: "Vocal Core", rate: 28 },
    { name: "Vocal Hybrid", rate: 26 },
    { name: "Vocal Plus", rate: 30 },
  ];

  const groupQualifications = [{ name: "Instrument", rate: 26 }];

  return (
    <main className="min-h-screen bg-red-500 p-6 space-y-6">
      <TeacherHeader
        name="Roopa Molaka"
        role="Teacher"
        birthDate="2002-04-10"
      />
      <ContactInfoCard
        email="roopa123@gmail.com"
        phone="9876543210"
        address="Gachibowli,Hyderabad-500084"
      />
      <div className="grid md:grid-cols-2 gap-4">
        <QualificationTable
          title="Private Qualifications"
          qualifications={privateQualifications}
        />
        <QualificationTable
          title="Group Qualifications"
          qualifications={groupQualifications}
        />
      </div>
      <AvailabilityGrid />
      <div className="flex justify-center">
        <PaymentCard />
      </div>{" "}
    </main>
  );
}

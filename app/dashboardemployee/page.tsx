
import EmployeeInformationCard from "@/components/employee/employeeinformation";
import PayrollTable from "@/components/employee/payrolldetails";
import ProfileCard from "@/components/employee/profilecard";
import ProfileDetailCard from "@/components/employee/profiledetailcard";
import DashboardWelcome from "@/components/employee/welcome";
import HeaderEmploye from "@/components/header/headeremployee";
import { BadgeCheck, BanknoteArrowUp, CircleUser, UserPen } from "lucide-react";

export default function DashboardEmployeePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <HeaderEmploye />

      <main className="px-4 md:px-8 pb-10">
        <DashboardWelcome />

        <section className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* ===== Card 1 (1/4) ===== */}
          <div className="md:col-span-1 h-[315px] bg-white rounded-xl shadow p-4 flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-800">Username</h3>

              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white">
                <BadgeCheck size={14} />
              </div>
            </div>

            <div className="flex-1">
              <ProfileCard />
            </div>
          </div>

          {/* ===== Card 2 (3/4) ===== */}
          <div className="md:col-span-3 h-[315px] bg-white rounded-xl shadow p-4 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-800">
                Payroll Details
              </h3>

              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white">
                <BanknoteArrowUp size={14} />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-h-0">
              <PayrollTable />
            </div>
          </div>

          {/* ===== Card 3 (1/2) ===== */}
          <div className="md:col-span-2 h-[315px] bg-white rounded-xl shadow p-4 flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-800">
                Profile Detail
              </h3>

              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white">
                <CircleUser size={14} />
              </div>
            </div>

            <div className="flex-1">
                <ProfileDetailCard />
            </div>
          </div>

          {/* ===== Card 4 (1/2) ===== */}
          <div className="md:col-span-2 h-[315px] bg-white rounded-xl shadow p-4 flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-800">
                Employee Information
              </h3>

              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white">
                <UserPen size={14} />
              </div>
            </div>

            <div className="flex-1 mt-5">
                <EmployeeInformationCard />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

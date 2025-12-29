import AccountApprovalCard from "@/components/admin/account-approval-card";
import { CompanySummaryCard } from "@/components/admin/company-summary-card";
import CutiApprovalCard from "@/components/admin/cuti-approval-card";
import { DistribusiKaryawan } from "@/components/admin/distribusi-karyawan";
import PayslipApprovalCard from "@/components/admin/payslip-approval-card";
import { PayslipChart } from "@/components/admin/payslip-chart";
import DashboardWelcome from "@/components/admin/welcome";
import Header from "@/components/header/header";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      <main className="px-4 md:px-8 pb-10">
        <DashboardWelcome />

        <section className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl min-h-[315px] flex items-center justify-center">
              <AccountApprovalCard />
            </div>
            <div className="bg-white rounded-2xl min-h-[315px] flex items-center justify-center">
              <PayslipApprovalCard />
            </div>
            <div className="bg-white rounded-2xl min-h-[315px] flex items-center justify-center">
              <CutiApprovalCard />
            </div>
            <div className="bg-white rounded-2xl min-h-[315px] flex items-center justify-center">
              <CompanySummaryCard />
            </div>
            <DistribusiKaryawan />
            <PayslipChart />
          </div>
        </section>
      </main>
    </div>
  );
}

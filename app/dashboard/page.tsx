import ApprovalCard from "@/components/admin/aproval-card";
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
              <ApprovalCard />
            </div>
            <div className="bg-white rounded-2xl min-h-[315px]" />
            <div className="bg-white rounded-2xl min-h-[315px]" />
            <div className="bg-white rounded-2xl min-h-[315px]" />
            <div className="bg-white rounded-2xl min-h-[315px]" />
            <div className="bg-white rounded-2xl min-h-[315px]" />
          </div>
        </section>
      </main>
    </div>
  );
}

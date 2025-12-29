// Company Summary Card Component
export function CompanySummaryCard() {
  const companies = [
    { name: 'PT Maju Bersama', location: 'Jakarta', employees: 45, salary: 'Rp 675.000.000', highlighted: false },
    { name: 'PT Maju Bersama', location: 'Jakarta', employees: 45, salary: 'Rp 675.000.000', highlighted: false },
    { name: 'PT Maju Bersama', location: 'Jakarta', employees: 45, salary: 'Rp 675.000.000', highlighted: true },
    { name: 'PT Maju Bersama', location: 'Jakarta', employees: 45, salary: 'Rp 675.000.000', highlighted: false },
    { name: 'PT Maju Bersama', location: 'Jakarta', employees: 45, salary: 'Rp 675.000.000', highlighted: false },
  ];

  return (
    <div className="w-[445px] h-[336px] rounded-2xl bg-white relative">
      <h3 className="absolute left-6 top-[22px] text-black text-xl font-semibold leading-[100%] tracking-[0.1px]" style={{ fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif' }}>
        Ringkasan Daftar Perusahaan
      </h3>
      
      <div className="absolute left-6 top-16 w-[382px] flex flex-col gap-2">
        {companies.map((company, index) => (
          <div key={index} className={`flex items-center justify-center gap-[88px] px-3 py-3 rounded-lg border ${company.highlighted ? 'border-[#FF684D]' : 'border-[rgba(40,44,48,0.25)]'}`}>
            <div className="flex items-center gap-[17px]">
              <div className="w-6 h-6 rounded bg-[#FF684D] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.72 12.1002H1.44V2.99942C1.44002 2.77272 1.51138 2.55177 1.64396 2.36789C1.77655 2.184 1.96364 2.0465 2.17872 1.97486L7.93872 0.0553401C8.10105 0.00127323 8.2739 -0.0134518 8.44304 0.0123777C8.61218 0.0382073 8.77276 0.103852 8.91155 0.203905C9.05035 0.303958 9.16338 0.435555 9.24135 0.587856C9.31932 0.740157 9.35998 0.908802 9.36 1.0799V12.1002H10.08V5.61302C10.08 5.55978 10.0919 5.50721 10.1147 5.45909C10.1375 5.41098 10.1706 5.36852 10.2118 5.33478C10.253 5.30103 10.3012 5.27684 10.3528 5.26395C10.4045 5.25106 10.4584 5.24978 10.5106 5.26022L12.0917 5.57702C12.3364 5.62594 12.5567 5.75811 12.715 5.95106C12.8733 6.14402 12.9598 6.38584 12.96 6.63542V12.1002H13.68C13.871 12.1002 14.0541 12.1761 14.1891 12.3111C14.3241 12.4461 14.4 12.6293 14.4 12.8202C14.4 13.0112 14.3241 13.1943 14.1891 13.3293C14.0541 13.4644 13.871 13.5402 13.68 13.5402H0.72C0.529044 13.5402 0.345909 13.4644 0.210883 13.3293C0.0758569 13.1943 0 13.0112 0 12.8202C0 12.6293 0.0758569 12.4461 0.210883 12.3111C0.345909 12.1761 0.529044 12.1002 0.72 12.1002Z" fill="white"/>
                </svg>
              </div>
              <div className="flex flex-col gap-1.5 w-[114px]">
                <span className="text-black text-xs font-semibold leading-[100%] tracking-[0.06px]" style={{ fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  {company.name}
                </span>
                <span className="text-[rgba(40,44,48,0.75)] text-xs font-medium leading-[100%] tracking-[0.06px]" style={{ fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  {company.location}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 w-[114px]">
              <span className="text-[#282C30] text-xs font-semibold leading-[100%] tracking-[0.06px] text-right" style={{ fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif' }}>
                <span className="text-black">{company.employees} </span>Karyawan
              </span>
              <span className="text-[rgba(40,44,48,0.75)] text-[10px] font-medium leading-[100%] tracking-[0.05px] text-right" style={{ fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif' }}>
                {company.salary}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Slider */}
      <div className="absolute right-[26px] top-[83px] w-0.5 h-[216px]">
        <div className="w-0.5 h-[216px] rounded-[2px] bg-[#D9D9D9]"></div>
        <div className="w-0.5 h-[113px] bg-[#FF684D] absolute top-[7px]"></div>
      </div>

      {/* Fade Overlay */}
      <div className="absolute left-0 bottom-0 w-full h-[62px] bg-gradient-to-t from-white via-white/25 to-transparent pointer-events-none"></div>
    </div>
  );
}
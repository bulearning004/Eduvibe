/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  LayoutDashboard, 
  FilePlus2, 
  History, 
  Settings, 
  LogOut, 
  User,
  Bell,
  Search,
  TrendingUp,
  FileText,
  CheckCircle2,
  Clock,
  PlusCircle,
  MoreVertical,
  Users
} from "lucide-react";

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f8fafc] text-slate-900 antialiased">
      {/* Sidebar - ตามสไตล์ Eena Dashboard */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col hidden md:flex">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <span className="text-2xl font-bold tracking-tight">EduVibe</span>
          </div>

          <nav className="space-y-2">
            <SidebarItem icon={<LayoutDashboard size={20} />} label="แดชบอร์ด" active />
            <SidebarItem icon={<FilePlus2 size={20} />} label="ตรวจงานใหม่" />
            <SidebarItem icon={<History size={20} />} label="ประวัติการตรวจ" />
            <SidebarItem icon={<Settings size={20} />} label="การตั้งค่า" />
          </nav>
        </div>

        <div className="mt-auto p-8 border-t border-slate-50">
          <SidebarItem icon={<LogOut size={20} />} label="ออกจากระบบ" color="text-red-500" />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-xl font-semibold text-slate-700">ยินดีต้อนรับครับอาจารย์ 👋</h1>
          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="ค้นหาผลงานนักศึกษา..." 
                className="w-64 pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
            </div>
            <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-full transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-600 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">อาจารย์สมชาย ใจดี</p>
                <p className="text-xs text-slate-400">คณะอักษรศาสตร์</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                <User size={24} className="text-slate-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <section className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700">
            {/* ส่วนหัว: สถิติภาพรวม (Statistics Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                title="งานที่ตรวจแล้ว" 
                value="128" 
                change="+12%" 
                icon={<CheckCircle2 className="text-emerald-500" />} 
                bgColor="bg-emerald-50"
              />
              <StatCard 
                title="จำนวนนักศึกษา" 
                value="45" 
                change="+5%" 
                icon={<Users className="text-blue-500" />} 
                bgColor="bg-blue-50"
              />
              <StatCard 
                title="รอดำเนินการ" 
                value="12" 
                change="-2" 
                icon={<Clock className="text-amber-500" />} 
                bgColor="bg-amber-50"
              />
              <StatCard 
                title="คะแนนเฉลี่ยรวม" 
                value="7.8" 
                change="+0.4" 
                icon={<FileText className="text-indigo-500" />} 
                bgColor="bg-indigo-50"
              />
            </div>

            {/* ส่วนกลาง: กราฟจำลองและปุ่ม Action */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-slate-50 relative overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-800">ยินดีต้อนรับสู่ EduVibe</h2>
                    <p className="text-slate-500 mt-1">วันนี้คุณมีงานรอตรวจ 3 ชิ้นครับ เริ่มต้นสร้าง Feedback ดีๆ ให้นักศึกษากัน!</p>
                  </div>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-medium flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-indigo-200">
                    <PlusCircle size={20} />
                    ตรวจงานใหม่
                  </button>
                </div>
                {/* ตกแต่งกราฟิกเบาๆ แบบในภาพตัวอย่าง */}
                <div className="h-40 w-full bg-linear-to-r from-indigo-50 to-white rounded-3xl flex items-center justify-center border border-dashed border-indigo-100">
                  <p className="text-indigo-400 text-sm italic">"ระบบ AI พร้อมวิเคราะห์โครงสร้างภาษาและตรรกะให้อาจารย์แล้วครับ"</p>
                </div>
              </div>

              {/* การแจ้งเตือนหรือกิจกรรมล่าสุด */}
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-50">
                <h3 className="font-bold text-slate-800 mb-6">คำแนะนำจาก AI</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-sm font-semibold text-slate-700 mb-1">จุดที่นักศึกษาควรปรับปรุง</p>
                    <p className="text-xs text-slate-500">สัปดาห์นี้พบว่านักศึกษากกว่า 60% ยังขาดการอ้างอิงที่ชัดเจนในบทนำ</p>
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                    <p className="text-sm font-semibold text-indigo-700 mb-1">ทริคการใช้งาน</p>
                    <p className="text-xs text-indigo-600">อาจารย์สามารถใช้โหมด 'Actionable' เพื่อให้ AI แนะนำวิธีแก้ให้นักศึกษาได้ทันที</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ส่วนล่าง: ตารางรายการงานล่าสุด (Recent Reports) */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-50 overflow-hidden">
              <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                <h3 className="font-bold text-slate-800 text-lg">ประวัติการตรวจล่าสุด</h3>
                <button className="text-indigo-600 text-sm font-semibold hover:underline">ดูทั้งหมด</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-slate-400 text-sm uppercase tracking-wider">
                      <th className="px-8 py-4 font-medium">นักศึกษา</th>
                      <th className="px-8 py-4 font-medium">หัวข้อการเขียน</th>
                      <th className="px-8 py-4 font-medium">สถานะ</th>
                      <th className="px-8 py-4 font-medium">คะแนน</th>
                      <th className="px-8 py-4 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    <HistoryRow 
                      name="ธันวา ใจมั่น" 
                      topic="ผลกระทบของ AI ต่อการศึกษา" 
                      status="ตรวจแล้ว" 
                      score="8.5/10" 
                      avatar="T"
                    />
                    <HistoryRow 
                      name="วรัญญา สุขขี" 
                      topic="การวิเคราะห์วรรณกรรมยุคใหม่" 
                      status="ตรวจแล้ว" 
                      score="7.2/10" 
                      avatar="W"
                    />
                    <HistoryRow 
                      name="ก้องภพ ยิ่งยืน" 
                      topic="พื้นฐานการเขียนเชิงวิชาการ" 
                      status="กำลังตรวจ" 
                      score="-" 
                      avatar="K"
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, active = false, color = "text-slate-500" }: { icon: ReactNode, label: string, active?: boolean, color?: string }) {
  return (
    <div className={`
      flex items-center gap-4 px-4 py-3 rounded-2xl cursor-pointer transition-all duration-200
      ${active ? 'bg-indigo-50 text-indigo-600 font-semibold' : `${color} hover:bg-slate-50 hover:text-slate-700`}
    `}>
      {icon}
      <span className="text-[15px]">{label}</span>
    </div>
  );
}

function StatCard({ title, value, change, icon, bgColor }: { title: string, value: string, change: string, icon: ReactNode, bgColor: string }) {
  return (
    <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-50 transition-hover duration-300 hover:shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 ${bgColor} rounded-2xl`}>
          {icon}
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded-lg ${change.includes('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-500'}`}>
          {change}
        </span>
      </div>
      <p className="text-slate-500 text-sm font-medium">{title}</p>
      <h4 className="text-2xl font-bold text-slate-800 mt-1">{value}</h4>
    </div>
  );
}

function HistoryRow({ name, topic, status, score, avatar }: { name: string, topic: string, status: string, score: string, avatar: string }) {
  return (
    <tr className="hover:bg-slate-50/50 transition-colors group">
      <td className="px-8 py-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs">
            {avatar}
          </div>
          <span className="font-semibold text-slate-700">{name}</span>
        </div>
      </td>
      <td className="px-8 py-5 text-slate-600 text-sm">{topic}</td>
      <td className="px-8 py-5">
        <span className={`px-3 py-1 rounded-full text-[12px] font-medium ${status === 'ตรวจแล้ว' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
          {status}
        </span>
      </td>
      <td className="px-8 py-5 font-bold text-slate-700">{score}</td>
      <td className="px-8 py-5 text-right">
        <button className="text-slate-400 hover:text-indigo-600 transition-colors">
          <MoreVertical size={18} />
        </button>
      </td>
    </tr>
  );
}

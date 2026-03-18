export default function SidebarItem({ icon, label, active, onClick, badge }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors group ${
        active 
          ? "bg-indigo-50 text-indigo-700" 
          : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <div className="flex items-center">
        <span className={`mr-3 ${active ? "text-indigo-600" : "text-gray-400 group-hover:text-gray-600"}`}>
          {icon || (
            <div className="w-5 h-5 bg-current opacity-20 rounded" />
          )}
        </span>
        <span className="font-medium text-sm">{label}</span>
      </div>
      
      {badge && (
        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
          active ? "bg-indigo-200 text-indigo-800" : "bg-gray-100 text-gray-600"
        }`}>
          {badge}
        </span>
      )}
    </button>
  );
}
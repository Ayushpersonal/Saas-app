export default function Card({ title, subtitle, children, footer, className = "" }) {
  return (
    <div className={`bg-white shadow-sm rounded-2xl border border-gray-100 overflow-hidden ${className}`}>
      {(title || subtitle) && (
        <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/30">
          {title && <h2 className="text-lg font-semibold text-gray-800">{title}</h2>}
          {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 border-t border-gray-50 bg-gray-50/10">
          {footer}
        </div>
      )}
    </div>
  );
}

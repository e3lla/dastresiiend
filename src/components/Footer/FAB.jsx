import React, { useState } from "react";

const FAB = () => {
  const [open, setOpen] = useState(false);

  // sizes for offset calculation (approx px values)
  const BUTTON_SIZE = 56; // btn-lg approx
  const GAP = 12;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative w-14 h-14">
        {/* Action card: positioned absolutely above the FAB */}
        <div
          role="dialog"
          aria-hidden={!open}
          className="absolute right-0"
          style={{
            bottom: open ? `${BUTTON_SIZE + GAP}px` : `-${BUTTON_SIZE}px`,
            transition: "bottom 180ms ease, opacity 180ms ease",
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none",
            transformOrigin: "bottom right",
            width: 320,
            maxWidth: "calc(100vw - 48px)",
            zIndex: 9998,
          }}
        >
          <div className="card bg-primary text-primary-content shadow-lg">
            <div className="card-body">
              <p>
                
سیستم مشاوره و پشتیبانی آنلاین دسترسی
www.dastresi.com
              </p>
              <div className="card-actions justify-end">
                <button className="btn">شروع مکالمه</button>
              </div>
            </div>
          </div>
        </div>

        {/* Main FAB button */}
        <button
          type="button"
          aria-label="open-fab"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="absolute right-0 bottom-0 btn btn-lg btn-circle btn-secondary shadow-lg"
          style={{ zIndex: 9999 }}
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FAB;
const paths = {
  home:<><path d="M3 11 12 3l9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/><path d="m8 13 3-3 2 2 3-3"/></>,
  tools:<><path d="m14 7 3-3 3 3-3 3"/><path d="m14 7-9 9a2 2 0 1 0 3 3l9-9M5 3l4 4M3 5l4 4"/></>,
  tree:<><path d="m4 17 7-7 3 3-7 7zM10 9l3-3 5 5-3 3M15 5l2-2 4 4-2 2"/><path d="m3 18-1 3 3-1M7 15l2 2M12 8l4 4"/></>,
  grass:<><circle cx="7" cy="18" r="2.5"/><circle cx="17" cy="18" r="2.5"/><path d="M9.5 18h5M4.5 15h11l-2-6H8zM13 9l3-5M16 4h3M4 12 2 8"/><path d="M2 8h4"/></>,
  search:<><path d="M3 20V9l8-6 8 6v4M7 20v-6h4"/><circle cx="16" cy="16" r="4"/><path d="m19 19 3 3"/></>,
  truck:<><rect x="2" y="6" width="12" height="11" rx="1"/><path d="M14 10h4l4 4v3h-8M17 10v4h5"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></>,
  trash:<><path d="M5 7h14M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6M3 7h18"/></>,
  shield:<path d="M12 3 20 6v6c0 5-3.4 8-8 10-4.6-2-8-5-8-10V6z"/>,
  calendar:<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/></>,
  phone:<path d="M6 3h4l2 5-3 2c1.5 3 3 4.5 6 6l2-3 4 2v4c0 1-1 2-2 2C10 20 4 14 3 5c0-1 1-2 3-2z"/>,
  mail:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
  pin:<><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2"/></>,
  star:<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z"/>,
}
export default function Icon({name,size=24}){return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>}

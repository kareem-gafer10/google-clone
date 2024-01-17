import HeaderSearch from "@/components/HeaderSearch";

export const metadata = {
  title: "Google",
  description: "Google clone created by Next js",
};

export default function SearchLayout({ children }) {
  return (
    <div>
      <HeaderSearch />
      {children}
      {/* Footer */}
    </div>
  );
}

import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <div className="flex-1">
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">{children}</div>
      </div>
      <Footer />
    </>
  );
}

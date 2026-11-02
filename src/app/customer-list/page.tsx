import type { Metadata } from "next";
import CustomerBook from "@/components/customer-list/CustomerBook";

export const metadata: Metadata = {
  title: "Müşteri Defteri",
  robots: { index: false, follow: false },
};

export default function CustomerListPage() {
  return <CustomerBook />;
}

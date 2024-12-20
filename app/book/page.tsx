import { Navbar } from "@/components/navbar";
import { BookingForm } from "@/components/booking-form";
import { StarryBackground } from "@/components/starry-background";

export default function BookPage() {
  return (
    <>
      <h1 className="mb-8 text-center text-4xl font-bold">Book a Session</h1>
      <BookingForm />
    </>
  );
}

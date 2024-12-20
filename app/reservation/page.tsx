import { Navbar } from "@/components/navbar";
import { ReservationCalendar } from "@/components/reservation-calendar";
import { StarryBackground } from "@/components/starry-background";

export default function ReservationPage() {
  return (
    <div className="min-h-screen bg-transparent text-gray-100">
      <StarryBackground />
      <Navbar />
      <main className="container mx-auto px-4 m-4">
        <h1 className="mb-8 text-center text-4xl font-bold">
          Make a Reservation
        </h1>
        <ReservationCalendar />
      </main>
    </div>
  );
}

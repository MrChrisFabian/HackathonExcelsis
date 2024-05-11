import NexDaysForecast from "@/components/NextDaysForecast";
import CitySelect from "@/components/CitySelect";
import MainForecast from "@/components/MainForecast";

export default function WeatherApp() {
  return (
    <main className="px-5 py-10">
      <section className="flex flex-col md:flex-col lg:flex-col gap-y-4">
        <section className="flex gap-y-5 flex-col md:flex-row lg:flex-row xl:flex-row">
          <MainForecast />
          <div className="flex flex-col ">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Los próximos 3 días
            </h2>
            <NexDaysForecast />
          </div>
        </section>

        <footer className="">
          <CitySelect />
        </footer>
      </section>
    </main>
  );
}

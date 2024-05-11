import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Component() {
  return (
    <main className="grid gap-8 px-4 py-8 md:px-6 md:py-12 lg:px-10 lg:py-16">
      <section className="grid gap-6 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_400px] items-start">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Today's Forecast
            </h1>
            <div className="flex items-center gap-4 flex-col sm:flex-row">
              <p className="text-gray-500 dark:text-gray-400">
                Santa Cruz, California
              </p>
              <div className="flex items-center gap-2">
                <Switch id="temp-unit" />
                <Label htmlFor="temp-unit">Celsius</Label>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
              <img
                alt="Weather icon"
                className="rounded-full"
                height="80"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
              <div className="grid gap-1">
                <div className="text-6xl font-bold sm:text-7xl md:text-8xl">
                  22°C
                </div>
                <div className="text-lg font-medium sm:text-xl md:text-2xl">
                  Sunny
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[repeat(4,1fr)] gap-4 sm:grid-cols-[repeat(4,1fr)] md:grid-cols-[repeat(4,1fr)]">
              <div className="grid gap-2 text-center">
                <div className="text-2xl font-bold sm:text-3xl md:text-4xl">
                  9 AM
                </div>
                <img
                  alt="Weather icon"
                  className="mx-auto"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="text-lg font-medium sm:text-xl md:text-2xl">
                  21°C
                </div>
              </div>
              <div className="grid gap-2 text-center">
                <div className="text-2xl font-bold sm:text-3xl md:text-4xl">
                  12 PM
                </div>
                <img
                  alt="Weather icon"
                  className="mx-auto"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="text-lg font-medium sm:text-xl md:text-2xl">
                  22°C
                </div>
              </div>
              <div className="grid gap-2 text-center">
                <div className="text-2xl font-bold sm:text-3xl md:text-4xl">
                  3 PM
                </div>
                <img
                  alt="Weather icon"
                  className="mx-auto"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="text-lg font-medium sm:text-xl md:text-2xl">
                  23°C
                </div>
              </div>
              <div className="grid gap-2 text-center">
                <div className="text-2xl font-bold sm:text-3xl md:text-4xl">
                  6 PM
                </div>
                <img
                  alt="Weather icon"
                  className="mx-auto"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="text-lg font-medium sm:text-xl md:text-2xl">
                  22°C
                </div>
              </div>
            </div>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Select a City</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Input
              className="w-full"
              placeholder="Search for a city"
              type="text"
            />
            <div className="grid gap-2">
              <a
                className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2"
                href="#"
              >
                <img
                  alt="City icon"
                  className="rounded-full"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="grid gap-0.5">
                  <div className="font-medium">New York</div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    New York, United States
                  </div>
                </div>
              </a>
              <a
                className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2"
                href="#"
              >
                <img
                  alt="City icon"
                  className="rounded-full"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="grid gap-0.5">
                  <div className="font-medium">Los Angeles</div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    Los Angeles, California
                  </div>
                </div>
              </a>
              <a
                className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2"
                href="#"
              >
                <img
                  alt="City icon"
                  className="rounded-full"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="grid gap-0.5">
                  <div className="font-medium">Chicago</div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    Chicago, Illinois
                  </div>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="grid gap-4">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Next 3 Days
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="grid gap-4 items-center">
              <div className="text-lg font-medium sm:text-xl md:text-2xl">
                Tomorrow
              </div>
              <img
                alt="Weather icon"
                className="mx-auto"
                height="60"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "60/60",
                  objectFit: "cover",
                }}
                width="60"
              />
              <div className="grid grid-cols-2 gap-2 text-center">
                <div>
                  <div className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    22°C
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    High
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    18°C
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Low
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-4 items-center">
              <div className="text-lg font-medium sm:text-xl md:text-2xl">
                Wednesday
              </div>
              <img
                alt="Weather icon"
                className="mx-auto"
                height="60"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "60/60",
                  objectFit: "cover",
                }}
                width="60"
              />
              <div className="grid grid-cols-2 gap-2 text-center">
                <div>
                  <div className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    20°C
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    High
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    16°C
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Low
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-4 items-center">
              <div className="text-lg font-medium sm:text-xl md:text-2xl">
                Thursday
              </div>
              <img
                alt="Weather icon"
                className="mx-auto"
                height="60"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "60/60",
                  objectFit: "cover",
                }}
                width="60"
              />
              <div className="grid grid-cols-2 gap-2 text-center">
                <div>
                  <div className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    21°C
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    High
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    17°C
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Low
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

import CounterAnimation from "./CounterAnimation"

const StatsSection = () => {
  const stats = [
    { label: "Happy Clients", value: 15, suffix: "+" },
    { label: "Years Experience", value: 15, suffix: "+" },
    { label: "Projects Delivered", value: 2000, suffix: "+" },
    { label: "Products", value: 1000, suffix: "+" },
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <CounterAnimation end={stat.value} duration={2000} suffix={stat.suffix} />
              <div className="mt-2 text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatsSection


const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const hours = ["7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm"];

const AvailabilityGrid = () => (
  <div className="overflow-x-auto bg-white p-4 rounded shadow">
    <table className="w-full text-sm border">
      <thead>
        <tr>
          <th className="p-2 border"></th>
          {days.map((day) => (
            <th key={day} className="p-2 border text-center font-medium">
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {hours.map((hour) => (
          <tr key={hour}>
            <td className="p-2 border font-medium">{hour}</td>
            {days.map((day) => (
              <td
                key={`${day}-${hour}`}
                className="p-2 border bg-gray-100"
              ></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default AvailabilityGrid

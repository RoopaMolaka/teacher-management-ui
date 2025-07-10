interface Qualification {
  name: string;
  rate: number;
}

interface Props {
  title: string;
  qualifications: Qualification[];
}

const QualificationTable = ({ title, qualifications }: Props) => (
  <div className="bg-white p-4 rounded shadow">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="text-left p-2">Name</th>
          <th className="text-left p-2">Rate ($/hr)</th>
        </tr>
      </thead>
      <tbody>
        {qualifications.map((q, index) => (
          <tr key={index} className="border-t">
            <td className="p-2">{q.name}</td>
            <td className="p-2">${q.rate.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default QualificationTable

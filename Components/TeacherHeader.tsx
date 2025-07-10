interface Props {
  name: string;
  role: string;
  birthDate: string;
}

const TeacherHeader = ({ name, role, birthDate }: Props) => (
  <div className="bg-white shadow p-4 rounded-md">
    <h2 className="text-2xl font-bold">{name}</h2>
    <p className="text-sm text-gray-600">{role}</p>
    <p className="text-sm text-gray-600">Birth Date: {birthDate}</p>
  </div>
);

export default TeacherHeader;

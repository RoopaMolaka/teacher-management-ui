interface ContactInfoProps {
  email: string;
  phone: string;
  address: string;
}

const ContactInfoCard = ({ email, phone, address }: ContactInfoProps) => (
  <div className="grid md:grid-cols-3 gap-4">
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">Email</h3>
      <p>{email}</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">Phone</h3>
      <p>{phone}</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">Address</h3>
      <p>{address}</p>
    </div>
  </div>
);

export default ContactInfoCard;
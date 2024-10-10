export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>dynamic-route {params.id}</h1>
    </div>
  );
}

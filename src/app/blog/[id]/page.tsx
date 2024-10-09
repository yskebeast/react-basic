export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>blog page {params.id}</h1>
    </div>
  );
}

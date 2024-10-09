import { Suspense } from "react";
import Loading from "./loading";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Function[];
}

const fetchData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

const UserItem = ({ user }: { user: User }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default async function Page() {
  const data: Array<User> = await fetchData();

  return (
    <Suspense fallback={<Loading />}>
      <h1>dashboard page</h1>

      <div
        style={{
          margin: "2rem auto",
          border: "1px solid white",
          display: "grid",
          placeItems: "center",
          gap: "1rem",
        }}
      >
        {data.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </Suspense>
  );
}

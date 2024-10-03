import UpdateButton from "@/app/_components/update-button";
// import Link from "next/link";

const ProfilePage = async () => {
  return (
    <div className="flex flex-col md:flex-row gap-24 md:h-[calc(100vh-180px)] items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl">Profile</h1>
        <form className="mt-12 flex flex-col gap-4">
          <input type="text" hidden name="id" value="" />
          <label className="text-sm text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            placeholder=""
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder=""
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">Surname</label>
          <input
            type="text"
            name="lastName"
            placeholder=""
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder=""
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder=""
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <UpdateButton />
        </form>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl">Orders</h1>
        <div className="mt-12 flex flex-col"></div>
      </div>
    </div>
  );
};

export default ProfilePage;


import { authOptions } from "@/helpers/authOptions";
import { getServerSession } from "next-auth";

const DashboardHomePage = async () => {

  // const user = "Rakbul Hasan" 

  const session = await getServerSession(authOptions)
  console.log(session?.user);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-extralight">Welcome, <span className="font-bold">{session?.user?.name || 'Unknown'}</span></h1>
      <p className="text-gray-600 mt-3 text-lg">Programs must be written for people to read, and only incidentally for machines to execute.</p>
    </div>
  );
};

export default DashboardHomePage;

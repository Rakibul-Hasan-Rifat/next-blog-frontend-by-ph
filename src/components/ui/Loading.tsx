import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center gap-2 p-4">
      <Loader className="h-16 w-16 animate-spin text-gray-600" />
      <span className="text-xl font-medium text-gray-600">Loading...</span>
    </div>
  );
};

export default Loading;

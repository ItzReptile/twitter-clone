import {
  ChartBarIcon,
  ChatIcon,
  HeartIcon,
  UploadIcon,
} from "@heroicons/react/outline";

export default function Tweet({ data }) {
  return (
    <div className="border-b border-gray-700">
      <TweetHeader
        username={data?.username}
        name={data?.name}
        // timestamp={data?.timestamp}
        text={data?.tweet}
        photoURL={data?.photoURL}
      />
      <div className="p-3 ml-16 text-gray-500 flex space-x-14">
        <ChatIcon className="w-5 cursor-pointer hover:text-green-400" />
        <HeartIcon className="w-5 cursor-pointer hover:text-pink-400" />
        <ChartBarIcon className="w-5  cursor-not-allowed " />
        <UploadIcon className="w-5 cursor-not-allowed" />
      </div>
    </div>
  );
}

export function TweetHeader({ username, name, timestamp, text,photoURL }) {
  return (
    <div className="flex space-x-3 p-3  border-gray-700">
      <img
        className="w-11 h-11 rounded-full object-cover"
        src={photoURL}
      />
      <div>
        <div className="text-gray-500 flex items-center space-x-2 mb-1">
          <h1>{name}</h1>
          <span>@{username}</span>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <span>{timestamp}</span>
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
}

import { DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";
export default function Trending() {
  return (
    <div className="hidden lg:flex flex-col ml-7 mt-4">
      <div
        className="flex space-x-3 bg-white bg-opacity-10
            w-[300px] h-[44px] p-3 rounded-3xl"
      >
        <SearchIcon className="w-6 text-gray-600" />
        <input
          className="bg-transparent
                focus:outline-none
                placeholder:text-gray-600"
          placeholder="Search Twitter"
        />
      </div>
      <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">What's happening </h1>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending Globally</p>
          <h1 className="text-[15px] font-bold">Russo-Ukraine War</h1>
          <p className="text-xs text-gray-500">340K Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending In US</p>
          <h1 className="text-[15px] font-bold">Seth Webster</h1>
          <p className="text-xs text-gray-500">154K Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Take A Trip To?</p>
          <h1 className="text-[15px] font-bold">Georgia</h1>
          <p className="text-xs text-gray-500">125k Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Breaking News</p>
          <h1 className="text-[15px] font-bold">Infinite</h1>
          <p className="text-xs text-gray-500">52K Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Would You Rather?</p>
          <h1 className="text-[15px] font-bold">Leave A Nice House Or?</h1>
          <p className="text-xs text-gray-500">1.2M Tweets</p>
        </div>
      </div>
      <div className="w-[300px] h-[300px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">Who To Follow </h1>
        <div className="flex justify-between p-3">
          <div className=" flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="https://scontent-ord5-2.xx.fbcdn.net/v/t1.18169-9/10402906_321736148273990_911058327573451551_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WnTga17W2bEAX-FBDlK&_nc_ht=scontent-ord5-2.xx&oh=00_AfDN4GnpdOi5vQoKfN2_zL32ZP3cEmtE29Q8HSMyFHZx7Q&oe=651F7307"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Kelpo games</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] text-gray-500 mt-1">@sirKelpo</h1>
            </div>
          </div>
          <button className="bg-white text-black text-sm w-20 rounded-3xl font-bold h-8">
            Follow
          </button>
        </div>
        <div className="flex justify-between p-3">
          <div className=" flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/315170633_1323457565136433_1047796810473003248_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=2p-pwhUiZgwAX9P0Q10&_nc_ht=scontent-ord5-1.xx&oh=00_AfDKg3TtsmoWYoD5OA3uBsXxk_TSCPWybWWR3Gu535BKqg&oe=64FCA811"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">lee Martin</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] text-gray-500 mt-1">@ElMartin</h1>
            </div>
          </div>
          <button className="bg-white text-black text-sm w-20 rounded-3xl font-bold h-8">
            Follow
          </button>
        </div>
        <div className="flex justify-between p-3">
          <div className=" flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/elden-ring/e/e5/20220307193717_1.jpg"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Reptile</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] text-gray-500 mt-1">@ItzReptile</h1>
            </div>
          </div>
          <button className="bg-white text-black text-sm w-20 rounded-3xl font-bold h-8">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

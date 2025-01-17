import { BoltIcon,  } from "@heroicons/react/24/solid";

export const Stats = ({ profile, gameData,isAuth, minutes, seconds }) => {
  return (
    <div className="text-white  rounded-md text-lg font-semibold">
      <div className="flex flex-row gap-2 justify-between">
        {isAuth && (
          <div className="flex items-center">
            <BoltIcon className="h-5 w-5 text-yellow-400" />
            <span className="text-lg text-gray-600">Score: {profile.score.toFixed(2)}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          {isAuth && <span className="text-lg text-gray-600">tries : {gameData.tries_left}/23</span>}
          <span className="text-lg opacity-80 text-gray-600">{minutes}:{seconds}</span>
        </div>
    
      </div>
    </div>
  );
};

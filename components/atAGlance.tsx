import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faIdBadge } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
    return (
      <div className="relative z-20">
        <hr className="my-8"/>
        <h2 className="text-3xl text-black mb-4 text-center">At a glance</h2>
        <div className="container mx-auto px-16 py-8 md:py-16 h-full flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-red-400 to-red-600 mb-2">
              <FontAwesomeIcon icon={faUser} size="3x" className="text-white" />
            </div>
            <h3 className="text-black font-bold text-xl">Age</h3>
            <p className="text-black mt-2">
                19 years old
            </p>
          </div>
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-red-400 to-red-600 mb-2">
              <FontAwesomeIcon icon={faBriefcase} size="3x" className="text-white" />
            </div>
            <h3 className="text-black font-bold text-xl">Occupation</h3>
            <p className="text-black mt-2">
                Actress, Idol, YouTuber
            </p>
          </div>
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-red-400 to-red-600 mb-2">
              <FontAwesomeIcon icon={faIdBadge} size="3x" className="text-white" />
            </div>
            <h3 className="text-black font-bold text-xl">Nickname</h3>
            <p className="text-black mt-2">
                Loli-Senpai
            </p>
          </div>
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-red-400 to-red-600 mb-2">
              <FontAwesomeIcon icon={faIdBadge} size="3x" className="text-white" />
            </div>
            <h3 className="text-black font-bold text-xl">Nickname</h3>
            <p className="text-black mt-2">
                Fast Soda-Licker
            </p>
          </div>
        </div>
        <hr className="my-8"/>
      </div>
    )
}

export default Info;
import React from 'react'
import { ServiceParagraph, Explorebutton, StartUpVisaParagrapgh } from './ReusableComponents'

export default function Services() {
  return (
    <div className="grid gap-5 md:grid-cols-1 lg:grid-cols-3 mt-8">
    <div className="group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-400 flex flex-col items-center">

      <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="32.5702" y="8" width="38" height="56" rx="4" transform="rotate(11.5987 32.5702 8)" fill="url(#paint0_linear_1_44)" fillOpacity="0.2" />
        <rect x="21.3109" y="15" width="38" height="56" rx="4" fill="url(#paint1_linear_1_44)" />
        <path d="M40.3109 25C38.5309 25 36.7909 25.5278 35.3108 26.5168C33.8308 27.5057 32.6772 28.9113 31.996 30.5558C31.3148 32.2004 31.1366 34.01 31.4839 35.7558C31.8311 37.5016 32.6883 39.1053 33.947 40.364C35.2057 41.6226 36.8093 42.4798 38.5551 42.8271C40.301 43.1743 42.1106 42.9961 43.7551 42.3149C45.3996 41.6337 46.8052 40.4802 47.7942 39.0001C48.7831 37.5201 49.3109 35.78 49.3109 34C49.3087 31.6137 48.3598 29.3258 46.6725 27.6385C44.9851 25.9511 42.6972 25.0022 40.3109 25ZM47.2359 33H44.6026C44.4618 31.0048 43.8041 29.0807 42.6943 27.4167C43.8849 27.8505 44.9359 28.5986 45.7355 29.5817C46.5352 30.5647 47.0536 31.746 47.2359 33ZM38.0276 35H42.5943C42.3943 37.0583 41.5776 38.975 40.3109 40.3833C39.0443 38.975 38.2276 37.0583 38.0276 35ZM38.0276 33C38.2276 30.9417 39.0443 29.025 40.3109 27.6167C41.5776 29.025 42.3943 30.9417 42.5943 33H38.0276ZM37.9276 27.4167C36.8178 29.0807 36.1601 31.0048 36.0193 33H33.3859C33.5682 31.746 34.0867 30.5647 34.8864 29.5817C35.686 28.5986 36.737 27.8505 37.9276 27.4167ZM33.3859 35H36.0193C36.1601 36.9952 36.8178 38.9193 37.9276 40.5833C36.736 40.1511 35.6841 39.4034 34.8842 38.4201C34.0844 37.4367 33.5665 36.2547 33.3859 35ZM42.6943 40.5833C43.8041 38.9193 44.4618 36.9952 44.6026 35H47.2359C47.0554 36.2547 46.5375 37.4367 45.7376 38.4201C44.9378 39.4034 43.8859 40.1511 42.6943 40.5833Z" fill="white" />
        <rect x="28.3109" y="52" width="24" height="3" rx="1.5" fill="white" />
        <rect x="28.3109" y="58" width="24" height="3" rx="1.5" fill="white" />
        <defs>
          <linearGradient id="paint0_linear_1_44" x1="51.5702" y1="8" x2="51.5702" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7354F8" />
            <stop offset="1" stopColor="#4D2FCB" />
          </linearGradient>
          <linearGradient id="paint1_linear_1_44" x1="40.3109" y1="15" x2="40.3109" y2="71" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7354F8" />
            <stop offset="1" stopColor="#4D2FCB" />
          </linearGradient>
        </defs>
      </svg>

      <h2 className="mt-6 text-xl font-semibold">
        Remote work visa{' '}
      </h2>
      <ServiceParagraph />
      <Explorebutton />
    </div>

    <div className="group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-400 flex flex-col items-center">

      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="32.2593" y="8" width="38" height="56" rx="4" transform="rotate(11.5987 32.2593 8)" fill="url(#paint0_linear_1_57)" fillOpacity="0.2" />
        <rect x="21" y="15" width="38" height="56" rx="4" fill="url(#paint1_linear_1_57)" />
        <path d="M40 25C38.22 25 36.4799 25.5278 34.9999 26.5168C33.5198 27.5057 32.3663 28.9113 31.6851 30.5558C31.0039 32.2004 30.8257 34.01 31.1729 35.7558C31.5202 37.5016 32.3774 39.1053 33.636 40.364C34.8947 41.6226 36.4984 42.4798 38.2442 42.8271C39.99 43.1743 41.7996 42.9961 43.4442 42.3149C45.0887 41.6337 46.4943 40.4802 47.4832 39.0001C48.4722 37.5201 49 35.78 49 34C48.9978 31.6137 48.0489 29.3258 46.3615 27.6385C44.6742 25.9511 42.3863 25.0022 40 25ZM46.925 33H44.2917C44.1508 31.0048 43.4932 29.0807 42.3833 27.4167C43.574 27.8505 44.6249 28.5986 45.4246 29.5817C46.2242 30.5647 46.7427 31.746 46.925 33ZM37.7167 35H42.2833C42.0833 37.0583 41.2667 38.975 40 40.3833C38.7333 38.975 37.9167 37.0583 37.7167 35ZM37.7167 33C37.9167 30.9417 38.7333 29.025 40 27.6167C41.2667 29.025 42.0833 30.9417 42.2833 33H37.7167ZM37.6167 27.4167C36.5068 29.0807 35.8492 31.0048 35.7083 33H33.075C33.2573 31.746 33.7758 30.5647 34.5754 29.5817C35.3751 28.5986 36.426 27.8505 37.6167 27.4167ZM33.075 35H35.7083C35.8492 36.9952 36.5068 38.9193 37.6167 40.5833C36.4251 40.1511 35.3732 39.4034 34.5733 38.4201C33.7734 37.4367 33.2556 36.2547 33.075 35ZM42.3833 40.5833C43.4932 38.9193 44.1508 36.9952 44.2917 35H46.925C46.7444 36.2547 46.2266 37.4367 45.4267 38.4201C44.6268 39.4034 43.5749 40.1511 42.3833 40.5833Z" fill="white" />
        <rect x="28" y="52" width="24" height="3" rx="1.5" fill="white" />
        <rect x="28" y="58" width="24" height="3" rx="1.5" fill="white" />
        <defs>
          <linearGradient id="paint0_linear_1_57" x1="51.2593" y1="8" x2="51.2593" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#54EEF8" />
            <stop offset="1" stopColor="#2FA6CB" />
          </linearGradient>
          <linearGradient id="paint1_linear_1_57" x1="40" y1="15" x2="40" y2="71" gradientUnits="userSpaceOnUse">
            <stop stopColor="#54EEF8" />
            <stop offset="1" stopColor="#2FA6CB" />
          </linearGradient>
        </defs>
      </svg>

      <h2 className={`mt-6 text-xl font-semibold`}>
        Startup visa{' '}
      </h2>
      <StartUpVisaParagrapgh />
      <Explorebutton />
    </div>

    <div className="group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-400 flex flex-col items-center">

      <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64.6665 44.6433L49.2246 17.8971C48.5897 16.7975 47.5263 15.985 46.2841 15.6522L29.8775 11.256C27.2994 10.5652 24.6247 12.1094 23.9339 14.6876L22.5127 19.9915C22.0524 21.7095 22.778 23.5324 24.2163 24.5787C29.6182 28.5083 42.055 39.0313 43.187 53.311C43.4733 56.9223 47.6859 60.0539 50.8231 58.2426L62.8892 51.2762C64.0122 50.6477 64.8247 49.5842 65.1576 48.342C65.4904 47.0998 65.3185 45.7726 64.6665 44.6433ZM30.2531 23.917C28.3078 23.3958 27.1582 21.4046 27.6795 19.4593C28.2007 17.514 30.1918 16.3644 32.1372 16.8856C34.0825 17.4069 35.2321 19.398 34.7108 21.3434C34.1896 23.2887 32.1985 24.4383 30.2531 23.917Z" fill="url(#paint0_linear_1_70)" fillOpacity="0.2" />
        <path d="M63.2266 44.471L41.6266 22.421C40.7386 21.5145 39.5146 21 38.2426 21H21.4426C18.8026 21 16.6426 23.205 16.6426 25.9V43.05C16.6426 44.3485 17.1466 45.598 18.0586 46.5045C18.636 47.0796 19.5271 47.1731 20.2631 46.8233C22.1197 45.9411 24.1652 45.5 26.2426 45.5C34.1866 45.5 40.6426 52.0905 40.6426 60.2C40.6426 62.3349 40.1885 64.4201 39.3069 66.3331C38.9677 67.0692 39.0674 67.951 39.6346 68.53C40.5226 69.461 41.7706 70 43.0426 70C44.3146 70 45.5386 69.4855 46.4266 68.5545L63.2266 51.4045C64.1386 50.498 64.6426 49.2485 64.6426 47.95C64.6426 46.6515 64.1386 45.402 63.2266 44.471ZM25.0426 33.25C23.0506 33.25 21.4426 31.6085 21.4426 29.575C21.4426 27.5415 23.0506 25.9 25.0426 25.9C27.0346 25.9 28.6426 27.5415 28.6426 29.575C28.6426 31.6085 27.0346 33.25 25.0426 33.25Z" fill="url(#paint1_linear_1_70)" />
        <path d="M23.0426 63L17.6426 57.5L23.0426 52L24.3251 53.3063L20.1851 57.5229L24.3026 61.7167L23.0426 63ZM30.2426 63L28.9601 61.6938L33.1001 57.4771L28.9826 53.2833L30.2426 52L35.6426 57.5L30.2426 63Z" fill="#F38538" />
        <defs>
          <linearGradient id="paint0_linear_1_70" x1="48.6278" y1="16.2802" x2="36.0675" y2="63.156" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F4903A" />
            <stop offset="1" stopColor="#F17834" />
          </linearGradient>
          <linearGradient id="paint1_linear_1_70" x1="40.6426" y1="21" x2="40.6426" y2="70" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F4903A" />
            <stop offset="1" stopColor="#F17834" />
          </linearGradient>
        </defs>
      </svg>

      <h2 className={`mt-6 text-xl font-semibold`}>
        Meta tags{' '}
      </h2>
      <ServiceParagraph />
      <Explorebutton />
    </div>

    <div className="group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-400 flex flex-col items-center">

      <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M59.9438 61.4375C59.0369 61.4375 58.3031 60.7037 58.3031 59.7969V54.7656H50.1C49.1932 54.7656 48.4594 54.0318 48.4594 53.125V46.4531C48.4594 45.5463 49.1932 44.8125 50.1 44.8125C51.0068 44.8125 51.7406 45.5463 51.7406 46.4531V51.4844H59.9438C60.8506 51.4844 61.5844 52.2182 61.5844 53.125V59.7969C61.5844 60.7037 60.8506 61.4375 59.9438 61.4375ZM22.2094 59.7969V54.7656H30.4125C31.3193 54.7656 32.0531 54.0318 32.0531 53.125V46.4531C32.0531 45.5463 31.3193 44.8125 30.4125 44.8125C29.5057 44.8125 28.7719 45.5463 28.7719 46.4531V51.4844H20.5688C19.6619 51.4844 18.9281 52.2182 18.9281 53.125V59.7969C18.9281 60.7037 19.6619 61.4375 20.5688 61.4375C21.4756 61.4375 22.2094 60.7037 22.2094 59.7969ZM41.8969 59.7969V46.4531C41.8969 45.5463 41.1631 44.8125 40.2563 44.8125C39.3494 44.8125 38.6156 45.5463 38.6156 46.4531V59.7969C38.6156 60.7037 39.3494 61.4375 40.2563 61.4375C41.1631 61.4375 41.8969 60.7037 41.8969 59.7969ZM50.1 30.0469C50.1 33.6646 47.1552 36.6094 43.5375 36.6094V39.8906C43.5375 41.7011 42.0667 43.1719 40.2563 43.1719C38.4458 43.1719 36.975 41.7011 36.975 39.8906C36.975 41.7011 35.5042 43.1719 33.6938 43.1719C31.8833 43.1719 30.4125 41.7011 30.4125 39.8906C30.4125 41.7011 28.9417 43.1719 27.1313 43.1719C25.3208 43.1719 23.85 41.7011 23.85 39.8906V30.0469C23.85 26.4292 26.7948 23.4844 30.4125 23.4844C34.0302 23.4844 36.975 26.4292 36.975 30.0469V26.7656C36.975 24.9551 38.4458 23.4844 40.2563 23.4844H43.5375C47.1552 23.4844 50.1 26.4292 50.1 30.0469ZM53.3813 43.1719C51.5708 43.1719 50.1 41.7011 50.1 39.8906V26.7656C50.1 24.9551 51.5708 23.4844 53.3813 23.4844C55.1917 23.4844 56.6625 24.9551 56.6625 26.7656V39.8906C56.6625 41.7011 55.1917 43.1719 53.3813 43.1719Z" fill="url(#paint0_linear_1_83)" />
        <path d="M45.1781 30.0469C45.1781 30.9505 44.4412 31.6875 43.5375 31.6875H41.8969V28.4062H43.5375C44.4412 28.4062 45.1781 29.1432 45.1781 30.0469ZM30.4125 28.4062C29.5089 28.4062 28.7719 29.1432 28.7719 30.0469V31.6875H32.0531V30.0469C32.0531 29.1432 31.3162 28.4062 30.4125 28.4062ZM68.2563 36.6094C68.2563 42.9412 62.9943 48.0938 56.6625 48.0938H23.85C17.5182 48.0938 12.3656 42.9412 12.3656 36.6094C12.3656 32.1682 14.9611 28.1563 18.9378 26.2721C19.1973 18.3574 25.7181 12 33.6938 12C37.8498 12 41.7142 13.7207 44.5084 16.7713C46.2259 15.794 48.1326 15.2812 50.1 15.2812C56.2651 15.2812 61.312 20.1679 61.5748 26.269C65.5514 28.1532 68.2563 32.1682 68.2563 36.6094ZM35.3344 30.0469C35.3344 27.3328 33.1265 25.125 30.4125 25.125C27.6985 25.125 25.4906 27.3328 25.4906 30.0469V39.8906C25.4906 40.7975 26.2244 41.5312 27.1313 41.5312C28.0381 41.5312 28.7719 40.7975 28.7719 39.8906V34.9688H32.0531V39.8906C32.0531 40.7975 32.7869 41.5312 33.6938 41.5312C34.6006 41.5312 35.3344 40.7975 35.3344 39.8906V30.0469ZM48.4594 30.0469C48.4594 27.3328 46.2515 25.125 43.5375 25.125H40.2563C39.3494 25.125 38.6156 25.8588 38.6156 26.7656V39.8906C38.6156 40.7975 39.3494 41.5312 40.2563 41.5312C41.1631 41.5312 41.8969 40.7975 41.8969 39.8906V34.9688H43.5375C46.2515 34.9688 48.4594 32.7609 48.4594 30.0469ZM55.0219 26.7656C55.0219 25.8588 54.2881 25.125 53.3813 25.125C52.4744 25.125 51.7406 25.8588 51.7406 26.7656V39.8906C51.7406 40.7975 52.4744 41.5312 53.3813 41.5312C54.2881 41.5312 55.0219 40.7975 55.0219 39.8906V26.7656ZM25.4906 63.0781C25.4906 60.3641 23.2828 58.1562 20.5688 58.1562C17.8547 58.1562 15.6469 60.3641 15.6469 63.0781C15.6469 65.7922 17.8547 68 20.5688 68C23.2828 68 25.4906 65.7922 25.4906 63.0781ZM45.1781 63.0781C45.1781 60.3641 42.9703 58.1562 40.2563 58.1562C37.5422 58.1562 35.3344 60.3641 35.3344 63.0781C35.3344 65.7922 37.5422 68 40.2563 68C42.9703 68 45.1781 65.7922 45.1781 63.0781ZM64.8656 63.0781C64.8656 60.3641 62.6578 58.1562 59.9438 58.1562C57.2297 58.1562 55.0219 60.3641 55.0219 63.0781C55.0219 65.7922 57.2297 68 59.9438 68C62.6578 68 64.8656 65.7922 64.8656 63.0781Z" fill="url(#paint1_linear_1_83)" />
        <path d="M69.3681 38.692C68.0516 44.8854 61.8334 48.8313 55.6399 47.5149L56.811 23C48.4978 21.233 23.2765 18.3267 23.2765 18.3267C25.1759 10.6389 32.8761 5.77617 40.6774 7.4344C44.7426 8.29849 48.1648 10.785 50.2637 14.3499C52.1469 13.7511 54.1185 13.6459 56.0429 14.055C62.0733 15.3368 65.994 21.166 64.9824 27.1883C68.4805 29.8582 70.2914 34.3478 69.3681 38.692Z" fill="url(#paint2_linear_1_83)" fillOpacity="0.2" />
        <defs>
          <linearGradient id="paint0_linear_1_83" x1="40.2563" y1="61.4375" x2="40.2563" y2="23.4844" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFBEF9" />
            <stop offset="1" stopColor="#FFF1FF" />
          </linearGradient>
          <linearGradient id="paint1_linear_1_83" x1="40.3109" y1="68" x2="40.3109" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A93AFF" />
            <stop offset="1" stopColor="#FF81FF" />
          </linearGradient>
          <linearGradient id="paint2_linear_1_83" x1="35.5067" y1="63.5867" x2="47.1498" y2="8.81041" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A93AFF" />
            <stop offset="1" stopColor="#FF81FF" />
          </linearGradient>
        </defs>
      </svg>

      <h2 className={`mt-6 text-xl font-semibold`}>
        Public api list{' '}
      </h2>
      <StartUpVisaParagrapgh />
      <Explorebutton />
    </div>

    <div className="group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-400 flex flex-col items-center">

      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M62 30.5C62 36.9891 58.659 42.6978 53.6034 46C54.5 42 55.5 32 40.5 19.5C30.2827 19.5 25 40.7173 25 30.5C25 20.2827 33.2827 12 43.5 12C53.7173 12 62 20.2827 62 30.5Z" fill="url(#paint0_linear_1_97)" fillOpacity="0.2" />
        <g clipPath="url(#clip0_1_97)">
          <path d="M39.9023 25.8164C37.4792 25.8164 35.5078 27.7878 35.5078 30.2109C35.5078 32.634 37.4792 34.6055 39.9023 34.6055C42.3254 34.6055 44.2969 32.634 44.2969 30.2109C44.2969 27.7878 42.3254 25.8164 39.9023 25.8164Z" fill="url(#paint1_linear_1_97)" />
          <path fillRule="evenodd" clipRule="evenodd" d="M20.8594 33.1406C20.8594 38.5243 23.115 43.3831 26.7188 46.8499V44.8594C26.7188 40.8211 30.0047 37.5352 34.043 37.5352H39.9023H45.7617C49.8 37.5352 53.0859 40.8211 53.0859 44.8594V46.8499C56.6897 43.3831 58.9453 38.5243 58.9453 33.1406C58.9453 22.6407 50.4023 14 39.9023 14C29.4024 14 20.8594 22.6407 20.8594 33.1406ZM39.9023 37.5352C35.8641 37.5352 32.5781 34.2492 32.5781 30.2109C32.5781 26.1727 35.8641 22.8867 39.9023 22.8867C43.9406 22.8867 47.2266 26.1727 47.2266 30.2109C47.2266 34.2492 43.9406 37.5352 39.9023 37.5352Z" fill="url(#paint2_linear_1_97)" />
          <path d="M50.4259 58.1406C51.0329 56.4393 52.6434 55.2109 54.5508 55.2109C56.4581 55.2109 58.0687 56.4393 58.6756 58.1406H64.9023V61.0703H58.6756C58.0687 62.7717 56.4581 64 54.5508 64C52.6434 64 51.0329 62.7717 50.4259 61.0703H44.0272C43.4203 62.7717 41.8097 64 39.9023 64C37.995 64 36.3844 62.7717 35.7775 61.0703H29.3787C28.7718 62.7717 27.1613 64 25.2539 64C23.3466 64 21.736 62.7717 21.1291 61.0703H15V58.1406H21.1291C21.736 56.4393 23.3466 55.2109 25.2539 55.2109C27.1613 55.2109 28.7718 56.4393 29.3787 58.1406H35.7775C36.2219 56.8947 37.2042 55.9163 38.452 55.4764L38.4417 52.076C35.2259 51.8258 32.2226 50.8149 29.6484 49.1616V44.8594C29.6484 42.4363 31.6199 40.4648 34.043 40.4648H45.7617C48.1848 40.4648 50.1562 42.4363 50.1562 44.8594V49.1616C47.5832 50.8141 44.5815 51.825 41.3672 52.0756V55.4806C42.6081 55.9235 43.5843 56.8997 44.0272 58.1406H50.4259Z" fill="url(#paint3_linear_1_97)" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_1_97" x1="43.5" y1="49" x2="43.5" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0AB35E" />
            <stop offset="1" stopColor="#2ADD3C" />
          </linearGradient>
          <linearGradient id="paint1_linear_1_97" x1="39.9512" y1="64" x2="39.9512" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0AB35E" />
            <stop offset="1" stopColor="#2ADD3C" />
          </linearGradient>
          <linearGradient id="paint2_linear_1_97" x1="39.9512" y1="64" x2="39.9512" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0AB35E" />
            <stop offset="1" stopColor="#2ADD3C" />
          </linearGradient>
          <linearGradient id="paint3_linear_1_97" x1="39.9512" y1="64" x2="39.9512" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0AB35E" />
            <stop offset="1" stopColor="#2ADD3C" />
          </linearGradient>
          <clipPath id="clip0_1_97">
            <rect width="50" height="50" fill="white" transform="translate(15 14)" />
          </clipPath>
        </defs>
      </svg>

      <h2 className={`mt-6 text-xl font-semibold`}>
        Affliate DB{' '}
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-center`}>
        1000+ affiliate programs worldwide to help the startups
      </p>
      <Explorebutton />
    </div>

    <div className="group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-400 flex flex-col items-center">

      <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M66.0935 19.1317L32.6191 12.0165C29.989 11.4574 27.3796 13.1519 26.8206 15.7821L25.7115 21C64.6891 21 58.6891 27 56.9454 62.1702C59.5755 62.7292 62.1848 61.0347 62.7439 58.4046L69.8591 24.9302C70.4181 22.3 68.7236 19.6907 66.0935 19.1317Z" fill="url(#paint0_linear_1_109)" fillOpacity="0.2" />
        <path d="M57.8002 19H23.578C20.8891 19 18.6891 21.2 18.6891 23.8889V58.1111C18.6891 60.8 20.8891 63 23.578 63H57.8002C60.4891 63 62.6891 60.8 62.6891 58.1111V23.8889C62.6891 21.2 60.4891 19 57.8002 19ZM43.1335 29.0222L45.8224 26.3333L49.2446 29.7556L52.6669 26.3333L55.3558 29.0222L51.9335 32.4444L55.3558 35.8667L52.6669 38.5556L49.2446 35.1333L45.8224 38.5556L43.1335 35.8667L46.5558 32.4444L43.1335 29.0222ZM26.5113 30.4889H38.7335V34.1556H26.5113V30.4889ZM39.4669 50.7778H34.578V55.6667H30.9113V50.7778H26.0224V47.1111H30.9113V42.2222H34.578V47.1111H39.4669V50.7778ZM55.3558 53.7111H43.1335V50.0444H55.3558V53.7111ZM55.3558 47.8444H43.1335V44.1778H55.3558V47.8444Z" fill="url(#paint1_linear_1_109)" />
        <defs>
          <linearGradient id="paint0_linear_1_109" x1="49.3563" y1="15.5741" x2="40.2082" y2="58.6126" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F85E5E" />
            <stop offset="1" stopColor="#DA247B" />
          </linearGradient>
          <linearGradient id="paint1_linear_1_109" x1="40.6891" y1="19" x2="40.6891" y2="63" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F85E5E" />
            <stop offset="1" stopColor="#DA247B" />
          </linearGradient>
        </defs>
      </svg>

      <h2 className={`mt-6 text-xl font-semibold`}>
        Calculators{' '}
      </h2>
      <ServiceParagraph />
      <Explorebutton />
    </div>
  </div>
  )
}

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { BsBellFill, BsFillQuestionCircleFill } from 'react-icons/bs';
// import component 👇
import Drawer from 'react-modern-drawer';

//import styles 👇
import 'react-modern-drawer/dist/index.css';
import Rightbar from '../../components/Rightbar/Rightbar';
import Sidebars from './Sidebar';
import { useProSidebar } from 'react-pro-sidebar';
import { FiChevronsRight } from 'react-icons/fi';
import SelectElement from '../../components/SelectElement';
import { useRouter } from 'next/router';
import DashboardRightbar from '@/components/Rightbar/DashboardRightbar';
import RentalRightbar from '@/components/Rightbar/RentalRightbar';

const avatars = [0, 1, 2, 3, 4, 5, 6];

const Navbar = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSetDropdownOpen, setIsSetDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { collapsed } = useProSidebar();

  const router = useRouter();
  let title = '';
  let subTitle = '';
  let miniDesc = '';
  switch (router.pathname) {
    case '/dashboard':
      title = 'Dashboard';
      subTitle =
        'Welcome back Józef 👋, Let’s get back to managing your properties.';
      break;
    case '/incidents':
      title = 'Incident';
      subTitle =
        'Welcome back Józef 👋, Let’s get back to managing your properties.';
      break;
    case '/property':
      title = 'Property';
      subTitle = 'Let’s get back to managing your property.';
      miniDesc = 'Information - Documents - Financials';
      break;
    case '/accounting/rentalDashboard':
      title = 'Rental Dashboard';
      subTitle = 'Let’s get back to managing your rentals.';
      break;
    case '/members':
      title = 'Members';
      subTitle = 'Let’s get back to managing your members.';
      miniDesc = 'Information - Documents - Financials';
      break;
    case '/memberProfile':
      title = 'Member Profile';
      subTitle = 'Let’s get back to managing your members.';
      break;
    case '/accounting/membersPayment':
      title = 'Member Payment';
      subTitle = 'Let’s get back to managing your members payment.';
      miniDesc = 'Accounting';
      break;
    case '/accounting/membersInvoice':
      title = 'Members Invoice';
      subTitle = 'Let’s get back to invoicing your members.';
      miniDesc = 'Private Accounting';
      break;
    case '/accounting/pInvoice':
      title = 'Invoice Creation';
      subTitle = 'Let’s get back to invoicing your members.';
      miniDesc = 'Accounting - Common Property Charge';
      break;
    case '/tasks':
      title = 'Tasks & Maintenance';
      subTitle = 'View upcoming tasks and maintenance';
      break;
    case '/news':
      title = 'News';
      subTitle =
        'Welcome back Józef 👋, Let’s get back to managing your properties.';
      break;

    default:
      title = 'Dashboard';
      subTitle =
        'Welcome back Józef 👋, Let’s get back to managing your properties.';
      break;
  }

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    setShowDropdown(false);
  };

  const toggleDrawer = (sidebar) => {
    sidebar
      ? setIsSidebarOpen((prevState) => !prevState)
      : setIsOpen((prevState) => !prevState);
  };

  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    const handleClickOutside2 = (event) => {
      if (
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target)
      ) {
        setIsSetDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('click', handleClickOutside2);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('click', handleClickOutside2);
    };
  }, [dropdownRef, dropdownRef2]);

  const handleDropdownClick = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleSetDropdownClick = (e) => {
    e.preventDefault();
    setIsSetDropdownOpen(!isSetDropdownOpen);
  };

  return (
    <>
      <div className="md:hidden">
        <button
          className="bg-gray-200 w-9 h-9 absolute top-3 -left-2 rounded hover:bg-blue-500 hover:text-white"
          onClick={() => toggleDrawer('sidebar')}
        >
          <FiChevronsRight className="mx-auto" />
        </button>
        <Drawer
          open={isSidebarOpen}
          onClose={() => toggleDrawer('sidebar')}
          direction="left"
          size={collapsed ? 80 : 270}
          lockBackgroundScroll={true}
        >
          <Sidebars mobile={true} />
        </Drawer>
      </div>
      <div className="md:flex justify-between items-center gap-3 py-2 pr-8 pl-8 md:pl-4 bg-white">
        {/* <div>
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="text-slate-400 text-sm">
            Welcome back Józef 👋, Let’s get back to managing your properties.
          </p>
        </div> */}
        <div>
          <h2 className="text-2xl font-bold">
            {title}
            <span className="text-xs text-slate-500 ml-2">
              {miniDesc && miniDesc}
            </span>
          </h2>
          <p className="text-slate-400 text-sm">{subTitle}</p>
        </div>

        <div className="flex items-center justify-center gap-6 mt-3 md:mt-0 text-xl">
          <div className="relative" ref={dropdownRef}>
            <Link href="" onClick={handleDropdownClick}>
              <BsBellFill className="text-gray-400" />
              <div className="w-2 h-2 rounded-full bg-red-500 absolute top-0 right-0"></div>
            </Link>
            {isDropdownOpen && (
              <div className="bg-white w-60 absolute top-12 z-20 p-4 rounded-lg shadow-lg -translate-x-1/2">
                <h3 className="font-bold text-base">Notifications</h3>
                <hr className="border mt-2" />
                {dropdown.map((item, i) => (
                  <div className="flex items-center my-3 gap-3" key={i}>
                    <Image
                      src={item.image}
                      width={32}
                      height={32}
                      alt="incidents"
                    />
                    <Link
                      href="/incidents"
                      className="text-base text-slate-500 hover:text-blue-700 "
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative" ref={dropdownRef2}>
            <Link href="" onClick={handleSetDropdownClick}>
              <Image
                src="/images/setting.svg"
                width={24}
                height={24}
                style={{ minWidth: '20px' }}
              />
            </Link>
            {isSetDropdownOpen && (
              <div className="bg-white w-72 absolute top-12 z-20 p-4 rounded-lg drop-shadow-lg -translate-x-1/2">
                <h3 className="font-bold text-base">Settings</h3>
                <hr className="border mt-2" />
                {settingDropdown.map((item, i) => (
                  <div className="flex items-center my-3 gap-3" key={i}>
                    <Image
                      src={item.image}
                      width={24}
                      height={24}
                      alt="incidents"
                    />
                    <Link
                      href="/incidents"
                      className="text-sm text-slate-500 hover:text-blue-700 "
                      onClick={() => setIsSetDropdownOpen(!isSetDropdownOpen)}
                    >
                      {item.title}
                    </Link>
                    <p
                      className={`${
                        item.type && 'bg-blue-500'
                      } text-sm  text-white rounded ml-auto px-2 py-1`}
                    >
                      {item.type && item.type}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link href="" className="flex items-center gap-2">
            <BsFillQuestionCircleFill className="text-gray-400" />
            <p className="text-slate-500 text-base">Help</p>
          </Link>
          <div className="relative">
            <Link href="">
              <Image
                src={`/images/avatar/avatar-${selectedAvatar}.svg`}
                width={36}
                height={36}
                style={{ minWidth: '28px' }}
                onClick={() => setShowDropdown(!showDropdown)}
                alt="avatar"
              />
            </Link>
            <div>
              {showDropdown && (
                <SelectElement
                  avatars={avatars}
                  handleAvatarSelect={handleAvatarSelect}
                  selectedAvatar={selectedAvatar}
                />
              )}
            </div>
          </div>
          <div className="xl:hidden">
            <button onClick={() => toggleDrawer()}>
              <FaBars />
            </button>
            <Drawer
              open={isOpen}
              onClose={() => toggleDrawer()}
              direction="right"
              size={350}
              lockBackgroundScroll={true}
              className="overflow-y-auto p-4"
            >
              {router.pathname === '/' && <DashboardRightbar mobile={true} />}
              {router.pathname === '/dashboard' && (
                <DashboardRightbar mobile={true} />
              )}
              {router.pathname === '/accounting/rentalDashboard' && (
                <RentalRightbar mobile={true} />
              )}
              {/* <DashboardRightbar mobile={true} />
              <RentalRightbar mobile={true} /> */}
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const dropdown = [
  {
    id: 1,
    image: '/images/incidents.svg',
    title: '1 New Incident',
  },
  {
    id: 1,
    image: '/images/chat.svg',
    title: '1 New Message',
  },
  {
    id: 1,
    image: '/images/task.svg',
    title: '1 New Task Pending',
  },
];
const settingDropdown = [
  {
    id: 1,
    image: '/images/plan.svg',
    title: 'My Account Plan',
    type: 'FREE',
  },
  {
    id: 1,
    image: '/images/access.svg',
    title: 'Control Access',
  },
  {
    id: 1,
    image: '/images/changePass.svg',
    title: 'Change Password',
  },
  {
    id: 1,
    image: '/images/premium.svg',
    title: 'Go Premium',
  },
  {
    id: 1,
    image: '/images/customer-care.svg',
    title: 'Contact Support',
  },
];

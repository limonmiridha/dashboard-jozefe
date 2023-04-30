import React, { useEffect, useState } from 'react';

import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi/';
import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem,
  useProSidebar,

  //useProSidebar
} from 'react-pro-sidebar';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';

import Rocket from '../../../public/images/rocket.svg';
import Link from 'next/link';

const menuItemStyles = {
  root: {
    fontSize: '16px',
    fontWeight: 400,
    color: '#82858E',
    margin: '0 auto',
  },
  icon: {
    color: '#8A8E97',
  },
  SubMenuExpandIcon: {
    color: '#8A8E97',
  },
  subMenuContent: {},
  button: {
    color: '#000',

    '&:hover': {
      backgroundColor: '#017EFB !important',
      borderRadius: '10px',
      color: '#fff',
    },
  },
};
const subMenuItemStyles = {
  button: {
    color: '#000',

    '&:hover': {
      backgroundColor: '#017EFB !important',
      opacity: '.65',
      borderRadius: '10px',
      color: '#fff',
    },
  },
};

function Sidebars({ mobile }) {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken } =
    useProSidebar();

  const [width, setWidth] = useState('');
  // const handleSelected = (e, menu) => {
  //   e.stopPropagation();
  //   setSelectedMenu(menu);
  // };

  const getSize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', getSize);
    if (width < 992) {
      collapseSidebar();
    }
    return () => {
      window.removeEventListener('resize', getSize);
    };
  }, [width]);

  // const [toggled, setToggled] = useState(false);

  // const handleCollapsedChange = () => {
  //   setCollapsed(!collapsed);
  // };
  // const handleToggleSidebar = (value) => {
  //   setToggled(value);
  // };

  return (
    <div className="sidebar relative h-screen overflow-y-auto">
      {/* h-screen overflow-y-scroll  */}
      <Sidebar selectedMenu={selectedMenu}>
        <main>
          <Menu className="bg-white">
            {collapsed ? (
              <MenuItem
                icon={<FiChevronsRight />}
                onClick={() => collapseSidebar()}
              ></MenuItem>
            ) : (
              <MenuItem
                suffix={<FiChevronsLeft />}
                onClick={() => collapseSidebar()}
              >
                <div>
                  <Image
                    src={logo}
                    width={160}
                    height={22}
                    style={{ objectFit: 'cover' }}
                    alt="Logo"
                  />
                </div>
              </MenuItem>
            )}
          </Menu>

          <Menu menuItemStyles={menuItemStyles}>
            <div
              className={`bg-white px-3 pt-2 ${collapsed ? 'mb-0' : 'mb-12'}`}
            >
              {sidebarMenu.map((menu, i) => (
                <MenuItem
                  component={<Link href={menu.link} />}
                  onClick={() => setSelectedMenu(menu.link)}
                  className={`menuItem ${
                    selectedMenu === menu.link ? 'selected' : ''
                  }`}
                >
                  <div className="flex items-center gap-3 ">
                    <Image
                      src={menu.icon}
                      width={18}
                      height={18}
                      className="normal-icon"
                      alt="dashboard"
                    />
                    <Image
                      src={menu.hoverIcon}
                      width={18}
                      height={18}
                      className="hover-icon hidden"
                      alt="dashboard"
                    />
                    <p>{menu.title}</p>
                  </div>
                </MenuItem>
              ))}
              {/* <MenuItem
                component={<Link href="/dashboard" />}
                onClick={() => setSelectedMenu('dashboard')}
                className={`menuItem ${
                  selectedMenu === 'dashboard' ? 'selected' : ''
                }`}
              >
                <div className="flex items-center gap-3 ">
                  <Image
                    src="/images/sidebar/dashboard.svg"
                    width={18}
                    height={18}
                    className="normal-icon"
                    alt="dashboard"
                  />
                  <Image
                    src="/images/sidebar/dashboard-H.svg"
                    width={18}
                    height={18}
                    className="hover-icon hidden"
                    alt="dashboard"
                  />
                  <p>Dashboard</p>
                </div>
              </MenuItem>
              <MenuItem
                component={<Link href="/property" />}
                onClick={() => setSelectedMenu('property')}
                className={`menuItem ${
                  selectedMenu === 'property' ? 'selected' : ''
                }`}
              >
                <div className="flex items-center gap-3 ">
                  <Image
                    src="/images/sidebar/building.png"
                    width={20}
                    height={20}
                    className="normal-icon"
                    alt="dashboard"
                  />
                  <Image
                    src="/images/sidebar/property-H.svg"
                    width={16}
                    height={16}
                    className="hover-icon hidden"
                    alt="dashboard"
                  />
                  <p>Property</p>
                </div>
              </MenuItem> */}
              <MenuItem
                component={<Link href="/members" />}
                onClick={() => setSelectedMenu('members')}
                className={`menuItem ${
                  selectedMenu === 'members' ? 'selected' : ''
                }`}
              >
                <div className="flex items-center gap-3 ">
                  <Image
                    src="/images/sidebar/member.svg"
                    width={16}
                    height={16}
                    className="normal-icon"
                    alt="dashboard"
                  />
                  <Image
                    src="/images/sidebar/member-H.svg"
                    width={16}
                    height={16}
                    className="hover-icon hidden"
                    alt="dashboard"
                  />
                  <p>Members</p>
                </div>
              </MenuItem>

              <SubMenu
                // defaultOpen

                icon={
                  <div className="flex items-center -ml-4">
                    <Image
                      src="/images/sidebar/accounting.svg"
                      width={16}
                      height={16}
                      className="normal-icons"
                      alt="dashboard"
                    />
                    <Image
                      src="/images/sidebar/accounting-H.svg"
                      width={16}
                      height={16}
                      className="hover-icons hidden"
                      alt="dashboard"
                    />
                  </div>
                }
                title="Accounting"
                label="Accounting"
                selected={selectedMenu === 'accounting'}
                className={`subMenuItem ${
                  selectedMenu === 'accounting' ? 'selected' : ''
                }`}

                // onMouseEnter={handleSubmenuClick}
              >
                <Menu menuItemStyles={subMenuItemStyles} className="px-4">
                  {sidebarSubMenu.map((item, i) => (
                    <MenuItem
                      component={<Link href={item.link} />}
                      key={i}
                      onClick={() => setSelectedMenu(item.title)}
                      className={`menuItem ${
                        selectedMenu === item.title ? 'selected' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3 ">
                        <Image
                          src={item.icon}
                          width={16}
                          height={16}
                          className="normal-icon"
                          alt="dashboard"
                        />
                        <Image
                          src={item.hoverIcon}
                          width={16}
                          height={16}
                          className="hover-icon hidden"
                          alt="dashboard"
                        />
                        <p>{item.title}</p>
                      </div>
                    </MenuItem>
                  ))}
                </Menu>
              </SubMenu>
              <MenuItem
                component={<Link href="/property" />}
                onClick={() => setSelectedMenu('document')}
                className={`menuItem ${
                  selectedMenu === 'document' ? 'selected' : ''
                }`}
              >
                <div className="flex items-center gap-3 ">
                  <Image
                    src="/images/sidebar/document.svg"
                    width={16}
                    height={16}
                    className="normal-icon"
                    alt="dashboard"
                  />
                  <Image
                    src="/images/sidebar/document-H.svg"
                    width={16}
                    height={16}
                    className="hover-icon hidden"
                    alt="dashboard"
                  />
                  <p>Document</p>
                </div>
              </MenuItem>
              <MenuItem
                component={<Link href="/incidents" />}
                suffix={!collapsed && <Zero />}
                onClick={() => setSelectedMenu('Incidents')}
                className={`menuItem ${
                  selectedMenu === 'Incidents' ? 'selected' : ''
                }`}
              >
                <div className="flex items-center gap-3 ">
                  <Image
                    src="/images/sidebar/incidents.svg"
                    width={16}
                    height={16}
                    className="normal-icon"
                    alt="dashboard"
                  />
                  <Image
                    src="/images/sidebar/incidents-H.svg"
                    width={16}
                    height={16}
                    className="hover-icon hidden"
                    alt="dashboard"
                  />
                  <p>Incidents</p>
                </div>
              </MenuItem>
              <MenuItem
                component={<Link href="/interfaces/property" />}
                suffix={!collapsed && <Zero />}
                onClick={() => setSelectedMenu('Messages')}
                className={`menuItem ${
                  selectedMenu === 'Messages' ? 'selected' : ''
                }`}
              >
                <div className="flex items-center gap-3 ">
                  <Image
                    src="/images/sidebar/messages.svg"
                    width={16}
                    height={16}
                    className="normal-icon"
                    alt="dashboard"
                  />
                  <Image
                    src="/images/sidebar/messages-H.svg"
                    width={16}
                    height={16}
                    className="hover-icon hidden"
                    alt="dashboard"
                  />
                  <p>Messages</p>
                </div>
              </MenuItem>
              <MenuItem
                component={<Link href="/interfaces/property" />}
                onClick={() => setSelectedMenu('Agenda')}
                className={`menuItem ${
                  selectedMenu === 'Agenda' ? 'selected' : ''
                }`}
              >
                <div className="flex items-center gap-3 ">
                  <Image
                    src="/images/sidebar/agenda.svg"
                    width={16}
                    height={16}
                    className="normal-icon"
                    alt="dashboard"
                  />
                  <Image
                    src="/images/sidebar/agenda-H.svg"
                    width={16}
                    height={16}
                    className="hover-icon hidden"
                    alt="dashboard"
                  />
                  <p>Agenda</p>
                </div>
              </MenuItem>
              <MenuItem
                component={<Link href="/interfaces/property" />}
                onClick={() => setSelectedMenu('Meetings')}
                className={`menuItem ${
                  selectedMenu === 'Meetings' ? 'selected' : ''
                }`}
              >
                <div className="flex items-center gap-3 ">
                  <Image
                    src="/images/sidebar/meeting.svg"
                    width={16}
                    height={16}
                    className="normal-icon"
                    alt="dashboard"
                  />
                  <Image
                    src="/images/sidebar/meeting-H.svg"
                    width={16}
                    height={16}
                    className="hover-icon hidden"
                    alt="dashboard"
                  />
                  <p>Meetings</p>
                </div>
              </MenuItem>
              <MenuItem
                component={<Link href="/tasks" />}
                onClick={() => setSelectedMenu('Tasks')}
                className={`menuItem ${
                  selectedMenu === 'Tasks' ? 'selected' : ''
                }`}
              >
                <div className="flex items-center gap-3 ">
                  <Image
                    src="/images/sidebar/task.svg"
                    width={16}
                    height={16}
                    className="normal-icon"
                    alt="dashboard"
                  />
                  <Image
                    src="/images/sidebar/task-H.svg"
                    width={16}
                    height={16}
                    className="hover-icon hidden"
                    alt="dashboard"
                  />
                  <p>Tasks</p>
                </div>
              </MenuItem>
              <MenuItem
                component={<Link href="/news" />}
                onClick={() => setSelectedMenu('News')}
                className={`menuItem ${
                  selectedMenu === 'News' ? 'selected' : ''
                }`}
              >
                <div className="flex items-center gap-3 ">
                  <Image
                    src="/images/sidebar/news.svg"
                    width={16}
                    height={16}
                    className="normal-icon"
                    alt="dashboard"
                  />
                  <Image
                    src="/images/sidebar/news-H.svg"
                    width={16}
                    height={16}
                    className="hover-icon hidden"
                    alt="dashboard"
                  />

                  <p>News</p>
                </div>
              </MenuItem>

              {/* <MenuItem icon={<RiNewspaperLine />}>News</MenuItem> */}
              <div className="px-1 py-6">{!collapsed && <Card />}</div>

              {/* <MenuItem icon={<AiOutlineLogout />}>Logout</MenuItem> */}
            </div>
          </Menu>
          <Menu
            className={`${
              collapsed ? 'w-[70px]' : 'w-[270px] px-3'
            } bg-white fixed left-1 bottom-0`}
            menuItemStyles={menuItemStyles}
          >
            <MenuItem
              component={<Link href="/interfaces/property" />}
              onClick={() => setSelectedMenu('Logout')}
              className={`menuItem ${
                selectedMenu === 'Logout' ? 'selected' : ''
              }`}
            >
              <div className="flex items-center gap-3 ">
                <Image
                  src="/images/sidebar/logout.svg"
                  width={collapsed ? 32 : 16}
                  height={collapsed ? 32 : 16}
                  className="normal-icon"
                  alt="dashboard"
                />
                <Image
                  src="/images/sidebar/logout.svg"
                  width={collapsed ? 32 : 16}
                  height={collapsed ? 32 : 16}
                  className="hover-icon hidden"
                  alt="dashboard"
                />

                <p>{collapsed ? '' : 'Logout'}</p>
              </div>
            </MenuItem>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}
export default Sidebars;

const sidebarMenu = [
  {
    id: 1,
    link: '/dashboard',
    icon: '/images/sidebar/dashboard.svg',
    hoverIcon: '/images/sidebar/dashboard-H.svg',
    title: 'Dashboard',
  },
  {
    id: 2,
    link: '/property',
    icon: '/images/sidebar/building.png',
    hoverIcon: '/images/sidebar/property-H.svg',
    title: 'Property',
  },
];
const sidebarSubMenu = [
  {
    id: 1,
    link: '/interfaces/property',
    icon: '/images/sidebar/GAcounting.svg',
    hoverIcon: '/images/sidebar/GAcounting-H.svg',
    title: 'General Accounting',
  },
  {
    id: 2,
    link: '/accounting/rentalDashboard',
    icon: '/images/sidebar/rental.svg',
    hoverIcon: '/images/sidebar/rental-H.svg',
    title: 'Rental Dashboard',
  },
  {
    id: 3,
    link: '/accounting/membersPayment',
    icon: '/images/sidebar/payment.svg',
    hoverIcon: '/images/sidebar/payment-H.svg',
    title: 'Members Payment',
  },
  {
    id: 4,
    link: '/accounting/membersInvoice',
    icon: '/images/sidebar/invoice.svg',
    hoverIcon: '/images/sidebar/invoice-H.svg',
    title: 'Members Invoice',
  },
  {
    id: 5,
    link: '/accounting/pInvoice',
    icon: '/images/sidebar/Pinvoice.svg',
    hoverIcon: '/images/sidebar/Pinvoice-H.svg',
    title: 'Property Invoice',
  },
  {
    id: 6,
    link: '/interfaces/property',
    icon: '/images/sidebar/suppliers.svg',
    hoverIcon: '/images/sidebar/suppliers-H.svg',
    title: 'Suppliers',
  },
  {
    id: 7,
    link: '/interfaces/property',
    icon: '/images/sidebar/contact.svg',
    hoverIcon: '/images/sidebar/contact-H.svg',
    title: 'Contracts',
  },
  {
    id: 8,
    link: '/interfaces/property',
    icon: '/images/sidebar/cashflow.svg',
    hoverIcon: '/images/sidebar/cashflow-H.svg',
    title: 'Tresory Cashflow',
  },
  {
    id: 9,
    link: '/interfaces/property',
    icon: '/images/sidebar/fund.svg',
    hoverIcon: '/images/sidebar/fund-H.svg',
    title: 'Fundraising',
  },
  {
    id: 10,
    link: '/interfaces/property',
    icon: '/images/sidebar/debit.svg',
    hoverIcon: '/images/sidebar/debit-H.svg',
    title: 'Debit',
  },
  {
    id: 11,
    link: '/interfaces/property',
    icon: '/images/sidebar/credit.svg',
    hoverIcon: '/images/sidebar/credit-H.svg',
    title: 'Credit',
  },
];

export const Zero = () => {
  return (
    <div className="rounded-full bg-[#017EFB]  w-5 h-5 p-2 text-sm text-center text-white m-auto flex justify-center items-center">
      0
    </div>
  );
};

export const Card = () => {
  return (
    <div className=" rounded-xl bg-[#F3F9FF] py-3 flex flex-col justify-center items-center text-center mt-[50px] ">
      <Image
        src={Rocket}
        width={96}
        height={96}
        className="-mt-[60px] bg-white rounded-full p-2 w-24 h-24 border-4 "
        alt="Card Image"
      />

      <h4 className=" text-[#000000] text-lg font-semibold">Go Premium</h4>
      <p className=" text-[#5B5D63] text-sm mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button className=" text-white bg-[#017EFB] rounded-lg px-5 py-2">
        Update Now
      </button>
    </div>
  );
};

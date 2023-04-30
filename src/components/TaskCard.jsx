import React, { useState } from 'react';
import Card from './GlobalCard';
import Image from 'next/image';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Popover } from 'react-tiny-popover';

const TaskCard = ({ desc }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <div>
      <Card>
        <div className="py-2 xs:p-4">
          <div className="justify-betweens text-sm gap-1 xs:gap-4">
            <div className="flex gap-1 xs:gap-3 text-xs lg:text-base">
              <span className="flex gap-3 px-2 py-1 rounded-full text-white bg-[#808BC5]">
                <Image
                  src="/images/tasks/setting-2.svg"
                  width={16}
                  height={16}
                  alt="property"
                />
                Maintenance
              </span>
              <span className="bg-[#FD717A] px-2 py-1 rounded-full text-white">
                Priority: High
              </span>
            </div>
            <div className="flex gap-4">
              <Image
                src="/images/tasks/4Dots.svg"
                width={16}
                height={16}
                alt="property"
              />
              <Popover
                isOpen={isPopoverOpen}
                positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
                content={<div>Hi! I'm popover content.</div>}
              >
                <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                  <BsThreeDotsVertical className="text-xl" />
                </div>
              </Popover>
            </div>
          </div>
          <div className="py-3 border-b">
            <h3 className="text-lg font-bold">Control Fire</h3>
            {desc && (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                laboriosam unde iusto dolor! Perspiciatis, debitis harum impedit
                iure libero consequuntur enim cupiditate numquam quod
                blanditiis.
              </p>
            )}

            <Image
              src="/images/tasks/fire.svg"
              width={80}
              height={36}
              className="ml-auto"
              alt="property"
            />
          </div>
          <div className="justify-betweens mt-3">
            <div className="flexs gap-3">
              <Image
                src="/images/tasks/calendar.svg"
                width={30}
                height={30}
                className=""
                alt="property"
              />
              <p>March 10, 2023</p>
            </div>
            <Image
              src="/images/tasks/blueArrow.svg"
              width={40}
              height={30}
              className=""
              alt="property"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TaskCard;

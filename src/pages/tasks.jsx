import Button from '@/components/Button';
import Card from '@/components/GlobalCard';
import TaskCard from '@/components/TaskCard';
import TaskModal from '@/components/modal/TaskModal';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const tasks = () => {
  const [showModal, setShowModal] = useState(false);
  const [viewChange, setViewChange] = useState('table');

  function handleCloseModal() {
    setShowModal(false);
  }
  function handleViewChange(buttonId) {
    setViewChange(buttonId);
  }

  return (
    <>
      <div className="flex items-center justify-between gap-5 w-5/6 pb-3 border-b">
        <div className="flex gap-3">
          <div
            className={`${
              viewChange == 'table' && 'bg-blue-100 '
            } px-3 py-1 rounded`}
          >
            <Button onClick={() => handleViewChange('table')}>
              <Image
                src="/images/tasks/table-view.svg"
                width={20}
                height={20}
                alt="property"
              />
              Table
            </Button>
          </div>
          <div
            className={`${
              viewChange == 'list' && 'bg-blue-100 '
            } px-3 py-1 rounded`}
          >
            <Button onClick={() => handleViewChange('list')}>
              <Image
                src="/images/tasks/list-view.svg"
                width={20}
                height={20}
                alt="property"
              />
              List View
            </Button>
          </div>
        </div>
        <Button>
          <Image
            src="/images/tasks/filter.svg"
            width={20}
            height={20}
            alt="property"
          />
          Filter
        </Button>
      </div>
      {viewChange === 'table' ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 my-4">
          {/* New Tasks */}
          <div>
            <div className="justify-betweens">
              <div>
                <span className="w-4 h-4 bg-[#FD717A] rounded-full"></span>
                <p>
                  New Tasks <span className="text-[#FD717A]">(6)</span>{' '}
                </p>
              </div>
              <BsThreeDotsVertical />
            </div>
            <Link href="" onClick={() => setShowModal(true)}>
              <Card hover={true} cls="text-center">
                +
              </Card>
            </Link>
            <TaskModal isOpen={showModal} onClose={handleCloseModal} />
            <TaskCard desc />
            <TaskCard />
            <TaskCard />
          </div>
          {/* In Progress Tasks */}
          <div>
            <div className="justify-betweens">
              <div>
                <span className="w-4 h-4 bg-[#FD717A] rounded-full"></span>
                <p>
                  New Tasks <span className="text-[#FD717A]">(6)</span>{' '}
                </p>
              </div>
              <BsThreeDotsVertical />
            </div>
            <div>
              <Link href="" onClick={() => setShowModal(true)}>
                <Card hover={true} cls="text-center">
                  + Add Task
                </Card>
              </Link>
            </div>
            <TaskCard desc />
            <TaskCard />
            <TaskCard />
          </div>
          {/* Complete Tasks */}
          <div>
            <div className="justify-betweens">
              <div>
                <span className="w-4 h-4 bg-[#FD717A] rounded-full"></span>
                <p>
                  New Tasks <span className="text-[#FD717A]">(6)</span>{' '}
                </p>
              </div>
              <BsThreeDotsVertical />
            </div>
            <div>
              <Link href="" onClick={() => setShowModal(true)}>
                <Card hover={true} cls="text-center">
                  +
                </Card>
              </Link>
            </div>
            <TaskCard desc />
            <TaskCard />
            <TaskCard />
          </div>
        </div>
      ) : (
        <div>List view</div>
      )}
    </>
  );
};

export default tasks;

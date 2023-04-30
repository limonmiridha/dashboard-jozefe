import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NewsDetailModal from './modal/NewsDetailModal';
// import NewsDetailModal from './modal/newsDetailModal';

const TableActionIcon = () => {
  // Modal
  const [showModal, setShowModal] = useState(false);

  function handleCloseModal() {
    setShowModal(false);
  }
  return (
    <div>
      <div className="flexs gap-3">
        <Link href="" onClick={() => setShowModal(true)}>
          <Image src="/images/news/eye.svg" width={20} height={20} alt="" />
        </Link>
        <Link href="">
          <Image src="/images/news/pen.svg" width={20} height={20} alt="" />
        </Link>
        <Link href="">
          <Image src="/images/news/delete.svg" width={20} height={20} alt="" />
        </Link>
        <Link href="">
          <Image src="/images/news/message.svg" width={20} height={20} alt="" />
        </Link>
      </div>
      <NewsDetailModal isOpen={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default TableActionIcon;

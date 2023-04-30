import React from 'react';
import Image from 'next/image';
import ReactModal from 'react-modal';

const NewsDetailModal = (props) => {
  const { isOpen, onClose } = props;
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      className=""
    >
      <div className="justify-betweens mb-3">
        <div className="flexs gap-3">
          <Image
            src="/images/news/modalNews.svg"
            width={34}
            height={34}
            alt=""
          />
          <h2 className="text-xl font-bold">News Subject</h2>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <Image src="/images/closeBtn.svg" width={14} height={14} alt="" />
        </button>
      </div>
      <div className="mt-4">
        <p className="text-sm leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
          veritatis! Non quibusdam cum nam autem mollitia natus modi quaerat
          molestiae animi atque similique, nemo nisi sunt tenetur numquam magni
          totam voluptate? Fugit, modi eveniet nihil quisquam magni accusamus.
          Quam cum maiores ducimus nemo. Corrupti quae id voluptates distinctio
          blanditiis fugit iste quia nobis sapiente temporibus. <br />
          <br />
          Quam cum maiores ducimus nemo. Corrupti quae id voluptates distinctio
          blanditiis fugit iste quia nobis sapiente temporibus.Quam cum maiores
          ducimus nemo. Corrupti quae id voluptates distinctio blanditiis fugit
          iste quia nobis sapiente temporibus.
        </p>
      </div>
    </ReactModal>
  );
};

export default NewsDetailModal;

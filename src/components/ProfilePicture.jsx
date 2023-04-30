import React, { useRef, useState } from 'react';
import Profile from '../../public/images/property/up-pic.svg';
import Image from 'next/image';

const ProfilePicture = () => {
  const [previewImage, setPreviewImage] = useState(Profile);
  const fileInputRef = useRef(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setPreviewImage(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleRemoveImage = () => {
    setPreviewImage(Profile);
  };
  return (
    <div>
      <div className="xl:grid sm:flex  sm:flex-row xl:grid-cols-2 items-center gap-10 xl:gap-4">
        <div className="relative w-[235px] h-[235px] flex justify-center items-center bg-[#fafafa] rounded-lg">
          <Image
            src={previewImage}
            // width={87}
            // height={87}
            className="p-4 rounded-[1.5rem] object-cover"
            fill
            alt="profile"
          />
        </div>
        <div>
          <div className="flex items-center gap-3 my-3 sm:block">
            {/* <GlobalButton
                    text=""
                    cls=" "
                  /> */}
            <button
              onClick={handleButtonClick}
              className="bg-[#017efb] border border-[#017efb] py-2 px-6 rounded-lg text-white text-sm"
            >
              Change Photo
            </button>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              style={{ display: 'none' }}
            />

            <button
              onClick={handleRemoveImage}
              className="flex items-center justify-center gap-2 text-sm sm:mt-2 bg-white rounded-lg py-2 px-8 border border-[#707070] text-black"
            >
              <Image
                src="/images/property/delate.svg"
                width={14}
                height={14}
                alt="delate"
              />{' '}
              Remove
            </button>
          </div>

          <p className="text-[16px] my-3">or choose picture</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((x) => (
              <Image
                src={`/images/property/${x}.svg`}
                onClick={() => setPreviewImage(`/images/property/${x}.svg`)}
                width={45}
                height={45}
                key={x}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;

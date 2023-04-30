import Card from '@/components/GlobalCard';
import Image from 'next/image';
import React, { useContext } from 'react';
import { InputImg } from './property';
import TextEditor from '@/components/TextEditor';
import GlobalDataTable from '@/components/GlobalDataTable';
import { newsColumn, newsData } from '@/data/TableData';
import { TitleHeader, InnerHeader } from '@/components/Headers';
import Button from '@/components/Button';

const news = () => {
  return (
    <>
      <TitleHeader
        pageIcon="/images/news/news.svg"
        headerText="Lorem Ipsum is a dummy text for placeholder"
      />
      <Card cls="p-4">
        <InnerHeader>Create News</InnerHeader>
        <InputImg name="Subject" type="name" />
        <div className="h-72 mt-3">
          <TextEditor />
        </div>
        <Button cls="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          Create
        </Button>
      </Card>

      <GlobalDataTable
        column={newsColumn}
        data={newsData}
        tableTitle="All News"
        titleImg="/images/news/allNews.svg"
      />
    </>
  );
};

export default news;

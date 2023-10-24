"use client"

import React, { useState } from "react";
import { Card } from 'antd';

const tabListNoTitle = [
    {
      key: "article",
      label: "article"
    },
    {
      key: "app",
      label: "app"
    }
  ];
  
const contentListNoTitle: Record<string, React.ReactNode> = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>
  };

const Form: React.FC = () => {    
    const [activeTabKey2, setActiveTabKey2] = useState<string>("app");

    const onTab2Change = (key: string) => {
      setActiveTabKey2(key);
    };
  
    return (
      <>
        <Card
          className="w-96"
          tabList={tabListNoTitle}
          activeTabKey={activeTabKey2}
          tabBarExtraContent={<a href="#">More</a>}
          onTabChange={onTab2Change}
          tabProps={{
            size: "middle"
          }}
        >
          {contentListNoTitle[activeTabKey2]}
        </Card>
      </>
    );
}   

export default Form;
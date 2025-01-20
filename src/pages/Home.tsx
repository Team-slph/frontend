import React from "react";
import Layout from "../components/Layout";
import Button from '../components/Button';
import Card from '../components/Card';

const Home: React.FC = () => {
    return (
      <Layout>
        <Card title="플레이리스트" description="감성적인 음악 모음">
          <Button label="더보기" onClick={() => alert('더보기 클릭')} size="small" />
        </Card>
      </Layout>
    );
  };
  
  export default Home;
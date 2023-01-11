import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { StoreState } from 'src/store';
import { fetchData } from 'src/store/articles/slice';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import { IconButton, List } from '@mui/material';
import ListItem from '@mui/material/ListItem';

interface IArticles {
  id: string;
  title: string;
  summary: string;
}

export const Articles: FC = () => {
  const loading = useSelector((state: StoreState) => state.articles.loading);
  const error = useSelector((state: StoreState) => state.articles.error);
  const articles = useSelector((state: StoreState) => state.articles.articles);

  const fetchDispatch = useDispatch<ThunkDispatch<StoreState, void, any>>();

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = () => {
    fetchDispatch(fetchData());
  };
  return (
    <>
      <div className="page-container">
        <div className="main-container">
          <h2 className="head-text">Articles</h2>
          {loading && <div>Loading...</div>}
          <div>
            <IconButton onClick={() => handleFetchData()}>
              <ReplayRoundedIcon />
            </IconButton>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingBottom: '3em',
            }}
          >
            <List>
              {articles.map((acticle) => (
                <ListItem key={acticle.id}>{acticle.title}</ListItem>
              ))}
            </List>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </>
  );
};

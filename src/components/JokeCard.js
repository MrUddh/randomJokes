import React from 'react';
import '../App.css';
import { useGetFiveRandomJokesByCategoryQuery } from '../services/jokes';

const JokeCard = ({ category }) => {
  const { data, error, isLoading } = useGetFiveRandomJokesByCategoryQuery(
    category
  );

  return (
    <div className="card rgb">
      <h1>{`${category} jokes`}</h1>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div>
          {data?.jokes?.map((joke) => (
            <div key={joke.id}>
              <li>{joke.joke}</li>
              <br />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default JokeCard;

import React from "react";
import { useQuery, gql } from "@apollo/client";
import ElementSideBar from "./ElementSideBar";

const ALL_CHARACTERS = gql`
  query getPersons {
    allPeople {
      people {
        id
        name
        birthYear
        skinColor
        species {
          name
        }
        homeworld {
          name
        }
      }
      totalCount
    }
  }
`;
const SideBar = ({ onSelected }) => {
  const { loading, error, data } = useQuery(ALL_CHARACTERS);
  if (loading) return <div>{"Loading..."}</div>;
  if (error) return `Error: ${error.message}`;

  return (
    <div>
      {data.allPeople.people.map(({ id, name, species, homeworld }) => (
        <div key={id} onClick={(e) => onSelected(e, id)}>
          <ElementSideBar name={name} species={species} homeworld={homeworld} />
        </div>
      ))}
    </div>
  );
};

export default SideBar;

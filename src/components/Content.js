import React from "react";
import { useQuery, gql } from "@apollo/client";
import ContentInfo from "./ContentInfo";
import ContentTitle from "./ContentTitle";
import "./../App.css";
import logo from "./../images/loading.gif";
const GET_PEOPLE_BY_ID = gql`
  query GetPeople($personID: ID!) {
    person(id: $personID) {
      eyeColor
      hairColor
      skinColor
      birthYear
      vehicleConnection {
        vehicles {
          name
        }
      }
    }
  }
`;

const Content = (props) => {
  const style = {
    color: "red",
    fontSize: 22,
  };
  const { loading, error, data } = useQuery(GET_PEOPLE_BY_ID, {
    variables: { personID: props.personID },
  });
  if (loading) return <img src={logo} />;
  if (error) return ``;
  return (
    <div className="ContentWrapper">
      <ContentTitle> General Information</ContentTitle>
      <ContentInfo info="Eye Color" value={data.person.eyeColor} />
      <ContentInfo info="Hair Color" value={data.person.hairColor} />
      <ContentInfo info="Skin Color" value={data.person.skinColor} />
      <ContentInfo info="birth Year" value={data.person.birthYear} />
      <ContentTitle>Vehicles</ContentTitle>
      {data.person.vehicleConnection.vehicles.map(({ id, name }) => (
        <ContentInfo key={id}>{name}</ContentInfo>
      ))}
    </div>
  );
};
export default Content;

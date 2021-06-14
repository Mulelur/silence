import React from "react";
import { Expertise } from "../../components";
import { DownloadCVButton } from "../../components/buttons";
import { MMData } from "../../data/mmData";
// import ass from "../../assets/cv/Neighbourhood assignment.docx";
import {
  subjectData1,
  subjectData2,
  subjectData3,
} from "../../data/subjectData";

export default function ExpertiseContainer() {
  return (
    <Expertise>
      <Expertise.Content>
        <Expertise.Text>
          I Silence Molopo, I am a student at VUT who is so busy studying a
          field of engineering which is Mechanical engineering.
        </Expertise.Text>
        <Expertise.Text>
          On the other side I have my own personal project which I am doing
          related to the innovation of an electric skateboard. I shall leave a
          recognizable legacy for my people and with their help, move South
          Africa forward. That is my purpose.
        </Expertise.Text>
        <Expertise.Title>My Learing style</Expertise.Title>
        <Expertise.Text>
          I’m a visual learner, learn by reading and seeing pictures. I
          understand and remember things by sight. I can picture what I’m
          reading in my head and I learn best using methods that are primarily
          visual. I like to see what I’m learning I’m often close my eyes to
          visualise or remember something, and I will find something to watch if
          I’m bored. I’m attracted to colour and spoken languages like stories.
          I can learn in any environment and in adapt to any learning skill too.
        </Expertise.Text>
      </Expertise.Content>
      <Expertise.Subjects>
        <Expertise.Group>
          <Expertise.Row>
            <Expertise.List>
              <Expertise.Title>High School Subjects</Expertise.Title>
              {subjectData1.map((item) => {
                return <Expertise.ListItem>{item.sbj}</Expertise.ListItem>;
              })}
            </Expertise.List>
            <Expertise.List>
              <Expertise.Title>MY VARSITY MODULES</Expertise.Title>
              {subjectData2.map((item) => {
                return <Expertise.ListItem>{item.sbj}</Expertise.ListItem>;
              })}
            </Expertise.List>
          </Expertise.Row>
        </Expertise.Group>
      </Expertise.Subjects>
      <Expertise.MMTitle>Management Matrix</Expertise.MMTitle>
      <Expertise.MM>
        <Expertise.MMGruop>
          <Expertise.MMGruopTitle>IMPORTANT</Expertise.MMGruopTitle>
          <Expertise.MMGruopContent>
            <Expertise.MMGruopCol>
              <Expertise.MMBedge>URGENT</Expertise.MMBedge>
              <Expertise.List>
                {MMData.map((item) => {
                  return item.IMPORTANT.URGENT.map((urgent) => {
                    return <Expertise.ListItem>{urgent}</Expertise.ListItem>;
                  });
                })}
              </Expertise.List>
            </Expertise.MMGruopCol>
            <Expertise.MMGruopCol>
              <Expertise.MMBedge>NOT URGENT</Expertise.MMBedge>
              <Expertise.List>
                {MMData.map((item) => {
                  return item.IMPORTANT.NOTURGENT.map((noturgent) => {
                    return <Expertise.ListItem>{noturgent}</Expertise.ListItem>;
                  });
                })}
              </Expertise.List>
            </Expertise.MMGruopCol>
          </Expertise.MMGruopContent>
        </Expertise.MMGruop>
        <Expertise.MMGruop>
          <Expertise.MMGruopTitle>NOT IMPORTANT</Expertise.MMGruopTitle>
          <Expertise.MMGruopContent>
            <Expertise.MMGruopCol>
              <Expertise.MMBedge>URGENT</Expertise.MMBedge>
              <Expertise.List>
                {MMData.map((item) => {
                  return item.NOTIMPORTANT.URGENT.map((urgent) => {
                    return <Expertise.ListItem>{urgent}</Expertise.ListItem>;
                  });
                })}
              </Expertise.List>
            </Expertise.MMGruopCol>
            <Expertise.MMGruopCol>
              <Expertise.MMBedge>NOT URGENT</Expertise.MMBedge>
              <Expertise.List>
                {MMData.map((item) => {
                  return item.NOTIMPORTANT.NOTURGENT.map((noturgent) => {
                    return <Expertise.ListItem>{noturgent}</Expertise.ListItem>;
                  });
                })}
              </Expertise.List>
            </Expertise.MMGruopCol>
          </Expertise.MMGruopContent>
        </Expertise.MMGruop>
      </Expertise.MM>
    </Expertise>
  );
}

import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
} from "reactstrap";
import Fade from "react-reveal/Fade";
import { ExperienceType } from "../types/sections";

const ExperienceCard = ({
  companyLogo,
  company,
  role,
  date,
  desc,
  descBullets,
}: ExperienceType) => {
  return (
    <Col lg="6">
      <Card
        style={{ flex: 1 }}
        className="shadow-lg--hover my-4 shadow border-0 text-center rounded h-100"
      >
        <CardBody className="text-center">
          <img
            src={companyLogo}
            style={{
              objectFit: "scale-down",
              width: "8rem",
              height: "8rem",
              borderRadius: "50%",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            }}
            className="mb-3"
            alt={company}
          />
          <CardTitle tag="h4" className="mb-2 font-weight-bold text-dark">
            {company}
          </CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-muted">
            {role}
          </CardSubtitle>
          <CardSubtitle className="text-muted">{date}</CardSubtitle>
          <CardText tag="div" className="description my-3 text-left">
            {desc}
            <ul className="mt-2">
              {descBullets
                ? descBullets.map((desc, index) => (
                    <li key={index} className="text-left">
                      {desc}
                    </li>
                  ))
                : null}
            </ul>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExperienceCard;

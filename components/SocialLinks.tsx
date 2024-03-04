import React from "react";
import { Button } from "reactstrap";
import { socialLinks } from "../portfolio";
import { BiLogoGmail } from "react-icons/bi";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      {socialLinks.email && (
        <Button
         
          href={socialLinks.email}
          target="_blank"
          className="m-1 p-2 bg-danger border-danger text-white"
        >
          <BiLogoGmail size={24}  />
        </Button>
      )}
      {socialLinks.linkedin && (
        <Button
        className="m-1 p-2 bg-primary border-primary text-white"
        target="_blank"
          href={socialLinks.linkedin}
         
        >
          <FaLinkedinIn size={24}  />
        </Button>
      )}
      {socialLinks.github && (
        <Button
          
          href={socialLinks.github}
          className="m-1 p-2 bg-secondary border-secondary text-black"
          target="_blank"
        >
          <FaGithub size={24}  />
        </Button>
      )}
      {socialLinks.instagram && (
        <Button
        className="m-1 p-2 bg-danger border-danger text-white"
        target="_blank"
          href={socialLinks.instagram}
         
        >
          <FaInstagram size={24}  />
        </Button>
      )}
      {socialLinks.facebook && (
        <Button
        className="m-1 p-2 bg-primary border-primary text-white"
        target="_blank"
          href={socialLinks.facebook}
          
         
        >
          <FaFacebookF size={24}  />
        </Button>
      )}
      {socialLinks.twitter && (
        <Button
          className="btn-icon-only rounded-circle"
          color="twitter"
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener"
          aria-label="Twitter"
        >
          <span >
            <i className="fa fa-twitter" />
          </span>
        </Button>
      )}
    </div>
  );
};

export default SocialLinks;

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
          className="btn-icon-only rounded-circle ml-1"
          color="white"
          rel="noopener"
          aria-label="URL"
          href={socialLinks.email}
          target="_blank"
        >
          <BiLogoGmail size={24} className="btn-inner--icon" />
        </Button>
      )}
      {socialLinks.linkedin && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="twitter"
          rel="noopener"
          aria-label="Linkedin"
          href={socialLinks.linkedin}
          target="_blank"
        >
          <FaLinkedinIn size={24} className="btn-inner--icon" />
        </Button>
      )}
      {socialLinks.github && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="github"
          href={socialLinks.github}
          rel="noopener"
          aria-label="Github"
          target="_blank"
        >
          <FaGithub size={24} className="btn-inner--icon" />
        </Button>
      )}
      {socialLinks.instagram && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="instagram"
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <FaInstagram size={24} className="btn-inner--icon" />
        </Button>
      )}
      {socialLinks.facebook && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="facebook"
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          <FaFacebookF size={24} className="btn-inner--icon" />
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
          <span className="btn-inner--icon">
            <i className="fa fa-twitter" />
          </span>
        </Button>
      )}
    </div>
  );
};

export default SocialLinks;

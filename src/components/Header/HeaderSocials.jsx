import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SOCIAL_LINKS = [
  {
    id: 1,
    name: "LinkedIn",
    href: "https://linkedin.com/in/mithunk1",
    icon: <FaLinkedinIn />,
    color: "#0a66c2",
  },
  {
    id: 2,
    name: "GitHub",
    href: "https://github.com/mithun0773",
    icon: <FaGithub />,
    color: "#e2e8f0",
  },
  {
    id: 3,
    name: "LeetCode",
    href: "https://leetcode.com/u/MithunKasi",
    icon: <SiLeetcode />,
    color: "#ea4c89",
  },
];

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {SOCIAL_LINKS.map(({ id, name, href, icon, color }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="header__social-link"
          style={{ "--soc-color": color }}
          aria-label={name}
        >
          {icon}
          <span className="header__social-tooltip">{name}</span>
        </a>
      ))}
    </div>
  );
};

export default HeaderSocials;

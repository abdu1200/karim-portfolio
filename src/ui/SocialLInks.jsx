import React from "react";
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { TbBrandGithub, TbBrandTelegram } from "react-icons/tb";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const socialAccounts = [
  {
    title: "github",
    link: "https://github.com/abdu1200",
    icon: <TbBrandGithub />,
    delay: 0.8,
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/in/abdulkerim-mohammed-3050a8285/",
    icon: <SlSocialLinkedin />,
    delay: 0.9,
  },
  {
    title: "telegram",
    link: "https://t.me/kma_karim",
    icon: <TbBrandTelegram />,
    delay: 0.95,
  },
  {
    title: "instagram",
    link: "https://www.instagram.com/kma_karim/",
    icon: <SlSocialInstagram />,
    delay: 1,
  },
];
const SocialLInks = ({ className }) => {
  return (
    <div className={twMerge("flex flex-col gap-y-5", className)}>
      {socialAccounts?.map((item) => (
        <motion.a
          key={item?.title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: item?.delay, ease: "easeIn" }}
          href={item?.link}
          target="blank"
        >
          <span className="w-10 h-10 text-xl bg-textBg border-[1px] inline-flex items-center justify-center rounded-full border-zinc-500 hover:border-designColor text-lightText hover:text-designColor duration-200 hover:bg-black">
            {item?.icon}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLInks;

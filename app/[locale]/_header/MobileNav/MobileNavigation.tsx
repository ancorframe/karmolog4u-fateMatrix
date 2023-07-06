import React from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./mobileNavigation.module.css";
import Image from "next/image";
import closeIcon from "../../../../public/assets/images/close.svg";
import viberIcon from "../../../../public/assets/images/viber.svg";
import instIcon from "../../../../public/assets/images/instagram.svg";
import telegIcon from "../../../../public/assets/images/telegram.svg";
import tiktokIcon from "../../../../public/assets/images/tiktok.svg";
import youtubeIcon from "../../../../public/assets/images/youtube.svg";
import waIcon from "../../../../public/assets/images/wa.svg";

type SocialLink = {
  url: string;
  icon: string;
  alt: string;
};

const socialLinks: SocialLink[] = [
  {
    url: "https://www.instagram.com/karmolog4u/",
    icon: instIcon,
    alt: "Instagram",
  },
  { url: "https://t.me/karmolog4u", icon: telegIcon, alt: "Telegram" },
  {
    url: "https://www.tiktok.com/@karmologist?_t=8YIutpJO0g9&_r=1",
    icon: tiktokIcon,
    alt: "TikTok",
  },
  {
    url: "https://www.youtube.com/@user-qi5qi3vr9k",
    icon: youtubeIcon,
    alt: "YouTube",
  },
  {
    url: "https://api.whatsapp.com/send/?phone=380678696760&text&type=phone_number&app_absent=0",
    icon: waIcon,
    alt: "WhatsApp",
  },
  { url: "viber://chat?number=%2B380678696760", icon: viberIcon, alt: "Viber" },
];

interface Props {
  isOpen: boolean;
  setIsOpen: (data: boolean) => void;
}
function MobileNavigation({ isOpen, setIsOpen }: Props) {
  return (
    <>
      <div className={`${styles.menu} ${isOpen ? styles.menu_open : ""}`}>
        <Navigation />
        <button onClick={() => setIsOpen(!isOpen)} className={styles.btn_close}>
          <Image
            priority
            src={closeIcon}
            alt="Follow us on Twitter"
            className={styles.burger_icon}
          />
        </button>
        <ul className={styles.social_list}>
          {socialLinks.map(({ url, icon, alt }, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noreferrer">
                <Image
                  priority
                  src={icon}
                  alt={alt}
                  className={styles.burger_icon}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdrop_show : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      ></div>
    </>
  );
}

export default MobileNavigation;

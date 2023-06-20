import type React from "react";
import type { FC } from "react";

interface LinkIconProps {
  href?: string;
  title: string;
  isIconOnly?: boolean;
  children: React.ReactNode;
  onClick?: (...args: any[]) => any;
}

const LinkIcon: FC<LinkIconProps> = ({href, title, isIconOnly = false, children, onClick}) => {
 
  const classAttr = isIconOnly ? "text-3xl" : "";
  const spanClassAttr = isIconOnly ? "sr-only" : "pl-2";
  const content = (
    <>
      <span aria-hidden="true" className={isIconOnly ? "" : "inline-block w-6"}>{children}</span>
      <span className={isIconOnly ? "sr-only" : "pl-2"}>{title}</span>
    </>
  );

  // case link
  if (href) {
    return (
      <a 
        href={href} 
        className={classAttr} 
        title={title}>
          {content}
      </a>
    )
  }

  // case button
  return (
    <button 
      onClick={onClick} 
      className={classAttr} 
      title={title}>
        {content}
    </button>
  )

};

export default LinkIcon;

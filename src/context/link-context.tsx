import React, { type ReactNode, useContext, useEffect, useState } from "react";
import { Link } from "../models/Link";

type LinksContextObj = {
  items: Link[];
  addLink: (text: string) => void;
  removeLink: (id: string) => void;
};

const LinksContext = React.createContext<LinksContextObj>({
  items: [],
  addLink: () => {},
  removeLink: (id: string) => {},
});

const LinksContextProvider = (props: { children: ReactNode }) => {
  const [links, setLinks] = useState<Link[]>(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  }); // never[] means ever empty

  const addLinkHandler = (linkText: string): void => {
    const newLink = new Link(linkText);

    setLinks((prevLinks) => {
      return prevLinks.concat(newLink);
    });
  };

  const removeLinkHandler = (linkId: string) => {
    setLinks((prevLinks) => {
      return prevLinks.filter((link) => link.id !== linkId);
    });
  };

  const contextValue: LinksContextObj = {
    items: links,
    addLink: addLinkHandler,
    removeLink: removeLinkHandler,
  };

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(links));
  }, [links]);

  return (
    <LinksContext.Provider value={contextValue}>
      {props.children}
    </LinksContext.Provider>
  );
};

export const useLinks = () => useContext(LinksContext);

export default LinksContextProvider;

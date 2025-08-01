import { useRef } from "react";
import "./AddLink.css";

import { useLinks } from "../context/link-context";
import { isValidHttpUrl } from "../utils/utils";

const AddLink: React.FC = () => {
  const linksCtx = useLinks();
  const linkTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = linkTextInputRef.current!.value; //u can use ! instead ? if u are sure it cant be null

    if (enteredText.trim().length === 0 || !isValidHttpUrl(enteredText)) {
      window.alert("Incorrect input, try add real url");
      return;
    }

    linksCtx.addLink(enteredText);
  }; //React.MouseEvent for onclick

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">link text</label>
      <input type="text" id="text" ref={linkTextInputRef} />
      <button>Add link</button>
    </form>
  );
};

export default AddLink;

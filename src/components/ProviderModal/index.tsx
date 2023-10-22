import React, { ReactNode } from "react";
import "./style.css";
import ImgButton from "../ImgButtom";
interface TypeProviderModal extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  visibility: boolean;
  updateModal: (state: boolean) => void;
}

const ProviderModal: React.FC<TypeProviderModal> = ({
  updateModal,
  children,
  visibility,
  ...rest
}) => {
  const [stateModal, setStateModal] = React.useState<boolean>(false);
  React.useEffect(() => {
    if(visibility)
    setStateModal(visibility);
  }, [visibility]);

  React.useEffect(() => {
    if(stateModal)
    updateModal(false)
  },[stateModal,updateModal])

  return (
    <div
      className="providerModal"
      style={{ display: stateModal ? "block" : "none" }}
      {...rest}
    >
      <>
        <ImgButton
          onClick={() => setStateModal(false)}
          className="closeButtonModal"
          src="close.png"
          alt="teste"
        />
        {children}
      </>
    </div>
  );
};

export default ProviderModal;

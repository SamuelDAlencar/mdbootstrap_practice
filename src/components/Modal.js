import {
  MDBBtn,
  MDBInput,
  MDBInputGroup,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import { useState } from "react";
import "../style/Modal.css";

export default function Modal() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBBtn onClick={toggleShow}>Criar RSS</MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>RSS</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInputGroup textBefore="@" className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Recipient's username"
                />
              </MDBInputGroup>

              <MDBInputGroup className="mb-3" textAfter="@example.com">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Recipient's username"
                />
              </MDBInputGroup>

              <label htmlFor="basic-url2" className="form-label">
                Your vanity URL
              </label>
              <MDBInputGroup
                className="mb-3"
                textBefore="https://example.com/users/"
              >
                <input className="form-control" id="basic-url2" type="text" />
              </MDBInputGroup>

              <MDBInputGroup className="mb-3" textBefore="$" textAfter=".00">
                <input className="form-control" type="text" />
              </MDBInputGroup>

              <MDBInputGroup className="mb-3">
                <input
                  className="form-control"
                  placeholder="Username"
                  type="text"
                />
                <span className="input-group-text">@</span>
                <input
                  className="form-control"
                  placeholder="Server"
                  type="text"
                />
              </MDBInputGroup>

              <MDBInputGroup className="mb-3" textBefore="With textarea">
                <textarea className="form-control" />
              </MDBInputGroup>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

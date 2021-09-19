import React, { Component } from "react";
import { FrontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FormContext,
  Dropdown,
  FieldInput,
  ButtonGroup,
  Cancel
} from "@openmrs/react-components";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Data from "../Data";

class AddAttributeType extends Component {
  render() {
    return (
      <div>
        <FormContext>
          <FieldInput>
            <legend>
              <h1>Add Attribute Type</h1>
            </legend>
            <div>
              <p>
                Lap Test Type
                <input
                  type="text"
                  className="right-align"
                  placeholder="Search Test Types..."
                  required={true}
                />
              </p>
						</div>
            <div>
              <p>Name
                <input type="text" required={true} />
              </p>
            </div>
            <div>
              <p style={{ color: "black" }} id="desc" >Description
              <textarea type="text"
                  className="right-align"
                  spellCheck={true}
                  placeholder=" "
                />
              </p>
            </div>
            <div>
              <p>Multiset Name
                <input type="text"
                  className="right-align"
                  />
              </p>
            </div>
            <div>
              <p>Group Name

                <input type="text"
                  className="right-align"
                  />
              </p>
            </div>
            <div>
              <p>Min Occurs

                <input type="text"
                  className="right-align"
                  />
              </p>
            </div>
            <div>
              <p>Max Occurs

                <input type="text"
                  className="right-align"
                  />
              </p>
            </div>
            <div>
              <p>Sort Weight

                <input type="text"
                  className="right-align"
                  required={true}
                  />
              </p> <faEye /><p>Sort Weight hierachy</p>
            </div>
            <div>
              <p>Data Type
               <select
                  className="form-control right-align">
                  <Dropdown>
                    <Data />
                  </Dropdown>
               </select>
              </p>
            </div>
            <div>
              <p style={{ color: "black" }} id="data" >Datatype Configuration

                <textarea type="text"
                  className="right-align"
                  spellCheck={true}
                  placeholder=" "
                />
              </p>
            </div>
            <div>
              <p>Preferred Handler
                <select>
                  <Dropdown
                    type="text"
                    className="right-align"
                    placeholder="Deflaut" />
                </select>
              </p>
            </div>
            <div>
              <p style={{ color: "black" }} id="hanc" >Handler Configuration
              <textarea type="text"
                  className="right-align"
                  spellCheck={true}
                  placeholder=" "
                />
              </p>
            </div>
            
          </FieldInput>
        </FormContext>
      </div>
    );
  }
}

export default AddAttributeType;

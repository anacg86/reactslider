import React from "react";
import "./style.css";

function AddImage(props) {
    return (
        <div>
            <form>
                <div class="form-group">
                     <label for="formGroupExampleInput" id="textbox">Add Image Link</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="add image link">
                </div>
                <button className="add" onClick={() => {props.addById(props.id);}}>Add Image</button>
            </form> 
       </div>
                );
              }
              
export default AddImage;

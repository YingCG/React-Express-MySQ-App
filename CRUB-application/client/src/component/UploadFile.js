import React, { useState } from "react";
import { PickerOverlay } from 'filestack-react-18'

function UploadFile() {
    const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);
    const [imageUrl, setImageUrl] = useState();
  
    const handleVisible = () => {
      setIsPickerOverlayVisible(!isPickerOverlayVisible);
    };
    
    return (
        <div>
       <button onClick={handleVisible}>Picker Overlay</button>
       <div>
          {isPickerOverlayVisible && (
            <PickerOverlay
              apikey="paste your APIKEY here"
              onSuccess={(result) => {
                setImageUrl(result.filesUploaded[0].url);
                setIsPickerOverlayVisible(false);
              }}
            />
          )}
        </div>
          <a href={imageUrl}>click and open image url </a>
      </div>
}

export default UploadFile
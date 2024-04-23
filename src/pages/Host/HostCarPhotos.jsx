import React from "react"
import { useOutletContext } from "react-router-dom"
import { getImageUrl } from "../../utils/image-util"

function HostCarPhotos() {
    const{hostCarDetails} = useOutletContext()

    return (
        <>
        <img src={getImageUrl(hostCarDetails.imageUrl)} className="host-car-detail-image"  />
        </>
    )
  }
  
  export default HostCarPhotos
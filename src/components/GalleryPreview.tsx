import { Stack } from "react-bootstrap"

const GalleryPreview = () => {
    return(
        <div className="gallery-preview">
            <div className="gallery-preview-bg"></div>
            <div className="gallery-preview-button-container">
              <div>
                <button>open gallery</button>
              </div>
            </div>
            <Stack gap={3}>
              <Stack direction="horizontal" gap={3}>
                <img src="/temp-photos/IMG_0153.jpg" alt="gallery preview" />
                <img src="/temp-photos/IMG_0153.jpg" alt="gallery preview" />
                <img src="/temp-photos/IMG_0153.jpg" alt="gallery preview" />
              </Stack>
              <Stack direction="horizontal" gap={3}>
                <img src="/temp-photos/IMG_0153.jpg" alt="gallery preview" />
                <img src="/temp-photos/IMG_0153.jpg" alt="gallery preview" />
                <img src="/temp-photos/IMG_0153.jpg" alt="gallery preview" />
              </Stack>
              <Stack direction="horizontal" gap={3}>
                <img src="/temp-photos/IMG_0153.jpg" alt="gallery preview" />
                <img src="/temp-photos/IMG_0153.jpg" alt="gallery preview" />
                <img src="/temp-photos/IMG_0153.jpg" alt="gallery preview" />
              </Stack>
            </Stack>
          </div>
    )
}

export default GalleryPreview
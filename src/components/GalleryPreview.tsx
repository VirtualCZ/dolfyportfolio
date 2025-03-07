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
                <img src="/gallery-photos/gal1.jpg" alt="gallery preview" />
                <img src="/gallery-photos/gal2.jpg" alt="gallery preview" />
                <img src="/gallery-photos/gal3.jpg" alt="gallery preview" />
              </Stack>
              <Stack direction="horizontal" gap={3}>
                <img src="/gallery-photos/gal4.jpg" alt="gallery preview" />
                <img src="/gallery-photos/gal5.jpg" alt="gallery preview" />
                <img src="/gallery-photos/gal6.jpg" alt="gallery preview" />
              </Stack>
              <Stack direction="horizontal" gap={3}>
                <img src="/gallery-photos/gal7.jpg" alt="gallery preview" />
                <img src="/gallery-photos/gal8.jpg" alt="gallery preview" />
                <img src="/gallery-photos/gal9.jpg" alt="gallery preview" />
              </Stack>
            </Stack>
          </div>
    )
}

export default GalleryPreview
import Image, {ImageProps} from "next/image";
import { useEffect, useState } from "react";

interface ImageWithFallbackProps extends ImageProps {
    fallbackSrc: string
}

export default function ImageFallback(props: ImageWithFallbackProps) {
    const { src, fallbackSrc, ...rest } = props;
    const [imgSrc, set_imgSrc] = useState(src);

    useEffect(() => {
        set_imgSrc(src);
    }, [src]);

    return (
        <Image
            {...rest}
            src={imgSrc}
            alt="no image"
            onLoadingComplete={(result) => {
                if (result.naturalWidth === 0) {
                // Broken image
                set_imgSrc(fallbackSrc);
                }
            }}
            onErrorCapture={() => {
                set_imgSrc(fallbackSrc);
            }}
        />
    );
}

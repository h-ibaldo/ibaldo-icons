import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImagePaperclipTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImagePaperclipTilted: ForwardRefExoticComponent<ImagePaperclipTiltedProps & RefAttributes<SVGSVGElement>>;

export default ImagePaperclipTilted;
export { ImagePaperclipTilted };

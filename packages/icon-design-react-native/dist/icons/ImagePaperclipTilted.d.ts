import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ImagePaperclipTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ImagePaperclipTilted: ForwardRefExoticComponent<ImagePaperclipTiltedProps & RefAttributes<Svg>>;

export default ImagePaperclipTilted;
export { ImagePaperclipTilted };

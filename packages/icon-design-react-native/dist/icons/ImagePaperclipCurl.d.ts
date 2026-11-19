import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ImagePaperclipCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ImagePaperclipCurl: ForwardRefExoticComponent<ImagePaperclipCurlProps & RefAttributes<Svg>>;

export default ImagePaperclipCurl;
export { ImagePaperclipCurl };

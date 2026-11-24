import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ImagePaperclipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ImagePaperclip: ForwardRefExoticComponent<ImagePaperclipProps & RefAttributes<Svg>>;

export default ImagePaperclip;
export { ImagePaperclip };

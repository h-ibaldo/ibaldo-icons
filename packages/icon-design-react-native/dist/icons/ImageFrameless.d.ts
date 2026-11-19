import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ImageFramelessProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ImageFrameless: ForwardRefExoticComponent<ImageFramelessProps & RefAttributes<Svg>>;

export default ImageFrameless;
export { ImageFrameless };

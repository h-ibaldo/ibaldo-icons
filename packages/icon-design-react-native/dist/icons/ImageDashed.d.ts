import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ImageDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ImageDashed: ForwardRefExoticComponent<ImageDashedProps & RefAttributes<Svg>>;

export default ImageDashed;
export { ImageDashed };

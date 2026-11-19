import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ImageSquareDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ImageSquareDashed: ForwardRefExoticComponent<ImageSquareDashedProps & RefAttributes<Svg>>;

export default ImageSquareDashed;
export { ImageSquareDashed };

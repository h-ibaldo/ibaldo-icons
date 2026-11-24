import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ImageCurveProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ImageCurve: ForwardRefExoticComponent<ImageCurveProps & RefAttributes<Svg>>;

export default ImageCurve;
export { ImageCurve };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutGridImageProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutGridImage: ForwardRefExoticComponent<LayoutGridImageProps & RefAttributes<Svg>>;

export default LayoutGridImage;
export { LayoutGridImage };

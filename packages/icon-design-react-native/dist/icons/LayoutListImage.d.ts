import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutListImageProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutListImage: ForwardRefExoticComponent<LayoutListImageProps & RefAttributes<Svg>>;

export default LayoutListImage;
export { LayoutListImage };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCornerLeftUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCornerLeftUp: ForwardRefExoticComponent<ArrowCornerLeftUpProps & RefAttributes<Svg>>;

export default ArrowCornerLeftUp;
export { ArrowCornerLeftUp };

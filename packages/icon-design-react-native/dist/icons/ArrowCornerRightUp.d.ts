import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCornerRightUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCornerRightUp: ForwardRefExoticComponent<ArrowCornerRightUpProps & RefAttributes<Svg>>;

export default ArrowCornerRightUp;
export { ArrowCornerRightUp };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VipSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VipSquare: ForwardRefExoticComponent<VipSquareProps & RefAttributes<Svg>>;

export default VipSquare;
export { VipSquare };

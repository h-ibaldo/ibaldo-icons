import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDown: ForwardRefExoticComponent<ArrowDownProps & RefAttributes<Svg>>;

export default ArrowDown;
export { ArrowDown };

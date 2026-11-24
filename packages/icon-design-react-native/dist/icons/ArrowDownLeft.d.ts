import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownLeft: ForwardRefExoticComponent<ArrowDownLeftProps & RefAttributes<Svg>>;

export default ArrowDownLeft;
export { ArrowDownLeft };

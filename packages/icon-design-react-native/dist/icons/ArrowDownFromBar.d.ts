import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownFromBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownFromBar: ForwardRefExoticComponent<ArrowDownFromBarProps & RefAttributes<Svg>>;

export default ArrowDownFromBar;
export { ArrowDownFromBar };

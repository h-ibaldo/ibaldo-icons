import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpFromBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpFromBar: ForwardRefExoticComponent<ArrowUpFromBarProps & RefAttributes<Svg>>;

export default ArrowUpFromBar;
export { ArrowUpFromBar };

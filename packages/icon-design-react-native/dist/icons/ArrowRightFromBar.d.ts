import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRightFromBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRightFromBar: ForwardRefExoticComponent<ArrowRightFromBarProps & RefAttributes<Svg>>;

export default ArrowRightFromBar;
export { ArrowRightFromBar };

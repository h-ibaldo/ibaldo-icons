import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftFromBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftFromBar: ForwardRefExoticComponent<ArrowLeftFromBarProps & RefAttributes<Svg>>;

export default ArrowLeftFromBar;
export { ArrowLeftFromBar };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronLeft: ForwardRefExoticComponent<ChevronLeftProps & RefAttributes<Svg>>;

export default ChevronLeft;
export { ChevronLeft };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronDoubleLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronDoubleLeft: ForwardRefExoticComponent<ChevronDoubleLeftProps & RefAttributes<Svg>>;

export default ChevronDoubleLeft;
export { ChevronDoubleLeft };

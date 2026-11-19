import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronDoubleDownLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronDoubleDownLeft: ForwardRefExoticComponent<ChevronDoubleDownLeftProps & RefAttributes<Svg>>;

export default ChevronDoubleDownLeft;
export { ChevronDoubleDownLeft };

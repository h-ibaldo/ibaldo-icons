import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronDoubleUpRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronDoubleUpRight: ForwardRefExoticComponent<ChevronDoubleUpRightProps & RefAttributes<Svg>>;

export default ChevronDoubleUpRight;
export { ChevronDoubleUpRight };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronDoubleUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronDoubleUp: ForwardRefExoticComponent<ChevronDoubleUpProps & RefAttributes<Svg>>;

export default ChevronDoubleUp;
export { ChevronDoubleUp };

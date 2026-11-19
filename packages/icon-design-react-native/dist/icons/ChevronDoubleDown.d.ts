import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronDoubleDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronDoubleDown: ForwardRefExoticComponent<ChevronDoubleDownProps & RefAttributes<Svg>>;

export default ChevronDoubleDown;
export { ChevronDoubleDown };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronUpSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronUpSmall: ForwardRefExoticComponent<ChevronUpSmallProps & RefAttributes<Svg>>;

export default ChevronUpSmall;
export { ChevronUpSmall };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronLeftSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronLeftSmall: ForwardRefExoticComponent<ChevronLeftSmallProps & RefAttributes<Svg>>;

export default ChevronLeftSmall;
export { ChevronLeftSmall };

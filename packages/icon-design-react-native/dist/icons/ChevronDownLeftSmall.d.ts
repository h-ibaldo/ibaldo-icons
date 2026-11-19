import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronDownLeftSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronDownLeftSmall: ForwardRefExoticComponent<ChevronDownLeftSmallProps & RefAttributes<Svg>>;

export default ChevronDownLeftSmall;
export { ChevronDownLeftSmall };

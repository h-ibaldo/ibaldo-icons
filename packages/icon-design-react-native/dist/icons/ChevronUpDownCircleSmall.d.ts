import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronUpDownCircleSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronUpDownCircleSmall: ForwardRefExoticComponent<ChevronUpDownCircleSmallProps & RefAttributes<Svg>>;

export default ChevronUpDownCircleSmall;
export { ChevronUpDownCircleSmall };

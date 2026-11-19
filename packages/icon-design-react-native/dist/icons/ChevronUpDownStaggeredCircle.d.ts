import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronUpDownStaggeredCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronUpDownStaggeredCircle: ForwardRefExoticComponent<ChevronUpDownStaggeredCircleProps & RefAttributes<Svg>>;

export default ChevronUpDownStaggeredCircle;
export { ChevronUpDownStaggeredCircle };

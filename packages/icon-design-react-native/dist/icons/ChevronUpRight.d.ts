import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronUpRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronUpRight: ForwardRefExoticComponent<ChevronUpRightProps & RefAttributes<Svg>>;

export default ChevronUpRight;
export { ChevronUpRight };

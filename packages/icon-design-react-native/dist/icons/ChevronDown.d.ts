import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronDown: ForwardRefExoticComponent<ChevronDownProps & RefAttributes<Svg>>;

export default ChevronDown;
export { ChevronDown };

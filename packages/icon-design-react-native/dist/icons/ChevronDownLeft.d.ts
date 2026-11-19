import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronDownLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronDownLeft: ForwardRefExoticComponent<ChevronDownLeftProps & RefAttributes<Svg>>;

export default ChevronDownLeft;
export { ChevronDownLeft };

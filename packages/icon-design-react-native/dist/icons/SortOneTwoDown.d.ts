import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SortOneTwoDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SortOneTwoDown: ForwardRefExoticComponent<SortOneTwoDownProps & RefAttributes<Svg>>;

export default SortOneTwoDown;
export { SortOneTwoDown };

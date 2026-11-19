import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BorderAllProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BorderAll: ForwardRefExoticComponent<BorderAllProps & RefAttributes<Svg>>;

export default BorderAll;
export { BorderAll };

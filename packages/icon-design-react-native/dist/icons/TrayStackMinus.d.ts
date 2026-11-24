import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrayStackMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrayStackMinus: ForwardRefExoticComponent<TrayStackMinusProps & RefAttributes<Svg>>;

export default TrayStackMinus;
export { TrayStackMinus };

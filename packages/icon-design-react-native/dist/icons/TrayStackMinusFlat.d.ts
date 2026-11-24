import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrayStackMinusFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrayStackMinusFlat: ForwardRefExoticComponent<TrayStackMinusFlatProps & RefAttributes<Svg>>;

export default TrayStackMinusFlat;
export { TrayStackMinusFlat };

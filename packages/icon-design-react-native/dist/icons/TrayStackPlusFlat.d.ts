import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrayStackPlusFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrayStackPlusFlat: ForwardRefExoticComponent<TrayStackPlusFlatProps & RefAttributes<Svg>>;

export default TrayStackPlusFlat;
export { TrayStackPlusFlat };

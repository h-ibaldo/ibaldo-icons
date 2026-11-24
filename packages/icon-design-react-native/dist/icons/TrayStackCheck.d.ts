import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrayStackCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrayStackCheck: ForwardRefExoticComponent<TrayStackCheckProps & RefAttributes<Svg>>;

export default TrayStackCheck;
export { TrayStackCheck };

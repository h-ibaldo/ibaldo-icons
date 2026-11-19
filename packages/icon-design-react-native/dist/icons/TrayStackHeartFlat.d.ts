import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrayStackHeartFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrayStackHeartFlat: ForwardRefExoticComponent<TrayStackHeartFlatProps & RefAttributes<Svg>>;

export default TrayStackHeartFlat;
export { TrayStackHeartFlat };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrayStackFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrayStackFlat: ForwardRefExoticComponent<TrayStackFlatProps & RefAttributes<Svg>>;

export default TrayStackFlat;
export { TrayStackFlat };

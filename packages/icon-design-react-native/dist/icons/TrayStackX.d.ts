import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrayStackXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrayStackX: ForwardRefExoticComponent<TrayStackXProps & RefAttributes<Svg>>;

export default TrayStackX;
export { TrayStackX };

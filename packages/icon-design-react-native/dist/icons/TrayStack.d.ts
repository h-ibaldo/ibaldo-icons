import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrayStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrayStack: ForwardRefExoticComponent<TrayStackProps & RefAttributes<Svg>>;

export default TrayStack;
export { TrayStack };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrayStackPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrayStackPlus: ForwardRefExoticComponent<TrayStackPlusProps & RefAttributes<Svg>>;

export default TrayStackPlus;
export { TrayStackPlus };

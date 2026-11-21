import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PowerOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PowerOff: ForwardRefExoticComponent<PowerOffProps & RefAttributes<Svg>>;

export default PowerOff;
export { PowerOff };

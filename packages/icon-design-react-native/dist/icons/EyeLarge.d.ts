import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EyeLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EyeLarge: ForwardRefExoticComponent<EyeLargeProps & RefAttributes<Svg>>;

export default EyeLarge;
export { EyeLarge };

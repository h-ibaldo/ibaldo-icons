import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EyeOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EyeOff: ForwardRefExoticComponent<EyeOffProps & RefAttributes<Svg>>;

export default EyeOff;
export { EyeOff };

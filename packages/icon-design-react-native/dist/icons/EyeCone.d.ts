import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EyeConeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EyeCone: ForwardRefExoticComponent<EyeConeProps & RefAttributes<Svg>>;

export default EyeCone;
export { EyeCone };

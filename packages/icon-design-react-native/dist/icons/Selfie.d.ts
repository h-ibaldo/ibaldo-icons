import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SelfieProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Selfie: ForwardRefExoticComponent<SelfieProps & RefAttributes<Svg>>;

export default Selfie;
export { Selfie };

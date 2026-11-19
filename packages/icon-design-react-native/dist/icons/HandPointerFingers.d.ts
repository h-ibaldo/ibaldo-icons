import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandPointerFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandPointerFingers: ForwardRefExoticComponent<HandPointerFingersProps & RefAttributes<Svg>>;

export default HandPointerFingers;
export { HandPointerFingers };

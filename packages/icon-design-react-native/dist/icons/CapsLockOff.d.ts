import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CapsLockOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CapsLockOff: ForwardRefExoticComponent<CapsLockOffProps & RefAttributes<Svg>>;

export default CapsLockOff;
export { CapsLockOff };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CapsLockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CapsLock: ForwardRefExoticComponent<CapsLockProps & RefAttributes<Svg>>;

export default CapsLock;
export { CapsLock };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CapsLockFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CapsLockFlat: ForwardRefExoticComponent<CapsLockFlatProps & RefAttributes<Svg>>;

export default CapsLockFlat;
export { CapsLockFlat };

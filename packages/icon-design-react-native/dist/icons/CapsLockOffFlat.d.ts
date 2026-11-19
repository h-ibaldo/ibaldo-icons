import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CapsLockOffFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CapsLockOffFlat: ForwardRefExoticComponent<CapsLockOffFlatProps & RefAttributes<Svg>>;

export default CapsLockOffFlat;
export { CapsLockOffFlat };

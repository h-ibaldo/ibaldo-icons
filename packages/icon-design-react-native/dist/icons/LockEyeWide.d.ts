import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockEyeWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockEyeWide: ForwardRefExoticComponent<LockEyeWideProps & RefAttributes<Svg>>;

export default LockEyeWide;
export { LockEyeWide };

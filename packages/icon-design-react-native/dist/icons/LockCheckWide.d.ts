import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockCheckWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockCheckWide: ForwardRefExoticComponent<LockCheckWideProps & RefAttributes<Svg>>;

export default LockCheckWide;
export { LockCheckWide };

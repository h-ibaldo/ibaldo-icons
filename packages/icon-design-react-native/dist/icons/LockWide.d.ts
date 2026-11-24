import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockWide: ForwardRefExoticComponent<LockWideProps & RefAttributes<Svg>>;

export default LockWide;
export { LockWide };

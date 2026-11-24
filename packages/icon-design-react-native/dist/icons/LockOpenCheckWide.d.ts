import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockOpenCheckWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockOpenCheckWide: ForwardRefExoticComponent<LockOpenCheckWideProps & RefAttributes<Svg>>;

export default LockOpenCheckWide;
export { LockOpenCheckWide };

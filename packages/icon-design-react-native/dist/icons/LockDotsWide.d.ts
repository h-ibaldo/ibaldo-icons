import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockDotsWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockDotsWide: ForwardRefExoticComponent<LockDotsWideProps & RefAttributes<Svg>>;

export default LockDotsWide;
export { LockDotsWide };

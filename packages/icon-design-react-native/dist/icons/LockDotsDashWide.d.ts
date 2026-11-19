import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockDotsDashWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockDotsDashWide: ForwardRefExoticComponent<LockDotsDashWideProps & RefAttributes<Svg>>;

export default LockDotsDashWide;
export { LockDotsDashWide };

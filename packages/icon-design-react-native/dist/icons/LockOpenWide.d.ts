import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockOpenWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockOpenWide: ForwardRefExoticComponent<LockOpenWideProps & RefAttributes<Svg>>;

export default LockOpenWide;
export { LockOpenWide };

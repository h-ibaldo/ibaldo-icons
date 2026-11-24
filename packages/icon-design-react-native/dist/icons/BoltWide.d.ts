import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoltWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoltWide: ForwardRefExoticComponent<BoltWideProps & RefAttributes<Svg>>;

export default BoltWide;
export { BoltWide };

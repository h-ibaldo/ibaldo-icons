import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellCheckWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellCheckWide: ForwardRefExoticComponent<BellCheckWideProps & RefAttributes<Svg>>;

export default BellCheckWide;
export { BellCheckWide };

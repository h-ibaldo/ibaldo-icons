import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellWide: ForwardRefExoticComponent<BellWideProps & RefAttributes<Svg>>;

export default BellWide;
export { BellWide };

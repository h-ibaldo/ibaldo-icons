import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellXWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellXWide: ForwardRefExoticComponent<BellXWideProps & RefAttributes<Svg>>;

export default BellXWide;
export { BellXWide };

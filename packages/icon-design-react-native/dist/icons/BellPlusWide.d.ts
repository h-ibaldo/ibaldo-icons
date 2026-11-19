import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellPlusWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellPlusWide: ForwardRefExoticComponent<BellPlusWideProps & RefAttributes<Svg>>;

export default BellPlusWide;
export { BellPlusWide };

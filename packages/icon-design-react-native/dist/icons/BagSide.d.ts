import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BagSideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BagSide: ForwardRefExoticComponent<BagSideProps & RefAttributes<Svg>>;

export default BagSide;
export { BagSide };

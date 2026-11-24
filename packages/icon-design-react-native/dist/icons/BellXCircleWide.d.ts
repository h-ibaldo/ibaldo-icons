import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellXCircleWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellXCircleWide: ForwardRefExoticComponent<BellXCircleWideProps & RefAttributes<Svg>>;

export default BellXCircleWide;
export { BellXCircleWide };

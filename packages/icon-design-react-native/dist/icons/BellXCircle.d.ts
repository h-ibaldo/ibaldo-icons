import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellXCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellXCircle: ForwardRefExoticComponent<BellXCircleProps & RefAttributes<Svg>>;

export default BellXCircle;
export { BellXCircle };

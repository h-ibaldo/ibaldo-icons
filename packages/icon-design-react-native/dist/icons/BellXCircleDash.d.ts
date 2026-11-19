import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellXCircleDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellXCircleDash: ForwardRefExoticComponent<BellXCircleDashProps & RefAttributes<Svg>>;

export default BellXCircleDash;
export { BellXCircleDash };

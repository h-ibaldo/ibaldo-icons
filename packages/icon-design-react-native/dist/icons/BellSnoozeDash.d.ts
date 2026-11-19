import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellSnoozeDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellSnoozeDash: ForwardRefExoticComponent<BellSnoozeDashProps & RefAttributes<Svg>>;

export default BellSnoozeDash;
export { BellSnoozeDash };

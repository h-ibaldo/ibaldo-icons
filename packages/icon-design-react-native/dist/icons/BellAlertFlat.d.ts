import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellAlertFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellAlertFlat: ForwardRefExoticComponent<BellAlertFlatProps & RefAttributes<Svg>>;

export default BellAlertFlat;
export { BellAlertFlat };

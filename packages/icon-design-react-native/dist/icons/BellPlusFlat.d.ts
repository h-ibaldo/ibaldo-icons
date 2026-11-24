import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellPlusFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellPlusFlat: ForwardRefExoticComponent<BellPlusFlatProps & RefAttributes<Svg>>;

export default BellPlusFlat;
export { BellPlusFlat };

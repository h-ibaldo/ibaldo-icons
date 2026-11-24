import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellPlus: ForwardRefExoticComponent<BellPlusProps & RefAttributes<Svg>>;

export default BellPlus;
export { BellPlus };

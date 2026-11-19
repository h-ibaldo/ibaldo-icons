import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BagFlaredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BagFlared: ForwardRefExoticComponent<BagFlaredProps & RefAttributes<Svg>>;

export default BagFlared;
export { BagFlared };

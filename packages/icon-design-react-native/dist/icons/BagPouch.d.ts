import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BagPouchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BagPouch: ForwardRefExoticComponent<BagPouchProps & RefAttributes<Svg>>;

export default BagPouch;
export { BagPouch };

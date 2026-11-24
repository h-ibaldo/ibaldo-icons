import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DivideHollowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DivideHollow: ForwardRefExoticComponent<DivideHollowProps & RefAttributes<Svg>>;

export default DivideHollow;
export { DivideHollow };

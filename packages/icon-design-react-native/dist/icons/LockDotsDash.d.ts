import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockDotsDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockDotsDash: ForwardRefExoticComponent<LockDotsDashProps & RefAttributes<Svg>>;

export default LockDotsDash;
export { LockDotsDash };

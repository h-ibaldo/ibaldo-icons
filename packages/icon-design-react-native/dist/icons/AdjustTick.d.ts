import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AdjustTickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AdjustTick: ForwardRefExoticComponent<AdjustTickProps & RefAttributes<Svg>>;

export default AdjustTick;
export { AdjustTick };

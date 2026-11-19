import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellOctagonOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellOctagonOff: ForwardRefExoticComponent<BellOctagonOffProps & RefAttributes<Svg>>;

export default BellOctagonOff;
export { BellOctagonOff };

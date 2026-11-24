import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellCheckCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellCheckCircle: ForwardRefExoticComponent<BellCheckCircleProps & RefAttributes<Svg>>;

export default BellCheckCircle;
export { BellCheckCircle };

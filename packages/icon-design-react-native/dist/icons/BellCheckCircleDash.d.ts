import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellCheckCircleDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellCheckCircleDash: ForwardRefExoticComponent<BellCheckCircleDashProps & RefAttributes<Svg>>;

export default BellCheckCircleDash;
export { BellCheckCircleDash };

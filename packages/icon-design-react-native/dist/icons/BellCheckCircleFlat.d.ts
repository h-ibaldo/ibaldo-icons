import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellCheckCircleFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellCheckCircleFlat: ForwardRefExoticComponent<BellCheckCircleFlatProps & RefAttributes<Svg>>;

export default BellCheckCircleFlat;
export { BellCheckCircleFlat };

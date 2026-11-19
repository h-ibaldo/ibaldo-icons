import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowConvergeUpCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowConvergeUpCircle: ForwardRefExoticComponent<ArrowConvergeUpCircleProps & RefAttributes<Svg>>;

export default ArrowConvergeUpCircle;
export { ArrowConvergeUpCircle };

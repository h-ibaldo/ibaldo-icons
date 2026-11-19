import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeArrowRight: ForwardRefExoticComponent<GaugeArrowRightProps & RefAttributes<Svg>>;

export default GaugeArrowRight;
export { GaugeArrowRight };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeDropArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeDropArrowRight: ForwardRefExoticComponent<GaugeDropArrowRightProps & RefAttributes<Svg>>;

export default GaugeDropArrowRight;
export { GaugeDropArrowRight };

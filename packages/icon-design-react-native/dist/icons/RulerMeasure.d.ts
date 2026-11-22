import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RulerMeasureProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RulerMeasure: ForwardRefExoticComponent<RulerMeasureProps & RefAttributes<Svg>>;

export default RulerMeasure;
export { RulerMeasure };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeTeardropSplitProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeTeardropSplit: ForwardRefExoticComponent<GaugeTeardropSplitProps & RefAttributes<Svg>>;

export default GaugeTeardropSplit;
export { GaugeTeardropSplit };

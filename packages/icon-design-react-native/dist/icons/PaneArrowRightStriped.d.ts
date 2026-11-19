import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaneArrowRightStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaneArrowRightStriped: ForwardRefExoticComponent<PaneArrowRightStripedProps & RefAttributes<Svg>>;

export default PaneArrowRightStriped;
export { PaneArrowRightStriped };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaneArrowUpRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaneArrowUpRight: ForwardRefExoticComponent<PaneArrowUpRightProps & RefAttributes<Svg>>;

export default PaneArrowUpRight;
export { PaneArrowUpRight };

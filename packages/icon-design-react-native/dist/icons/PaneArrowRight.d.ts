import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaneArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaneArrowRight: ForwardRefExoticComponent<PaneArrowRightProps & RefAttributes<Svg>>;

export default PaneArrowRight;
export { PaneArrowRight };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowTextXCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowTextXCircle: ForwardRefExoticComponent<WindowTextXCircleProps & RefAttributes<Svg>>;

export default WindowTextXCircle;
export { WindowTextXCircle };

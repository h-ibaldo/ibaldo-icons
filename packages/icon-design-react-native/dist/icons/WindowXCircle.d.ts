import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowXCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowXCircle: ForwardRefExoticComponent<WindowXCircleProps & RefAttributes<Svg>>;

export default WindowXCircle;
export { WindowXCircle };

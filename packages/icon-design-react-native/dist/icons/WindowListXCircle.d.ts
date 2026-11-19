import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowListXCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowListXCircle: ForwardRefExoticComponent<WindowListXCircleProps & RefAttributes<Svg>>;

export default WindowListXCircle;
export { WindowListXCircle };

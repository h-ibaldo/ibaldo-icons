import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowArrowLeftRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowArrowLeftRight: ForwardRefExoticComponent<WindowArrowLeftRightProps & RefAttributes<Svg>>;

export default WindowArrowLeftRight;
export { WindowArrowLeftRight };

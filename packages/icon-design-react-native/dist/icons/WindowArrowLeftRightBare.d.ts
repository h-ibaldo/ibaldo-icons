import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowArrowLeftRightBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowArrowLeftRightBare: ForwardRefExoticComponent<WindowArrowLeftRightBareProps & RefAttributes<Svg>>;

export default WindowArrowLeftRightBare;
export { WindowArrowLeftRightBare };

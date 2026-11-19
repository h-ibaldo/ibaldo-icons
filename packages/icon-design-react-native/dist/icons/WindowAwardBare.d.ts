import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowAwardBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowAwardBare: ForwardRefExoticComponent<WindowAwardBareProps & RefAttributes<Svg>>;

export default WindowAwardBare;
export { WindowAwardBare };

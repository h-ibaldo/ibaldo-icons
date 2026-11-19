import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowAwardProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowAward: ForwardRefExoticComponent<WindowAwardProps & RefAttributes<Svg>>;

export default WindowAward;
export { WindowAward };

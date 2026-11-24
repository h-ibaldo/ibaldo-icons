import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowCodeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowCode: ForwardRefExoticComponent<WindowCodeProps & RefAttributes<Svg>>;

export default WindowCode;
export { WindowCode };

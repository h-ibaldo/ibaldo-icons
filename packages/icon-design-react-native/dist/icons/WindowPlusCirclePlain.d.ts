import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowPlusCirclePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowPlusCirclePlain: ForwardRefExoticComponent<WindowPlusCirclePlainProps & RefAttributes<Svg>>;

export default WindowPlusCirclePlain;
export { WindowPlusCirclePlain };

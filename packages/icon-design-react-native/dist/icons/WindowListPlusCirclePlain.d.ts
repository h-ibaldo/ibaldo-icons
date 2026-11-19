import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowListPlusCirclePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowListPlusCirclePlain: ForwardRefExoticComponent<WindowListPlusCirclePlainProps & RefAttributes<Svg>>;

export default WindowListPlusCirclePlain;
export { WindowListPlusCirclePlain };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowChatBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowChatBare: ForwardRefExoticComponent<WindowChatBareProps & RefAttributes<Svg>>;

export default WindowChatBare;
export { WindowChatBare };

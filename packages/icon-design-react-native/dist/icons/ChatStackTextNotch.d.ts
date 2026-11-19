import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTextNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTextNotch: ForwardRefExoticComponent<ChatStackTextNotchProps & RefAttributes<Svg>>;

export default ChatStackTextNotch;
export { ChatStackTextNotch };

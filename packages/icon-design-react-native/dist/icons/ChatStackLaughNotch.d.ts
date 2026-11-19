import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackLaughNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackLaughNotch: ForwardRefExoticComponent<ChatStackLaughNotchProps & RefAttributes<Svg>>;

export default ChatStackLaughNotch;
export { ChatStackLaughNotch };

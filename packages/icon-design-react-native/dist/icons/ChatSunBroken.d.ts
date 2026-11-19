import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSunBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSunBroken: ForwardRefExoticComponent<ChatSunBrokenProps & RefAttributes<Svg>>;

export default ChatSunBroken;
export { ChatSunBroken };

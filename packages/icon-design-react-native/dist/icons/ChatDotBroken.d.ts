import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotBroken: ForwardRefExoticComponent<ChatDotBrokenProps & RefAttributes<Svg>>;

export default ChatDotBroken;
export { ChatDotBroken };

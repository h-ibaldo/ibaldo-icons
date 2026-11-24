import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsCircleBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsCircleBroken: ForwardRefExoticComponent<ChatDotsCircleBrokenProps & RefAttributes<Svg>>;

export default ChatDotsCircleBroken;
export { ChatDotsCircleBroken };

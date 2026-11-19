import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsCircleBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsCircleBroken: ForwardRefExoticComponent<ChatStackDotsCircleBrokenProps & RefAttributes<Svg>>;

export default ChatStackDotsCircleBroken;
export { ChatStackDotsCircleBroken };

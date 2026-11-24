import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsVerticalBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsVerticalBroken: ForwardRefExoticComponent<ChatDotsVerticalBrokenProps & RefAttributes<Svg>>;

export default ChatDotsVerticalBroken;
export { ChatDotsVerticalBroken };

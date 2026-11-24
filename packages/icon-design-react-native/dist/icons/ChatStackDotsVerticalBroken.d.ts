import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsVerticalBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsVerticalBroken: ForwardRefExoticComponent<ChatStackDotsVerticalBrokenProps & RefAttributes<Svg>>;

export default ChatStackDotsVerticalBroken;
export { ChatStackDotsVerticalBroken };

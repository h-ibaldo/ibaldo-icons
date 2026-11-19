import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSearchBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSearchBroken: ForwardRefExoticComponent<ChatSearchBrokenProps & RefAttributes<Svg>>;

export default ChatSearchBroken;
export { ChatSearchBroken };

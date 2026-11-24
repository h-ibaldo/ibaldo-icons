import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackLaughBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackLaughBroken: ForwardRefExoticComponent<ChatStackLaughBrokenProps & RefAttributes<Svg>>;

export default ChatStackLaughBroken;
export { ChatStackLaughBroken };

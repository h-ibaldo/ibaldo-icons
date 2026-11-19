import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLaughBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLaughBroken: ForwardRefExoticComponent<ChatLaughBrokenProps & RefAttributes<Svg>>;

export default ChatLaughBroken;
export { ChatLaughBroken };

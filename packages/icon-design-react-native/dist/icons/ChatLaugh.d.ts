import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLaughProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLaugh: ForwardRefExoticComponent<ChatLaughProps & RefAttributes<Svg>>;

export default ChatLaugh;
export { ChatLaugh };

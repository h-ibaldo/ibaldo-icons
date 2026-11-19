import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLaughBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLaughBoxy: ForwardRefExoticComponent<ChatLaughBoxyProps & RefAttributes<Svg>>;

export default ChatLaughBoxy;
export { ChatLaughBoxy };

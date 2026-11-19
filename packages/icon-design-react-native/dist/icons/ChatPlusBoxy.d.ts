import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusBoxy: ForwardRefExoticComponent<ChatPlusBoxyProps & RefAttributes<Svg>>;

export default ChatPlusBoxy;
export { ChatPlusBoxy };

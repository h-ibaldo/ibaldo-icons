import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackLaughBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackLaughBoxy: ForwardRefExoticComponent<ChatStackLaughBoxyProps & RefAttributes<Svg>>;

export default ChatStackLaughBoxy;
export { ChatStackLaughBoxy };

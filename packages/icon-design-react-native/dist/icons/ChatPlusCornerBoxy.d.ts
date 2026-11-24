import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusCornerBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusCornerBoxy: ForwardRefExoticComponent<ChatPlusCornerBoxyProps & RefAttributes<Svg>>;

export default ChatPlusCornerBoxy;
export { ChatPlusCornerBoxy };

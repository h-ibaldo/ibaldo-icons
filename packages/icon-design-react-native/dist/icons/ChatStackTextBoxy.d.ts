import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTextBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTextBoxy: ForwardRefExoticComponent<ChatStackTextBoxyProps & RefAttributes<Svg>>;

export default ChatStackTextBoxy;
export { ChatStackTextBoxy };

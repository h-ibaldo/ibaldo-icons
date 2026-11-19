import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackBoxy: ForwardRefExoticComponent<ChatStackBoxyProps & RefAttributes<Svg>>;

export default ChatStackBoxy;
export { ChatStackBoxy };

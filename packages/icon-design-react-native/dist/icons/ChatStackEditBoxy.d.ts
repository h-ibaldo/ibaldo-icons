import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackEditBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackEditBoxy: ForwardRefExoticComponent<ChatStackEditBoxyProps & RefAttributes<Svg>>;

export default ChatStackEditBoxy;
export { ChatStackEditBoxy };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackEditProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackEdit: ForwardRefExoticComponent<ChatStackEditProps & RefAttributes<Svg>>;

export default ChatStackEdit;
export { ChatStackEdit };

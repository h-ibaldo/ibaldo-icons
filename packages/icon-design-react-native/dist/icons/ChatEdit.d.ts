import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatEditProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatEdit: ForwardRefExoticComponent<ChatEditProps & RefAttributes<Svg>>;

export default ChatEdit;
export { ChatEdit };

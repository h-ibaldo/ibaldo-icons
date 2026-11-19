import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckDoublePointedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoublePointed: ForwardRefExoticComponent<ChatCheckDoublePointedProps & RefAttributes<Svg>>;

export default ChatCheckDoublePointed;
export { ChatCheckDoublePointed };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusPointedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusPointed: ForwardRefExoticComponent<ChatMinusPointedProps & RefAttributes<Svg>>;

export default ChatMinusPointed;
export { ChatMinusPointed };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatQuoteBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatQuoteBoxy: ForwardRefExoticComponent<ChatQuoteBoxyProps & RefAttributes<Svg>>;

export default ChatQuoteBoxy;
export { ChatQuoteBoxy };

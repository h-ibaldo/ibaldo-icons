import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDollarBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDollarBoxy: ForwardRefExoticComponent<ChatDollarBoxyProps & RefAttributes<Svg>>;

export default ChatDollarBoxy;
export { ChatDollarBoxy };

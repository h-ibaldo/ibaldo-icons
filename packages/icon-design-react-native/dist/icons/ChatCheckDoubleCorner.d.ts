import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckDoubleCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoubleCorner: ForwardRefExoticComponent<ChatCheckDoubleCornerProps & RefAttributes<Svg>>;

export default ChatCheckDoubleCorner;
export { ChatCheckDoubleCorner };

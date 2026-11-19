import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXDoubleSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXDoubleSlant: ForwardRefExoticComponent<ChatXDoubleSlantProps & RefAttributes<Svg>>;

export default ChatXDoubleSlant;
export { ChatXDoubleSlant };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckCorner: ForwardRefExoticComponent<ChatCheckCornerProps & RefAttributes<Svg>>;

export default ChatCheckCorner;
export { ChatCheckCorner };

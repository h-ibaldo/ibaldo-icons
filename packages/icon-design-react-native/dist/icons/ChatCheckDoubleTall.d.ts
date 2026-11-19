import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckDoubleTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoubleTall: ForwardRefExoticComponent<ChatCheckDoubleTallProps & RefAttributes<Svg>>;

export default ChatCheckDoubleTall;
export { ChatCheckDoubleTall };

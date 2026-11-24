import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTriangleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTriangleRound: ForwardRefExoticComponent<ChatTriangleRoundProps & RefAttributes<Svg>>;

export default ChatTriangleRound;
export { ChatTriangleRound };

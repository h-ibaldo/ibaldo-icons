import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStarCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStarCorner: ForwardRefExoticComponent<ChatStarCornerProps & RefAttributes<Svg>>;

export default ChatStarCorner;
export { ChatStarCorner };

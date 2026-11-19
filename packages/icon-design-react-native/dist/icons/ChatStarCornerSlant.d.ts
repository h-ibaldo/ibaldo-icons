import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStarCornerSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStarCornerSlant: ForwardRefExoticComponent<ChatStarCornerSlantProps & RefAttributes<Svg>>;

export default ChatStarCornerSlant;
export { ChatStarCornerSlant };

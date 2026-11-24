import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSearchCornerSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSearchCornerSlant: ForwardRefExoticComponent<ChatStackSearchCornerSlantProps & RefAttributes<Svg>>;

export default ChatStackSearchCornerSlant;
export { ChatStackSearchCornerSlant };

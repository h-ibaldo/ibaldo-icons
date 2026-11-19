import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSearchCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSearchCorner: ForwardRefExoticComponent<ChatStackSearchCornerProps & RefAttributes<Svg>>;

export default ChatStackSearchCorner;
export { ChatStackSearchCorner };

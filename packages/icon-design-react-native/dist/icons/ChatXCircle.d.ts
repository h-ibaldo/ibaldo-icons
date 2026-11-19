import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXCircle: ForwardRefExoticComponent<ChatXCircleProps & RefAttributes<Svg>>;

export default ChatXCircle;
export { ChatXCircle };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXCircleSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXCircleSlant: ForwardRefExoticComponent<ChatXCircleSlantProps & RefAttributes<Svg>>;

export default ChatXCircleSlant;
export { ChatXCircleSlant };

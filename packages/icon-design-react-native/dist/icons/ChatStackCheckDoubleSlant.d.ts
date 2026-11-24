import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackCheckDoubleSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckDoubleSlant: ForwardRefExoticComponent<ChatStackCheckDoubleSlantProps & RefAttributes<Svg>>;

export default ChatStackCheckDoubleSlant;
export { ChatStackCheckDoubleSlant };

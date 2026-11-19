import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackXSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackXSlant: ForwardRefExoticComponent<ChatStackXSlantProps & RefAttributes<Svg>>;

export default ChatStackXSlant;
export { ChatStackXSlant };

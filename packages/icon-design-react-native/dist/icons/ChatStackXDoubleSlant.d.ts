import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackXDoubleSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackXDoubleSlant: ForwardRefExoticComponent<ChatStackXDoubleSlantProps & RefAttributes<Svg>>;

export default ChatStackXDoubleSlant;
export { ChatStackXDoubleSlant };

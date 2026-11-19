import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackXDoubleFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackXDoubleFlipped: ForwardRefExoticComponent<ChatStackXDoubleFlippedProps & RefAttributes<Svg>>;

export default ChatStackXDoubleFlipped;
export { ChatStackXDoubleFlipped };

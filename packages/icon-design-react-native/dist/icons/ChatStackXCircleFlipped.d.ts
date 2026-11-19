import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackXCircleFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackXCircleFlipped: ForwardRefExoticComponent<ChatStackXCircleFlippedProps & RefAttributes<Svg>>;

export default ChatStackXCircleFlipped;
export { ChatStackXCircleFlipped };

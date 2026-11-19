import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackClockFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackClockFacing: ForwardRefExoticComponent<ChatStackClockFacingProps & RefAttributes<Svg>>;

export default ChatStackClockFacing;
export { ChatStackClockFacing };

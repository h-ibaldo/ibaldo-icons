import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackEditFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackEditFacing: ForwardRefExoticComponent<ChatStackEditFacingProps & RefAttributes<Svg>>;

export default ChatStackEditFacing;
export { ChatStackEditFacing };

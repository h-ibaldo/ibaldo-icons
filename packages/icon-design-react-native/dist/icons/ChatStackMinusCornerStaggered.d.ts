import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackMinusCornerStaggeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusCornerStaggered: ForwardRefExoticComponent<ChatStackMinusCornerStaggeredProps & RefAttributes<Svg>>;

export default ChatStackMinusCornerStaggered;
export { ChatStackMinusCornerStaggered };

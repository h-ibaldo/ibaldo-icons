import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackMinusLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusLayered: ForwardRefExoticComponent<ChatStackMinusLayeredProps & RefAttributes<Svg>>;

export default ChatStackMinusLayered;
export { ChatStackMinusLayered };

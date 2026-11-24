import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDollarCornerNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDollarCornerNotch: ForwardRefExoticComponent<ChatStackDollarCornerNotchProps & RefAttributes<Svg>>;

export default ChatStackDollarCornerNotch;
export { ChatStackDollarCornerNotch };

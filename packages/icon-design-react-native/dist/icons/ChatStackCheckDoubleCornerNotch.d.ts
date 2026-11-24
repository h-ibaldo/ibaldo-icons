import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackCheckDoubleCornerNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckDoubleCornerNotch: ForwardRefExoticComponent<ChatStackCheckDoubleCornerNotchProps & RefAttributes<Svg>>;

export default ChatStackCheckDoubleCornerNotch;
export { ChatStackCheckDoubleCornerNotch };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackCheckCornerNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckCornerNotch: ForwardRefExoticComponent<ChatStackCheckCornerNotchProps & RefAttributes<Svg>>;

export default ChatStackCheckCornerNotch;
export { ChatStackCheckCornerNotch };

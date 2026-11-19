import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSearchCornerNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSearchCornerNotch: ForwardRefExoticComponent<ChatStackSearchCornerNotchProps & RefAttributes<Svg>>;

export default ChatStackSearchCornerNotch;
export { ChatStackSearchCornerNotch };

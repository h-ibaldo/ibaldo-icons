import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsFacing: ForwardRefExoticComponent<ChatStackDotsFacingProps & RefAttributes<Svg>>;

export default ChatStackDotsFacing;
export { ChatStackDotsFacing };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackPlusFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackPlusFacing: ForwardRefExoticComponent<ChatStackPlusFacingProps & RefAttributes<Svg>>;

export default ChatStackPlusFacing;
export { ChatStackPlusFacing };

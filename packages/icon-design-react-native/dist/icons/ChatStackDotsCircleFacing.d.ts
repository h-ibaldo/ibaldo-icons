import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsCircleFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsCircleFacing: ForwardRefExoticComponent<ChatStackDotsCircleFacingProps & RefAttributes<Svg>>;

export default ChatStackDotsCircleFacing;
export { ChatStackDotsCircleFacing };

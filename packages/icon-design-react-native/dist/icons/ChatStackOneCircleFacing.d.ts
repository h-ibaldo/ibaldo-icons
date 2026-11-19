import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackOneCircleFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackOneCircleFacing: ForwardRefExoticComponent<ChatStackOneCircleFacingProps & RefAttributes<Svg>>;

export default ChatStackOneCircleFacing;
export { ChatStackOneCircleFacing };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackInfoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackInfo: ForwardRefExoticComponent<ChatStackInfoProps & RefAttributes<Svg>>;

export default ChatStackInfo;
export { ChatStackInfo };

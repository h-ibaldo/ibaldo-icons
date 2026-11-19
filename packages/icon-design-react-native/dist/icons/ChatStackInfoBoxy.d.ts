import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackInfoBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackInfoBoxy: ForwardRefExoticComponent<ChatStackInfoBoxyProps & RefAttributes<Svg>>;

export default ChatStackInfoBoxy;
export { ChatStackInfoBoxy };

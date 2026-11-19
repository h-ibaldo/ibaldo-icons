import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackXBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackXBoxy: ForwardRefExoticComponent<ChatStackXBoxyProps & RefAttributes<Svg>>;

export default ChatStackXBoxy;
export { ChatStackXBoxy };

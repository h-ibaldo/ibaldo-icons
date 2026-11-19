import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatVideoBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatVideoBoxy: ForwardRefExoticComponent<ChatVideoBoxyProps & RefAttributes<Svg>>;

export default ChatVideoBoxy;
export { ChatVideoBoxy };

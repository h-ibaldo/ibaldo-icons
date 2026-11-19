import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackForwardBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackForwardBoxy: ForwardRefExoticComponent<ChatStackForwardBoxyProps & RefAttributes<Svg>>;

export default ChatStackForwardBoxy;
export { ChatStackForwardBoxy };

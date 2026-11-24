import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatEditBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatEditBoxy: ForwardRefExoticComponent<ChatEditBoxyProps & RefAttributes<Svg>>;

export default ChatEditBoxy;
export { ChatEditBoxy };

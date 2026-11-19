import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatInfoBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatInfoBoxy: ForwardRefExoticComponent<ChatInfoBoxyProps & RefAttributes<Svg>>;

export default ChatInfoBoxy;
export { ChatInfoBoxy };

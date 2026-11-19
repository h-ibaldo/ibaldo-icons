import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXCornerBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXCornerBoxy: ForwardRefExoticComponent<ChatXCornerBoxyProps & RefAttributes<Svg>>;

export default ChatXCornerBoxy;
export { ChatXCornerBoxy };

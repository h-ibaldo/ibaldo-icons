import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSunBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSunBoxy: ForwardRefExoticComponent<ChatStackSunBoxyProps & RefAttributes<Svg>>;

export default ChatStackSunBoxy;
export { ChatStackSunBoxy };

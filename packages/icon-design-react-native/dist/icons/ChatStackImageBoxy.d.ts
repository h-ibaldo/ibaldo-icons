import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackImageBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackImageBoxy: ForwardRefExoticComponent<ChatStackImageBoxyProps & RefAttributes<Svg>>;

export default ChatStackImageBoxy;
export { ChatStackImageBoxy };

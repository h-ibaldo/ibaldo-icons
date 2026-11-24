import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackWarningBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackWarningBoxy: ForwardRefExoticComponent<ChatStackWarningBoxyProps & RefAttributes<Svg>>;

export default ChatStackWarningBoxy;
export { ChatStackWarningBoxy };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackAlertBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackAlertBoxy: ForwardRefExoticComponent<ChatStackAlertBoxyProps & RefAttributes<Svg>>;

export default ChatStackAlertBoxy;
export { ChatStackAlertBoxy };

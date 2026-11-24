import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSettingsSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSettingsSlant: ForwardRefExoticComponent<ChatSettingsSlantProps & RefAttributes<Svg>>;

export default ChatSettingsSlant;
export { ChatSettingsSlant };

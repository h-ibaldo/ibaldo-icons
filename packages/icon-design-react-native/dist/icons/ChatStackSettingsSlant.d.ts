import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSettingsSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSettingsSlant: ForwardRefExoticComponent<ChatStackSettingsSlantProps & RefAttributes<Svg>>;

export default ChatStackSettingsSlant;
export { ChatStackSettingsSlant };

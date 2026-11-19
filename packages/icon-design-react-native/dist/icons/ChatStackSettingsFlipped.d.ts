import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSettingsFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSettingsFlipped: ForwardRefExoticComponent<ChatStackSettingsFlippedProps & RefAttributes<Svg>>;

export default ChatStackSettingsFlipped;
export { ChatStackSettingsFlipped };

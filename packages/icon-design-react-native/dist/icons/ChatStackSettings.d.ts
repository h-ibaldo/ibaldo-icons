import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSettings: ForwardRefExoticComponent<ChatStackSettingsProps & RefAttributes<Svg>>;

export default ChatStackSettings;
export { ChatStackSettings };

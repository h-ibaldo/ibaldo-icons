import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSettings: ForwardRefExoticComponent<ChatSettingsProps & RefAttributes<Svg>>;

export default ChatSettings;
export { ChatSettings };

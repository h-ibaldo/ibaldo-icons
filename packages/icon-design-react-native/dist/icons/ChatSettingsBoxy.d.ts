import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSettingsBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSettingsBoxy: ForwardRefExoticComponent<ChatSettingsBoxyProps & RefAttributes<Svg>>;

export default ChatSettingsBoxy;
export { ChatSettingsBoxy };

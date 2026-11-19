import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSettingsBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSettingsBoxy: ForwardRefExoticComponent<ChatStackSettingsBoxyProps & RefAttributes<Svg>>;

export default ChatStackSettingsBoxy;
export { ChatStackSettingsBoxy };

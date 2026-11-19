import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSettingsNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSettingsNotch: ForwardRefExoticComponent<ChatStackSettingsNotchProps & RefAttributes<Svg>>;

export default ChatStackSettingsNotch;
export { ChatStackSettingsNotch };

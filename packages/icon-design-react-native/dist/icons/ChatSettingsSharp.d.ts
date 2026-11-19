import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSettingsSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSettingsSharp: ForwardRefExoticComponent<ChatSettingsSharpProps & RefAttributes<Svg>>;

export default ChatSettingsSharp;
export { ChatSettingsSharp };

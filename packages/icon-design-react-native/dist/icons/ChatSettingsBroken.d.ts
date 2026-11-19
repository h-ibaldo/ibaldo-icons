import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSettingsBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSettingsBroken: ForwardRefExoticComponent<ChatSettingsBrokenProps & RefAttributes<Svg>>;

export default ChatSettingsBroken;
export { ChatSettingsBroken };

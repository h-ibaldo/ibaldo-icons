import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSettingsTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSettingsTooltip: ForwardRefExoticComponent<ChatSettingsTooltipProps & RefAttributes<Svg>>;

export default ChatSettingsTooltip;
export { ChatSettingsTooltip };

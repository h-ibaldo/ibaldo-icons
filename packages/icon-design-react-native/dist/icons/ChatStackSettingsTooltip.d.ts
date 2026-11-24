import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSettingsTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSettingsTooltip: ForwardRefExoticComponent<ChatStackSettingsTooltipProps & RefAttributes<Svg>>;

export default ChatStackSettingsTooltip;
export { ChatStackSettingsTooltip };

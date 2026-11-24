import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatEyeTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatEyeTooltip: ForwardRefExoticComponent<ChatEyeTooltipProps & RefAttributes<Svg>>;

export default ChatEyeTooltip;
export { ChatEyeTooltip };

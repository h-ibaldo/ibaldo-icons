import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLettersTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLettersTooltip: ForwardRefExoticComponent<ChatLettersTooltipProps & RefAttributes<Svg>>;

export default ChatLettersTooltip;
export { ChatLettersTooltip };

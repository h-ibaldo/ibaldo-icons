import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackImageTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackImageTooltip: ForwardRefExoticComponent<ChatStackImageTooltipProps & RefAttributes<Svg>>;

export default ChatStackImageTooltip;
export { ChatStackImageTooltip };

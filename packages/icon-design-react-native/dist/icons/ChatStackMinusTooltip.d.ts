import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackMinusTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusTooltip: ForwardRefExoticComponent<ChatStackMinusTooltipProps & RefAttributes<Svg>>;

export default ChatStackMinusTooltip;
export { ChatStackMinusTooltip };

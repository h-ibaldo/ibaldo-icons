import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackXTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackXTooltip: ForwardRefExoticComponent<ChatStackXTooltipProps & RefAttributes<Svg>>;

export default ChatStackXTooltip;
export { ChatStackXTooltip };

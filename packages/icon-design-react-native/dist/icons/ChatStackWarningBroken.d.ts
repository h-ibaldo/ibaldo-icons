import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackWarningBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackWarningBroken: ForwardRefExoticComponent<ChatStackWarningBrokenProps & RefAttributes<Svg>>;

export default ChatStackWarningBroken;
export { ChatStackWarningBroken };

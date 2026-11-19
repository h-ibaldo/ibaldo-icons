import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSunBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSunBroken: ForwardRefExoticComponent<ChatStackSunBrokenProps & RefAttributes<Svg>>;

export default ChatStackSunBroken;
export { ChatStackSunBroken };

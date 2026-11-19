import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackMinusBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusBroken: ForwardRefExoticComponent<ChatStackMinusBrokenProps & RefAttributes<Svg>>;

export default ChatStackMinusBroken;
export { ChatStackMinusBroken };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackWarningNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackWarningNotch: ForwardRefExoticComponent<ChatStackWarningNotchProps & RefAttributes<Svg>>;

export default ChatStackWarningNotch;
export { ChatStackWarningNotch };

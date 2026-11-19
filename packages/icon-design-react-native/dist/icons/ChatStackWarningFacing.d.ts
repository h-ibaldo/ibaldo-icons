import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackWarningFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackWarningFacing: ForwardRefExoticComponent<ChatStackWarningFacingProps & RefAttributes<Svg>>;

export default ChatStackWarningFacing;
export { ChatStackWarningFacing };

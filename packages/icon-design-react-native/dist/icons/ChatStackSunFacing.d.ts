import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSunFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSunFacing: ForwardRefExoticComponent<ChatStackSunFacingProps & RefAttributes<Svg>>;

export default ChatStackSunFacing;
export { ChatStackSunFacing };

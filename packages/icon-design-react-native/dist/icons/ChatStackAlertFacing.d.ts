import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackAlertFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackAlertFacing: ForwardRefExoticComponent<ChatStackAlertFacingProps & RefAttributes<Svg>>;

export default ChatStackAlertFacing;
export { ChatStackAlertFacing };

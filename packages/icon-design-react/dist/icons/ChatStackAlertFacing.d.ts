import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackAlertFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackAlertFacing: ForwardRefExoticComponent<ChatStackAlertFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackAlertFacing;
export { ChatStackAlertFacing };

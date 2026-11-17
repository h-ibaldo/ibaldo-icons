import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackClockFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackClockFacing: ForwardRefExoticComponent<ChatStackClockFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackClockFacing;
export { ChatStackClockFacing };

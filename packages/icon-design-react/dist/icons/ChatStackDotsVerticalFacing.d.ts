import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsVerticalFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsVerticalFacing: ForwardRefExoticComponent<ChatStackDotsVerticalFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsVerticalFacing;
export { ChatStackDotsVerticalFacing };

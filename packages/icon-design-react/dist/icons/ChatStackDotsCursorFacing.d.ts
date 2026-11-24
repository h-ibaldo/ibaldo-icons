import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsCursorFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsCursorFacing: ForwardRefExoticComponent<ChatStackDotsCursorFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsCursorFacing;
export { ChatStackDotsCursorFacing };

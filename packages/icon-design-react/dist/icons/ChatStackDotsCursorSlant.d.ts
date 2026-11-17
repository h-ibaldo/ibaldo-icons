import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsCursorSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsCursorSlant: ForwardRefExoticComponent<ChatStackDotsCursorSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsCursorSlant;
export { ChatStackDotsCursorSlant };

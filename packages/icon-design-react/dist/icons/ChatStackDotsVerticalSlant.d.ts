import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsVerticalSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsVerticalSlant: ForwardRefExoticComponent<ChatStackDotsVerticalSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsVerticalSlant;
export { ChatStackDotsVerticalSlant };

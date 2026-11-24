import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsVerticalPointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsVerticalPointed: ForwardRefExoticComponent<ChatDotsVerticalPointedProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsVerticalPointed;
export { ChatDotsVerticalPointed };

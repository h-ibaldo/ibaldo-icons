import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsPointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsPointed: ForwardRefExoticComponent<ChatDotsPointedProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsPointed;
export { ChatDotsPointed };

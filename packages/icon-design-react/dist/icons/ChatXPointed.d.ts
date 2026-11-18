import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXPointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXPointed: ForwardRefExoticComponent<ChatXPointedProps & RefAttributes<SVGSVGElement>>;

export default ChatXPointed;
export { ChatXPointed };

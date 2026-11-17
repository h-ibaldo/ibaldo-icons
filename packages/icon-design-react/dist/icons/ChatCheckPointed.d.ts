import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckPointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckPointed: ForwardRefExoticComponent<ChatCheckPointedProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckPointed;
export { ChatCheckPointed };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckDoublePointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckDoublePointed: ForwardRefExoticComponent<ChatCheckDoublePointedProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckDoublePointed;
export { ChatCheckDoublePointed };

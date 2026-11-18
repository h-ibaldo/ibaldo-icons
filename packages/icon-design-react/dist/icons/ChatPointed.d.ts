import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPointed: ForwardRefExoticComponent<ChatPointedProps & RefAttributes<SVGSVGElement>>;

export default ChatPointed;
export { ChatPointed };

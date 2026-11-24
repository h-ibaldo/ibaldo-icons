import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStack: ForwardRefExoticComponent<ChatStackProps & RefAttributes<SVGSVGElement>>;

export default ChatStack;
export { ChatStack };

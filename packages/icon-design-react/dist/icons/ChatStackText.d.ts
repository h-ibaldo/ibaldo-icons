import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTextProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackText: ForwardRefExoticComponent<ChatStackTextProps & RefAttributes<SVGSVGElement>>;

export default ChatStackText;
export { ChatStackText };

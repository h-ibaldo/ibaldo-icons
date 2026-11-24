import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSlant: ForwardRefExoticComponent<ChatStackSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSlant;
export { ChatStackSlant };

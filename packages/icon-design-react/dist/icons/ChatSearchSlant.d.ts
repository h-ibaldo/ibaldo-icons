import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSearchSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSearchSlant: ForwardRefExoticComponent<ChatSearchSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatSearchSlant;
export { ChatSearchSlant };

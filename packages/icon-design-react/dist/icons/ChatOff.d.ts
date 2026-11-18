import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatOff: ForwardRefExoticComponent<ChatOffProps & RefAttributes<SVGSVGElement>>;

export default ChatOff;
export { ChatOff };

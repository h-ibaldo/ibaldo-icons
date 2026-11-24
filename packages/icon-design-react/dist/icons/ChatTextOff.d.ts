import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextOff: ForwardRefExoticComponent<ChatTextOffProps & RefAttributes<SVGSVGElement>>;

export default ChatTextOff;
export { ChatTextOff };

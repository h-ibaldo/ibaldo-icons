import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTall: ForwardRefExoticComponent<ChatTallProps & RefAttributes<SVGSVGElement>>;

export default ChatTall;
export { ChatTall };

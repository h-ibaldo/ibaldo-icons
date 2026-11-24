import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXTall: ForwardRefExoticComponent<ChatXTallProps & RefAttributes<SVGSVGElement>>;

export default ChatXTall;
export { ChatXTall };

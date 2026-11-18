import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextTall: ForwardRefExoticComponent<ChatTextTallProps & RefAttributes<SVGSVGElement>>;

export default ChatTextTall;
export { ChatTextTall };

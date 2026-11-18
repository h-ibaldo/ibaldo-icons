import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckTall: ForwardRefExoticComponent<ChatCheckTallProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckTall;
export { ChatCheckTall };

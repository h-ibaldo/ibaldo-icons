import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackLaughNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackLaughNotch: ForwardRefExoticComponent<ChatStackLaughNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackLaughNotch;
export { ChatStackLaughNotch };

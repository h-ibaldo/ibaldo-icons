import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackEditNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackEditNotch: ForwardRefExoticComponent<ChatStackEditNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackEditNotch;
export { ChatStackEditNotch };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackEditBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackEditBroken: ForwardRefExoticComponent<ChatStackEditBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackEditBroken;
export { ChatStackEditBroken };

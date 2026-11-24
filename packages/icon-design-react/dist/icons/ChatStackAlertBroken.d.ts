import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackAlertBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackAlertBroken: ForwardRefExoticComponent<ChatStackAlertBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackAlertBroken;
export { ChatStackAlertBroken };

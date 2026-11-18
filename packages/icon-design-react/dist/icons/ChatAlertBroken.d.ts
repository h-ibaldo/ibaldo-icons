import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatAlertBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatAlertBroken: ForwardRefExoticComponent<ChatAlertBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatAlertBroken;
export { ChatAlertBroken };

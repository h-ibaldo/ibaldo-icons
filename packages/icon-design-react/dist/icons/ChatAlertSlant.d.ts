import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatAlertSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatAlertSlant: ForwardRefExoticComponent<ChatAlertSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatAlertSlant;
export { ChatAlertSlant };

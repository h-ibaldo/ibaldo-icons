import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatAlertSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatAlertSharp: ForwardRefExoticComponent<ChatAlertSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatAlertSharp;
export { ChatAlertSharp };

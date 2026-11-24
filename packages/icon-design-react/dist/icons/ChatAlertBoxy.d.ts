import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatAlertBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatAlertBoxy: ForwardRefExoticComponent<ChatAlertBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatAlertBoxy;
export { ChatAlertBoxy };

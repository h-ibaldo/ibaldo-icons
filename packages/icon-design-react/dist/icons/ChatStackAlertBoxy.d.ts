import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackAlertBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackAlertBoxy: ForwardRefExoticComponent<ChatStackAlertBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackAlertBoxy;
export { ChatStackAlertBoxy };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatWarningProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatWarning: ForwardRefExoticComponent<ChatWarningProps & RefAttributes<SVGSVGElement>>;

export default ChatWarning;
export { ChatWarning };

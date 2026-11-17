import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatWarningBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatWarningBoxy: ForwardRefExoticComponent<ChatWarningBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatWarningBoxy;
export { ChatWarningBoxy };

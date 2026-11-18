import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatWarningBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatWarningBroken: ForwardRefExoticComponent<ChatWarningBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatWarningBroken;
export { ChatWarningBroken };

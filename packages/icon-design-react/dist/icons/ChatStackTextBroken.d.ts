import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTextBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTextBroken: ForwardRefExoticComponent<ChatStackTextBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTextBroken;
export { ChatStackTextBroken };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackWarningBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackWarningBroken: ForwardRefExoticComponent<ChatStackWarningBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackWarningBroken;
export { ChatStackWarningBroken };

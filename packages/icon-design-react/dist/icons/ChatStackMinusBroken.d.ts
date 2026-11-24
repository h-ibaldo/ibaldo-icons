import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackMinusBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackMinusBroken: ForwardRefExoticComponent<ChatStackMinusBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackMinusBroken;
export { ChatStackMinusBroken };

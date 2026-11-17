import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckBroken: ForwardRefExoticComponent<ChatStackCheckBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckBroken;
export { ChatStackCheckBroken };

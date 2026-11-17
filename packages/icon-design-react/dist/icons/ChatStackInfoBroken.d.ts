import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackInfoBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackInfoBroken: ForwardRefExoticComponent<ChatStackInfoBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackInfoBroken;
export { ChatStackInfoBroken };
